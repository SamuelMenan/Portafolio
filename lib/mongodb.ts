import { MongoClient } from 'mongodb'

const rawUri = process.env.MONGODB_URI
const uri = rawUri?.trim().replace(/^"|"$/g, '')

const globalForMongo = globalThis as typeof globalThis & {
  _mongoClientPromise?: Promise<MongoClient>
}

export function getMongoClientPromise() {
  if (!uri) {
    throw new Error('Missing MONGODB_URI environment variable')
  }

  if (!globalForMongo._mongoClientPromise) {
    // Serverless-friendly defaults: small pool, no forced warm connections, and bounded timeouts.
    const client = new MongoClient(uri, {
      tls: true,
      family: 4,
      maxPoolSize: 5,
      minPoolSize: 0,
      maxIdleTimeMS: 15_000,
      connectTimeoutMS: 10_000,
      serverSelectionTimeoutMS: 10_000,
      socketTimeoutMS: 20_000,
    })

    globalForMongo._mongoClientPromise = client.connect().catch((error) => {
      // If the first connection attempt fails, allow next requests to retry.
      globalForMongo._mongoClientPromise = undefined
      throw error
    })
  }

  return globalForMongo._mongoClientPromise
}
