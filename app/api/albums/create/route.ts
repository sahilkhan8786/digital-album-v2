// app/api/albums/create/route.ts
import { NextRequest, NextResponse } from 'next/server'
import dbConnect from '@/lib/mongodb'
import Album from '@/models/Album.model'

export async function POST(req: NextRequest) {
    try {
        await dbConnect()

        const albumData = await req.json() // type incoming data

        const album = await Album.create(albumData)


        return NextResponse.json({ success: true, album })
    } catch (err: unknown) {
        const message = err instanceof Error ? err.message : 'Error saving album'
        return NextResponse.json({ success: false, error: message }, { status: 500 })
    }
}
