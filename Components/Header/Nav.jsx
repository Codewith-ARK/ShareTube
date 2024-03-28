"use client"
import { LuMoon } from "react-icons/lu";
import Link from 'next/link'
import React from 'react'
import NavButton from "./NavButton";
import { useUser } from "@auth0/nextjs-auth0/client";
import { Navbar } from "flowbite-react";


export default function Nav() {
  const { user } = useUser()
  return (
    <>

      <div className="p-3 mb-2">
        <Navbar fluid rounded className="py-2 px-5 rounded-3xl shadow-2xl bg-transparent border bg-gradient-to-b from-white/[0.3] to-neutral-400/[0.3] border-white/[0.3]">
          <Navbar.Brand href="/">
            <img src="/icon.png" className="mr-3 h-6 sm:h-9" alt="Brand Logo" />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">ShareTube</span>
          </Navbar.Brand>
          <div className="flex md:order-2">
            {
              user ?
                <NavButton url='/api/auth/logout' text='Logout' /> :
                <NavButton url='/api/auth/login' text='Login' />
            }
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse>
            <Navbar.Link href="/" active className="hover:opacity-60 transition-opacity font-semibold">
              Home
            </Navbar.Link>
            <Navbar.Link href="#" className="hover:opacity-60 transition-opacity font-semibold">About</Navbar.Link>
            <Navbar.Link href="#" className="hover:opacity-60 transition-opacity font-semibold">Services</Navbar.Link>
            <Navbar.Link href="#" className="hover:opacity-60 transition-opacity font-semibold">Pricing</Navbar.Link>
            <Navbar.Link href="#" className="hover:opacity-60 transition-opacity font-semibold">Contact</Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
      </div>

    </>
  )
}
// non-responsive navbar
// <div className='p-3 mb-2'>
//         <nav className='flex justify-between py-2 px-5 rounded-3xl shadow-2xl border bg-gradient-to-b from-white/[0.3] to-neutral-400/[0.3] border-white/[0.3]'>
//           <a href="/" className='flex items-center'>
//             <img className='w-11 aspect-square' src="/icon.png" alt="favicon" />
//             <p className='font-semibold text-lg'>YouTube Clipper</p>
//           </a>
//           <div id="nav-links" className='flex justify-between items-center gap-4'>
// <Link className='px-6 py-2 rounded-3xl bg-[#F37852] text-white font-semibold' href='/'>Home</Link>
// <Link className='px-6 py-2 font-semibold' href='/about'>About</Link>
// <Link className='px-6 py-2 font-semibold' href=''>How it works</Link>
//           </div>
//           <div className="flex items-center gap-3">
//             {/* <LuMoon className="text-2xl" name="Toggle Theme" title="Toggle Theme" /> */}
// {
//   user ?
//     <NavButton url='/api/auth/logout' text='Logout' /> :
//     <NavButton url='/api/auth/login' text='Login' />
// }
//           </div>
//         </nav>
//       </div>