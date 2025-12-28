// app/api/clerk/webhook/route.ts
import { NextRequest, NextResponse } from 'next/server'
import dbConnect from '@/lib/mongodb'
import User from '@/models/User.model'
import crypto from 'crypto'

// Your Clerk webhook secret
const CLERK_WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET || ''

// Clerk user.created payload type (partial, only what we need)
interface ClerkUserCreatedPayload {
    id: string
    emailAddresses: { emailAddress: string; verified: boolean }[]
    firstName?: string
    lastName?: string
}

// Clerk event payload
interface ClerkEventPayload {
    type: string
    data: ClerkUserCreatedPayload
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.text()
        const signature = req.headers.get('Clerk-Signature') || ''

        // Verify webhook signature
        const expectedSignature = crypto
            .createHmac('sha256', CLERK_WEBHOOK_SECRET)
            .update(body)
            .digest('hex')

        if (signature !== expectedSignature) {
            return NextResponse.json({ error: 'Invalid signature' }, { status: 401 })
        }

        const payload: ClerkEventPayload = JSON.parse(body)

        // Only handle user.created events
        if (payload.type === 'user.created') {
            const { id, emailAddresses, firstName, lastName } = payload.data

            if (!emailAddresses || emailAddresses.length === 0) {
                return NextResponse.json({ error: 'No email found for user' }, { status: 400 })
            }

            // Connect to MongoDB
            await dbConnect()

            // Avoid duplicate entries
            const existing = await User.findOne({ clerkId: id })
            if (!existing) {
                await User.create({
                    clerkId: id,
                    email: emailAddresses[0].emailAddress,
                    firstName: firstName || '',
                    lastName: lastName || '',
                    role: 'user', // default role
                })
            }
        }

        return NextResponse.json({ received: true })
    } catch (error) {
        console.error('Webhook error:', error)
        return NextResponse.json({ error: 'Server error' }, { status: 500 })
    }
}
