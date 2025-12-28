'use client'

import { SignIn } from '@clerk/nextjs'

const LoginForm = () => {
    return (
        <SignIn
            forceRedirectUrl="/dashboard"
            appearance={{
                variables: {
                    colorPrimary: '#135bec',
                    colorText: '#ffffff',
                    colorBackground: 'transparent',
                    borderRadius: '12px',
                },
                elements: {
                    rootBox: 'w-full max-w-sm',
                    card: 'bg-transparent shadow-none border-none p-0',
                    header: 'hidden',
                    footer: 'hidden',

                    /* Email sign-in */
                    formButtonPrimary:
                        'h-12 rounded-xl bg-primary hover:bg-primary-hover text-white font-bold',

                    /* Google button */
                    socialButtonsBlockButton:
                        'h-12 rounded-xl bg-primary hover:bg-primary/90',





                    dividerLine: 'bg-slate-200',
                    dividerText: 'text-slate-500 text-sm',

                    formFieldInput:
                        'h-12 rounded-lg bg-white text-[#135bec] border border-slate-200 focus:ring-primary',

                    formFieldLabel:
                        'text-sm font-medium text-slate-700',
                },
            }}
        />
    )
}

export default LoginForm
