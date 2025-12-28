'use client'

import { ImageUpscaleIcon } from 'lucide-react'
import React from 'react'
import { useSearchParams } from 'next/navigation'
import LoginForm from '../login-form'
import RegisterForm from '../register-form'

const AuthFormWrapper = () => {
    const searchParams = useSearchParams()
    const tabParam = searchParams.get('tab') // 'login' or 'signup'

    // ✅ Derive tab directly from query param (no setState needed)
    const tab: 'login' | 'signup' = tabParam === 'signup' ? 'signup' : 'login'

    return (
        <div className="bg-background font-display text-slate-900 antialiased selection:bg-primary selection:text-white overflow-hidden">
            <div className="min-h-screen flex w-full">
                {/* Left Column: Authentication Form */}
                <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24 w-full lg:w-[45%] xl:w-[40%] bg-background-light dark:bg-background-dark border-r border-slate-200 dark:border-slate-800 z-10">
                    <div className="mx-auto w-full max-w-sm lg:w-96">

                        {/* Logo & Intro */}
                        <div className="flex items-center gap-3 mb-10">
                            <div className="size-10 bg-primary/20 rounded-xl flex items-center justify-center text-primary">
                                <ImageUpscaleIcon />
                            </div>
                            <div>
                                <h1 className="text-xl text-primary font-bold tracking-tight">OccasionShare</h1>
                                <p className="text-sm text-slate-500">
                                    {tab === 'login'
                                        ? 'Enter your details to access your memories.'
                                        : 'Sign up to start collecting memories.'}
                                </p>
                            </div>
                        </div>

                        {/* Tabs */}
                        <div className="mb-8">
                            <div className="flex border-b gap-8">
                                <button
                                    onClick={() => window.history.replaceState(null, '', '/auth?tab=login')}
                                    className={`pb-3 font-bold border-b-[3px] transition
                                        ${tab === 'login'
                                            ? 'border-primary text-slate-900 dark:text-white'
                                            : 'border-transparent text-slate-500'}`}
                                >
                                    Login
                                </button>

                                <button
                                    onClick={() => window.history.replaceState(null, '', '/auth?tab=signup')}
                                    className={`pb-3 font-bold border-b-[3px] transition
                                        ${tab === 'signup'
                                            ? 'border-primary text-slate-900 dark:text-white'
                                            : 'border-transparent text-slate-500'}`}
                                >
                                    Sign Up
                                </button>
                            </div>
                        </div>

                        {/* Forms */}
                        {tab === 'login' ? <LoginForm /> : <RegisterForm />}

                        {/* Terms */}
                        <div className="mt-8 text-center text-xs text-slate-500 dark:text-[#9da6b9]">
                            By signing in, you agree to our <a className="underline hover:text-white" href="#">Terms of Service</a> and <a className="underline hover:text-white" href="#">Privacy Policy</a>.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthFormWrapper
