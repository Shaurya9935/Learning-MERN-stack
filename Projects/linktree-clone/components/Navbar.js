"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation';



const Navbar = () => {

    const pathname = usePathname()
    const showNavbar = ["/", "/generate"].includes(pathname)

    if (!showNavbar) return null;   

    return (
        <>{<nav className='bg-white w-[90vw] fixed flex justify-between top-10 right-[5vw] rounded-full p-5 px-7 items-center'>
            <div className="logo flex gap-16 items-center">
                <Link href={"/"}><img loading="eager" src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/66634daccb34e6d65a41c76d_download.svg" alt="" className="nav-desktop-logo h-9"></img></Link>
                <ul className='flex gap-10'>
                    <Link href="/templates"><li>Templates</li></Link>
                    <Link href="/marketplace"><li>Marketplace</li></Link>
                    <Link href="/discover"><li>Discover</li></Link>
                    <Link href="/pricing"><li>Pricing</li></Link>
                    <Link href="/learn"><li>Learn</li></Link>
                </ul>
            </div>
            <div className='flex gap-2'>
                <button className='login bg-gray-400 p-4 font-bold rounded-lg'>
                    Log in
                </button>
                <button className="signup bg-gray-900 text-white font-bold p-4 rounded-full">
                    Sign up free
                </button>
            </div>
        </nav>}</>
    )
}

export default Navbar
