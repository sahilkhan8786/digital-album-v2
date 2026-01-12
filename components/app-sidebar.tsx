'use client'

import { Home, ImagePlusIcon, Settings, User } from "lucide-react"
import { usePathname } from "next/navigation"
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import Logo from "./custom/navbar/logo"
import Link from "next/link"
import { SidebarUser } from "./sidebar-user"

// Menu items
const items = [
    {
        title: "Home",
        url: "/dashboard",
        icon: <Home />,
    },
    {
        title: "My Albums",
        url: "/dashboard/albums",
        icon: <ImagePlusIcon />,
    },
    {
        title: "profile",
        url: "/dashboard/profile",
        icon: <User />,
    },
    {
        title: "Settings",
        url: "/dashboard/settings",
        icon: <Settings />,
    },
]

export function AppSidebar() {
    const pathname = usePathname() // current path

    return (
        <Sidebar>
            <SidebarContent className="bg-[#111318] border-r px-2">
                <SidebarGroup>
                    <SidebarGroupLabel className="my-8">
                        <Logo />
                    </SidebarGroupLabel>
                    <SidebarGroupContent >
                        <SidebarMenu className="space-y-4">
                            {items.map((item) => {
                                const isActive = pathname === item.url
                                return (
                                    <SidebarMenuItem key={item.title} >
                                        <SidebarMenuButton asChild>
                                            <Link
                                                href={item.url}
                                                className={`flex items-center gap-2 text-xl font-medium  rounded-lg transition-colors p-4
                                                    ${isActive
                                                        ? 'bg-[#282e39]  text-white '
                                                        : 'text-gray-500 hover:bg-[#282e39] hover:text-white'}`}
                                            >
                                                <span className="w-6 h-6 flex items-center justify-center">
                                                    {item.icon}
                                                </span>
                                                <span >{item.title}</span>
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                )
                            })}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <div className="p-4">
                <SidebarUser />
            </div>

        </Sidebar>
    )
}
