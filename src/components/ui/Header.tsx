'use client'

import Link from "next/link"
import { useAuth } from "@/context/AuthContext"
import { Button } from "@/components/ui/button"

export default function Header() {
    const { user, loading } = useAuth()

    if (loading) {
        return <div>Loading...</div>
    }

    if (!user) {
        return (
            <nav className="sticky top-0 w-full h-14 bg-background border-b border-neutral-300 dark:border-neutral-800 mb-8">
                <div className="flex items-center m-2 mt-1 gap-2 float-right">
                    <Link href={`/sign-up`} className="p-2 rounded-sm bg-neutral-950 text-white dark:bg-white dark:text-black">
                        Sign Up
                    </Link>
                    <Link href={`/sign-in`} className="p-2 text-neutral-950 dark:text-white">
                        Log In
                    </Link>
                </div>
            </nav>
        )
    }
    
    return (
        <nav className="sticky top-0 grid grid-cols-3 items-center py-1 px-3 w-full h-14 border-b mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8 cursor-pointer rounded-md p-1 col-start-1 hover:bg-current/10 dark:hover:bg-current/5">
                <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
            </svg>
            
            <p className="col-start-2 cursor-pointer text-xl font-bold flex items-center justify-center gap-2">
                DN
                <span className="h-5 border-r"></span>
                <span className="font-light">Wordly</span>
            </p>
            
            <div className="col-start-3 flex justify-end">
                <Button>Sign up</Button>
            </div>
        </nav>
    )
}
    