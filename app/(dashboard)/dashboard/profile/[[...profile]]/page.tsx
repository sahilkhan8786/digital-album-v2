import { auth } from '@clerk/nextjs/server'
import ProfileClient from './profile-client'



export default async function DashboardProfilePage() {
    const { isAuthenticated } = await auth()

    // Protect the route by checking if the user is signed in
    if (!isAuthenticated) {
        return <div>Sign in to view this page</div>
    }

    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold">Profile</h1>
            <ProfileClient />
        </div>
    )
}
