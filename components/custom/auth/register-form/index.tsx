'use client'

import { SignUp } from '@clerk/nextjs'

const RegisterForm = () => {
    return (
        <SignUp
            afterSignOutUrl={'/'}
            forceRedirectUrl="/dashboard"
            appearance={{
                variables: {
                    colorPrimary: '#135bec',
                    colorBackground: 'transparent',
                    colorText: '#ffffff',
                    borderRadius: '12px',
                },
                elements: {
                    /* Layout */
                    rootBox: 'w-full max-w-sm mx-auto',
                    card: 'w-full bg-transparent shadow-none border-none p-0',
                    header: 'hidden',
                    footer: 'hidden',

                    /* ✅ LABELS (IMPORTANT PART) */
                    formFieldLabel:
                        'text-white text-sm font-medium',

                    formFieldLabelRow:
                        'text-white',

                    formFieldAction:
                        'text-white hover:text-white/80',

                    identityPreviewText:
                        'text-white',

                    /* Inputs */
                    formFieldInput:
                        'h-12 rounded-lg bg-white text-[#135bec] border border-slate-200 focus:ring-primary',

                    /* Buttons */
                    formButtonPrimary:
                        'h-12 rounded-xl bg-primary hover:bg-primary/90 text-white font-bold',

                    socialButtonsBlockButton:
                        'h-12 rounded-xl',

                    dividerLine: 'bg-white/20',
                    dividerText: 'text-white/70 text-sm',
                },
            }}
        />
    )
}

export default RegisterForm
