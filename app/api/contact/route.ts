import { NextRequest, NextResponse } from 'next/server'
import { getMongoClientPromise } from '@/lib/mongodb'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const DATABASE_NAME = process.env.MONGODB_DB_NAME || 'portfolio'
const COLLECTION_NAME = process.env.MONGODB_CONTACT_COLLECTION || 'contact_messages'
const ADMIN_KEY = process.env.CONTACT_ADMIN_KEY

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

export async function POST(request: NextRequest) {
  try {
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
  } catch {
    return NextResponse.json(
      { ok: false, error: 'Could not save contact message.' },
      { status: 500 },
    )
  }
}

export async function GET(request: NextRequest) {
  try {
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
  } catch {
    return NextResponse.json(
      { ok: false, error: 'Could not fetch contact messages.' },
      { status: 500 },
    )
  }
}
