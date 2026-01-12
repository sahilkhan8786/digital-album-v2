import type { UserJSON } from '@clerk/backend'
import type { ClerkClient } from '@clerk/backend'

import User from '@/models/User.model'
import type { ClerkPublicMetadata } from '@/types/clerk'

export async function handleUserCreated(
    evt: { data: unknown },
    client: ClerkClient
) {
    const user = evt.data as UserJSON

    const clerkId = user.id
    const email = user.email_addresses[0]?.email_address
    if (!email) return

    const existing = await User.findOne({ clerkId })
    if (existing) return

    const dbUser = new User({
        clerkId,
        email,
        firstName: user.first_name ?? undefined,
        lastName: user.last_name ?? undefined,
        role: 'user',
    })

    await dbUser.save()

    await client.users.updateUser(clerkId, {
        publicMetadata: {
            role: 'user',
            mongoUserId: dbUser._id.toString(),
        } satisfies ClerkPublicMetadata,
    })
}
