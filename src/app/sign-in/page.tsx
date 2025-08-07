'use client'

import Image from "next/image"
import { sendSignInLinkToEmail } from "firebase/auth"
import { useState } from "react"
import { auth } from "@/lib/firebase/firebaseAuth"

const actionCodeSettings = {
    url: 'http://localhost:3000/auth/finish',
    handleCodeInApp: true
}

export default function SignIn() {
    const [email, setEmail] = useState('')

    const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            await sendSignInLinkToEmail(auth, email, actionCodeSettings)
            localStorage.setItem('emailForSignIn', email)
            alert('A sign-in link has been sent to your email address.')
        } catch (err) {
            console.error('Error sending sign-in link:', err)
            alert('Failed to send sign-in link.')
        }
    }

    return (
        <div className="flex sm:items-center justify-center h-screen">
            <div className="flex flex-col mx-auto p-2 sm:aspect-[18/9] w-4xl sm:bg-white sm:dark:bg-neutral-900 rounded-3xl">
                <div className="w-full mt-2 mx-2 h-screen flex flex-col items-center bg-neutral-900 rounded-t-3xl">
                    <h2 className="mt-2 text-3xl font-bold">Sign Up</h2>

                    <form onSubmit={handleSignIn} className="flex flex-col gap-2 w-full px-8 mt-4">
                        <input 
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            className="h-12 pl-2 bg-neutral-800 rounded-md border border-neutral-700"
                            required 
                        />
                        <button type="submit" className="h-12 rounded-md bg-neutral-950 text-white dark:bg-white dark:text-neutral-950">Send Sign-in Link</button>
                    </form>
                </div>
            </div>
        </div>
    )
}