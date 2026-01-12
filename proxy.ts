import {
    clerkMiddleware,
    createRouteMatcher,
} from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'
import { ClerkPublicMetadata } from './types/clerk'

const isDashboardRoute = createRouteMatcher([
    '/dashboard(.*)',
])

const isAdminRoute = createRouteMatcher([
    '/admin(.*)',
])

export default clerkMiddleware(async (auth, req) => {
    const { userId, sessionClaims } = await auth()

    // 🔐 Dashboard: signed-in users
    if (isDashboardRoute(req)) {
        if (!userId) {
            return NextResponse.redirect(
                new URL('/sign-in', req.url)
            )
        }
    }

    // 🛑 Admin: admin only
    if (isAdminRoute(req)) {
        if (!userId) {
            return NextResponse.redirect(
                new URL('/sign-in', req.url)
            )
        }

        const role = (sessionClaims?.publicMetadata as ClerkPublicMetadata)?.role

        if (role !== 'admin') {
            return NextResponse.redirect(
                new URL('/dashboard', req.url)
            )
        }
    }
})
