import { 
    Home, 
    LogOut, 
    UserRound, 
    SquarePen ,
    MapPinHouse,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

import Link from "next/link"

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Blog",
    url: "#",
    icon: SquarePen,
  },
]

const projects = [
    {
        title: "This website",
        url: "#",
        icon: MapPinHouse,
    },
    // {
    //     title: "Word games",
    //     url: "#",
    //     icon: Joystick,
    // },
]

export function AppSidebar() {
    const name = 'Devon Nall'
    return (
        <Sidebar variant="floating">
            <SidebarHeader className="ml-2 mt-2">
                <Link href="/" className="font-extrabold text-lg font-nunito-sans text-blue-500 dark:text-white">
                    Devon Nall
                </Link>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarMenu>
                        {items.map((item) => (
                            <SidebarMenuItem key={item.title}>
                                <SidebarMenuButton asChild>
                                    <a href={item.url}>
                                        <item.icon />
                                        <span>{item.title}</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarGroup>
                <SidebarGroup>
                    <SidebarGroupLabel>Projects</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                        {projects.map((item) => (
                            <SidebarMenuItem key={item.title}>
                                <SidebarMenuButton asChild>
                                    <a href={item.url}>
                                    <item.icon />
                                    <span>{item.title}</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <Select>
                    <SelectTrigger className="relative py-6 w-full">
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <SelectValue placeholder={name} />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="settings" className="flex">
                            <UserRound />
                            Account
                        </SelectItem>
                        {/* <Separator className="my-1" /> */}
                        <SelectItem value="sign out" className="flex">
                            <LogOut className="text-destructive" />
                            Sign Out
                        </SelectItem>
                    </SelectContent>
                </Select>
            </SidebarFooter>
        </Sidebar>
    )
}