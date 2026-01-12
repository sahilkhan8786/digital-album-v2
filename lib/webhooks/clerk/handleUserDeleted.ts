import User from '@/models/User.model'

export async function handleUserDeleted(evt: { data: unknown }) {
    const { id } = evt.data as { id: string }
    await User.findOneAndDelete({ clerkId: id })
}
