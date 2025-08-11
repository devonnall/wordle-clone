import { 
    Home, 
    LogOut, 
    UserRound, 
    SquarePen ,
    MapPinHouse,
    ContactRound,
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

import NextLogo from "./ui/icons/next-logo"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

import Link from "next/link"
import ViteLogo from "./ui/icons/vite-logo"

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "About Me",
    url: "#",
    icon: ContactRound,
  },
]

const projects = [
    {
        title: "This website",
        url: "projects/portfolio",
        icon: MapPinHouse,
    },
]

const frameworks = [
    {
        title: "Next.js",
        url: "/frameworks/nextjs",
        icon: NextLogo,
        className: "dark:fill-white"
    },
    {
        title: "Vite",
        url: "/frameworks/vite",
        icon: ViteLogo,
    }
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
                    <Link href="/projects">
                        <SidebarGroupLabel>Projects</SidebarGroupLabel>
                    </Link>
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
                <SidebarGroup>
                    <Link href="/frameworks">
                        <SidebarGroupLabel>Frameworks</SidebarGroupLabel>
                    </Link>
                    <SidebarGroupContent>
                        <SidebarMenu>
                        {frameworks.map((framework) => (
                            <SidebarMenuItem key={framework.title}>
                                <SidebarMenuButton asChild>
                                    <a href={framework.url}>
                                    <framework.icon className={framework.className} />
                                    <span>{framework.title}</span>
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