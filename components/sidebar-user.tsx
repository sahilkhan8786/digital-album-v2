'use client'

import { useUser, UserButton } from '@clerk/nextjs'

export function SidebarUser() {
    const { user } = useUser()

    if (!user) return null

    return (
        <div className="p-4 ">
            <div className="flex items-center gap-3">
                {/* Avatar + menu */}
                <UserButton
                    appearance={{
                        elements: {
                            userButtonAvatarBox: 'w-10 h-10',
                        },
                    }}
                />

                {/* Name + Email */}
                <div className="flex flex-col leading-tight">
                    <span className="text-sm font-semibold text-white">
                        {user.fullName}
                    </span>
                    <span className="text-xs text-slate-400 truncate max-w-35">
                        {user.primaryEmailAddress?.emailAddress}
                    </span>
                </div>
            </div>
        </div>
    )
}
