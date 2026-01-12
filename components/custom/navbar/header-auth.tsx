'use client'

import Link from 'next/link'
import { ModeToggle } from '@/components/mode-toggle'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import {
    SignedIn,
    SignedOut,
    UserButton,
    ClerkLoaded,
    ClerkLoading,
} from '@clerk/nextjs'

const HeaderAuth = () => {


    return (
        <div className="flex items-center gap-4">
            <ModeToggle />

            <ClerkLoading>
                <div className="flex items-center gap-4">
                    <Skeleton className="h-9 w-20" />
                    <Skeleton className="h-9 w-20" />
                </div>
            </ClerkLoading>

            <ClerkLoaded>
                <SignedOut>
                    <Link
                        href="/sign-in"
                        className="hidden md:flex items-center justify-center h-9 px-4 text-sm font-bold text-slate-700 dark:text-white hover:text-primary transition-colors w-20"
                    >
                        Log In
                    </Link>

                    <Link href="/sign-up">
                        <Button className="h-9 px-5 bg-primary hover:bg-primary-hover text-white text-sm font-bold rounded-lg shadow-lg shadow-primary/20 transition-all hover:scale-105 w-20">
                            Sign Up
                        </Button>
                    </Link>
                </SignedOut>

                <SignedIn>
                    <UserButton />
                </SignedIn>
            </ClerkLoaded>
        </div>
    )
}

export default HeaderAuth
