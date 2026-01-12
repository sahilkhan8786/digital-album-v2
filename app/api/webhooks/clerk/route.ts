import { verifyWebhook } from '@clerk/nextjs/webhooks'
import { NextRequest, NextResponse } from 'next/server'
import { clerkClient } from '@clerk/nextjs/server'

import dbConnect from '@/lib/mongodb'
import { handleUserCreated, handleUserDeleted, handleUserUpdated } from '@/lib/webhooks/clerk'


export async function POST(req: NextRequest) {
    try {
        const evt = await verifyWebhook(req)

        await dbConnect()
        const client = await clerkClient()

        switch (evt.type) {
            case 'user.created':
                await handleUserCreated(evt, client)
                break

            case 'user.updated':
                await handleUserUpdated(evt)
                break

            case 'user.deleted':
                await handleUserDeleted(evt)
                break

            default:
                break
        }

        return NextResponse.json({ success: true })
    } catch (err) {
        console.error('Clerk webhook error:', err)
        return NextResponse.json(
            { error: 'Webhook verification failed' },
            { status: 400 }
        )
    }
}
