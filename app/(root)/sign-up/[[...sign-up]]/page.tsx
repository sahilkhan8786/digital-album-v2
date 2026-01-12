import AuthWrapper from '@/components/custom/auth/authWrapper'
import RegisterForm from '@/components/custom/auth/register-form'
import { ClerkLoaded, ClerkLoading } from '@clerk/nextjs'


const SignUpPage = () => {
    return (
        <AuthWrapper>
            <ClerkLoading>
                Loading....
            </ClerkLoading>

            <ClerkLoaded>
                <RegisterForm />
            </ClerkLoaded>
        </AuthWrapper>
    )
}

export default SignUpPage