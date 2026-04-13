import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI

const globalForMongo = globalThis as typeof globalThis & {
  _mongoClientPromise?: Promise<MongoClient>
}

export function getMongoClientPromise() {
  if (!uri) {
    throw new Error('Missing MONGODB_URI environment variable')
  }

  if (!globalForMongo._mongoClientPromise) {
    const client = new MongoClient(uri)
    globalForMongo._mongoClientPromise = client.connect()
  }

  return globalForMongo._mongoClientPromise
}
