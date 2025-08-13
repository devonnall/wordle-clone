import { SidebarFooter } from "@/components/ui/sidebar"
import { LogOut, UserRound, } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export default function AccountCard() {
    return (
        <SidebarFooter>
            <Select>
                <SelectTrigger className="relative py-6 w-full">
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <SelectValue placeholder="Devon Nall" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="settings" className="flex">
                        <UserRound />
                        Account
                    </SelectItem>
                    <SelectItem value="sign out" className="flex">
                        <LogOut className="text-destructive" />
                        Sign Out
                    </SelectItem>
                </SelectContent>
            </Select>
        </SidebarFooter>
    )
}