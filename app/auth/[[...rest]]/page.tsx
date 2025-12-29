// app/auth/[[...rest]]/page.tsx
import { redirect } from 'next/navigation'
import { auth } from '@clerk/nextjs/server'
import AuthFormWrapper from '@/components/custom/auth/authFormWrapper'
import AuthWrapper from '@/components/custom/auth/authWrapper'

export default async function AuthPage() {
    // ✅ Await the auth() call
    const session = await auth()

    // ✅ Check if userId exists
    if (session?.userId) {
        redirect('/dashboard')
    }

    return (
        <AuthWrapper>
            <AuthFormWrapper />
        </AuthWrapper>
    )
}