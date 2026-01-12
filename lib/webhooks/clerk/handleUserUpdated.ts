import type { UserJSON } from '@clerk/backend'
import type { ClerkPublicMetadata } from '@/types/clerk'
import User from '@/models/User.model'

export async function handleUserUpdated(evt: { data: unknown }) {
    const user = evt.data as UserJSON

    await User.findOneAndUpdate(
        { clerkId: user.id },
        {
            email: user.email_addresses[0]?.email_address,
            firstName: user.first_name,
            lastName: user.last_name,
            role:
                (user.public_metadata as ClerkPublicMetadata)?.role ?? 'user',
        }
    )
}
