'use client'

import Link from "next/link"
import Image from "next/image"
import { useAuth } from "@/context/AuthContext"
import { useRouter } from "next/router"
import { useEffect } from "react"

export default function Header() {
    const { user, loading } = useAuth()
    // const router = useRouter()

    // useEffect(() => {
    //     if (!loading && !user) {
    //         router.push('/sign-in')
    //     }
    // }, [user, loading, router])

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
        <nav className="sticky top-0 w-full h-14 bg-background border-b border-neutral-300 dark:border-neutral-800 mb-8">
            <div className="flex items-center m-2 mt-1 gap-2 float-right">
                <div>
                    {user.photoURL}
                </div>
            </div>
        </nav>
    )
}
    