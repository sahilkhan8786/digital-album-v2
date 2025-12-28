// lib/mongodb.ts
import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI || ''

if (!MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable inside .env')
}

// ✅ Extend globalThis to include _mongoose
declare global {
    var _mongoose: {
        conn: typeof mongoose | null
        promise: Promise<typeof mongoose> | null
    }
}

// Use cached connection if it exists
let cached = globalThis._mongoose

if (!cached) {
    cached = globalThis._mongoose = { conn: null, promise: null }
}

async function dbConnect() {
    if (cached.conn) return cached.conn

    if (!cached.promise) {
        cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => mongoose)
    }
    cached.conn = await cached.promise
    return cached.conn
}

export default dbConnect
