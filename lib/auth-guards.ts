import { ClerkPublicMetadata } from '@/types/clerk'
import { auth } from '@clerk/nextjs/server'

export async function requireAuth() {
    const { userId } = await auth()

    if (!userId) {
        throw new Error('UNAUTHORIZED')
    }

    return { userId }
}

export async function requireAdmin() {
    const { userId, sessionClaims } = await auth()

    if (!userId) {
        throw new Error('UNAUTHORIZED')
    }

    const role = (sessionClaims?.publicMetadata as ClerkPublicMetadata)?.role

    if (role !== 'admin') {
        throw new Error('FORBIDDEN')
    }

    return { userId }
}
