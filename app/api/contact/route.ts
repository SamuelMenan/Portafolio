import { NextRequest, NextResponse } from 'next/server'
import { getMongoClientPromise } from '@/lib/mongodb'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const DATABASE_NAME = process.env.MONGODB_DB_NAME || 'portfolio'
const COLLECTION_NAME = process.env.MONGODB_CONTACT_COLLECTION || 'contact_messages'
const ADMIN_KEY = process.env.CONTACT_ADMIN_KEY
const HAS_MONGODB_URI = Boolean(process.env.MONGODB_URI?.trim())

const MIN_MESSAGE_LENGTH = 20
const MAX_MESSAGE_LENGTH = 5000

function normalizeString(value: unknown, maxLength: number) {
  return String(value ?? '').trim().slice(0, maxLength)
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function toPublicDocument(document: {
  _id: { toString: () => string }
  name: string
  email: string
  message: string
  createdAt: Date
  status?: string
}) {
  return {
    id: document._id.toString(),
    name: document.name,
    email: document.email,
    message: document.message,
    status: document.status || 'new',
    createdAt: document.createdAt,
  }
}

function mapRouteError(error: unknown, fallbackMessage: string) {
  if (error instanceof Error) {
    const message = error.message.toLowerCase()

    if (message.includes('missing mongodb_uri')) {
      return {
        status: 503,
        error: 'Missing MONGODB_URI in environment variables.',
        code: 'MISSING_MONGODB_URI',
      }
    }

    if (message.includes('authentication failed')) {
      return {
        status: 503,
        error: 'MongoDB authentication failed. Check username/password in MONGODB_URI.',
        code: 'MONGODB_AUTH_FAILED',
      }
    }

    if (message.includes('not authorized')) {
      return {
        status: 503,
        error: 'MongoDB user is not authorized for this database/collection.',
        code: 'MONGODB_NOT_AUTHORIZED',
      }
    }

    if (message.includes('ip') && message.includes('not allowed')) {
      return {
        status: 503,
        error: 'MongoDB network access denied. Allow Vercel access in Atlas Network Access.',
        code: 'MONGODB_IP_NOT_ALLOWED',
      }
    }

    if (message.includes('server selection timed out')) {
      return {
        status: 503,
        error: 'MongoDB server selection timed out. Check Atlas network access and cluster availability.',
        code: 'MONGODB_SERVER_SELECTION_TIMEOUT',
      }
    }

    if (message.includes('querysrv enotfound') || message.includes('getaddrinfo enotfound')) {
      return {
        status: 503,
        error: 'MongoDB SRV/DNS resolution failed. Verify cluster host in MONGODB_URI.',
        code: 'MONGODB_DNS_ERROR',
      }
    }

    if (message.includes('certificate') || message.includes('tls')) {
      return {
        status: 503,
        error: 'MongoDB TLS/SSL handshake failed. Verify URI and Atlas TLS settings.',
        code: 'MONGODB_TLS_ERROR',
      }
    }

    if (message.includes('timeout') || message.includes('timed out')) {
      return {
        status: 503,
        error: 'MongoDB connection timed out. Check Atlas availability and network access.',
        code: 'MONGODB_TIMEOUT',
      }
    }

    if (message.includes('ecconnrefused') || message.includes('connection refused')) {
      return {
        status: 503,
        error: 'MongoDB connection refused. Verify URI host, port, and network access.',
        code: 'MONGODB_CONNECTION_REFUSED',
      }
    }
  }

  return {
    status: 500,
    error: fallbackMessage,
    code: 'INTERNAL_ERROR',
  }
}

export async function POST(request: NextRequest) {
  try {
    if (!HAS_MONGODB_URI) {
      return NextResponse.json(
        { ok: false, error: 'Missing MONGODB_URI in environment variables.', code: 'MISSING_MONGODB_URI' },
        { status: 503 },
      )
    }

    const body = await request.json()

    const name = normalizeString(body?.name, 120)
    const email = normalizeString(body?.email, 180)
    const message = normalizeString(body?.message, MAX_MESSAGE_LENGTH)

    if (name.length < 2 || !isValidEmail(email) || message.length < MIN_MESSAGE_LENGTH) {
      return NextResponse.json(
        { ok: false, error: 'Invalid contact payload.' },
        { status: 400 },
      )
    }

    const client = await getMongoClientPromise()
    const collection = client.db(DATABASE_NAME).collection(COLLECTION_NAME)

    const forwardedFor = request.headers.get('x-forwarded-for') || ''
    const ipAddress = normalizeString(forwardedFor.split(',')[0], 120)
    const userAgent = normalizeString(request.headers.get('user-agent'), 260)

    const result = await collection.insertOne({
      name,
      email,
      message,
      source: 'portfolio-contact-form',
      status: 'new',
      ipAddress,
      userAgent,
      createdAt: new Date(),
    })

    return NextResponse.json(
      {
        ok: true,
        id: result.insertedId.toString(),
      },
      { status: 201 },
    )
  } catch (error) {
    const mapped = mapRouteError(error, 'Could not save contact message.')
    console.error('[api/contact][POST]', error)

    return NextResponse.json(
      { ok: false, error: mapped.error, code: mapped.code },
      { status: mapped.status },
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    if (!HAS_MONGODB_URI) {
      return NextResponse.json(
        { ok: false, error: 'Missing MONGODB_URI in environment variables.', code: 'MISSING_MONGODB_URI' },
        { status: 503 },
      )
    }

    if (!ADMIN_KEY) {
      return NextResponse.json(
        { ok: false, error: 'Missing CONTACT_ADMIN_KEY in environment variables.' },
        { status: 503 },
      )
    }

    const providedKey = request.headers.get('x-admin-key') || ''
    if (!providedKey || providedKey !== ADMIN_KEY) {
      return NextResponse.json(
        { ok: false, error: 'Unauthorized.' },
        { status: 401 },
      )
    }

    const limitParam = Number.parseInt(request.nextUrl.searchParams.get('limit') || '30', 10)
    const limit = Number.isNaN(limitParam) ? 30 : Math.min(100, Math.max(1, limitParam))

    const client = await getMongoClientPromise()
    const collection = client.db(DATABASE_NAME).collection(COLLECTION_NAME)

    const documents = await collection
      .find(
        {},
        {
          projection: {
            name: 1,
            email: 1,
            message: 1,
            status: 1,
            createdAt: 1,
          },
        },
      )
      .sort({ createdAt: -1 })
      .limit(limit)
      .toArray()

    return NextResponse.json({
      ok: true,
      items: documents.map((doc) =>
        toPublicDocument({
          _id: doc._id,
          name: String(doc.name || ''),
          email: String(doc.email || ''),
          message: String(doc.message || ''),
          status: String(doc.status || 'new'),
          createdAt: doc.createdAt instanceof Date ? doc.createdAt : new Date(doc.createdAt),
        }),
      ),
    })
  } catch (error) {
    const mapped = mapRouteError(error, 'Could not fetch contact messages.')
    console.error('[api/contact][GET]', error)

    return NextResponse.json(
      { ok: false, error: mapped.error, code: mapped.code },
      { status: mapped.status },
    )
  }
}
