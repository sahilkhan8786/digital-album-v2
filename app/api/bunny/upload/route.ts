// app/api/bunny/upload-url/route.ts
import { NextRequest, NextResponse } from 'next/server'

const BUNNY_API_KEY = process.env.BUNNY_API_KEY || ''
const STORAGE_ZONE = process.env.BUNNY_STORAGE_ZONE || ''

export async function POST(req: NextRequest) {
    try {
        const { fileName, folderPath } = await req.json()

        // BunnyCDN PUT URL
        const url = `https://storage.bunnycdn.com/${STORAGE_ZONE}/${folderPath}/${fileName}`

        // No server upload, just return URL
        return NextResponse.json({ uploadUrl: url, finalUrl: url })
    } catch (err: unknown) {

        const message = err instanceof Error ? err.message : 'Error saving album'
        return NextResponse.json({ success: false, error: message || 'error' }, { status: 500 })
    }
}
