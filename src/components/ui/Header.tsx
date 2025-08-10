'use client'

import Link from "next/link"
import Image from "next/image"
import { useAuth } from "@/context/AuthContext"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { auth } from "@/lib/firebase/firebaseAuth"
import { signOut } from "firebase/auth"
import { Button } from "@/components/ui/button"

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
        <nav className="sticky top-0 grid grid-cols-3 items-center py-1 px-3 w-full h-14 border-b mb-8">
            {/* <div className="grid grid-cols-3 items-center m-2 mt-1"> */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8 cursor-pointer rounded-md p-1 col-start-1 hover:bg-current/10 dark:hover:bg-current/5">
                    <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                </svg>

                
                <p className="col-start-2 cursor-pointer text-xl font-bold flex items-center justify-center gap-2">
                    DN
                    <span className="h-5 border-r"></span>
                    <span className="font-light">Wordly</span>
                </p>
                
                <div className="col-start-3 flex justify-end">
                    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8 cursor-pointer rounded-md p-1 hover:bg-current/10 dark:hover:bg-current/5">
                        <path fillRule="evenodd" d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 0 0-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 0 0-2.282.819l-.922 1.597a1.875 1.875 0 0 0 .432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 0 0 0 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 0 0-.432 2.385l.922 1.597a1.875 1.875 0 0 0 2.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 0 0 2.28-.819l.923-1.597a1.875 1.875 0 0 0-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 0 0 0-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 0 0-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 0 0-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 0 0-1.85-1.567h-1.843ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z" clipRule="evenodd" />
                    </svg> */}

                    <Button>Sign up</Button>
                </div>
            {/* </div> */}
        </nav>
    )
}
    