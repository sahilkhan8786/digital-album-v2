import AuthWrapper from '@/components/custom/auth/authWrapper'
import LoginForm from '@/components/custom/auth/login-form'
import { ClerkLoaded, ClerkLoading } from '@clerk/nextjs'


const SignInPage = () => {
    return (
        <AuthWrapper>
            <ClerkLoading>
                Loading....
            </ClerkLoading>

            <ClerkLoaded>
                <LoginForm />
            </ClerkLoaded>
        </AuthWrapper>
    )
}

export default SignInPage