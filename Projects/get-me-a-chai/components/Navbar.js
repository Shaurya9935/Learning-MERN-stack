"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'

const Navbar = () => {
    const { data: session } = useSession()
    if (session) {
        return <>
            Signed in as {session.user.email} <br />
            <button onClick={() => signOut()}>Sign out</button>
        </>
    }
    return (
        <nav className='bg-gray-900 text-white flex justify-between px-4 h-16 items-center'>
            <div className="logo font-bold text-lg flex justify-center items-center gap-2">
                <span><img width={44} src="/tea.gif" alt="" /></span>
                Get Me A Chai
            </div>
            {/* <ul className='flex justify-between gap-4'>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Sign Up</li>
            <li>Login</li>
        </ul> */}

            <div>
                <Link href={"/login"}>
                    <button className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-2.5 me-2 mb-2 text-center leading-5'>Login</button>
                </Link>
            </div>

        </nav>
    )
}

export default Navbar
