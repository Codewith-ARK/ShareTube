"use client"
import { LuMoon } from "react-icons/lu";
import Link from 'next/link'
import React from 'react'
import NavButton from "./NavButton";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function Nav() {
  const { user } = useUser()
  return (
    <>
      <div className='p-3 mb-2'>
        <nav className='flex justify-between py-2 px-5 rounded-3xl shadow-2xl border bg-gradient-to-b from-white/[0.3] to-neutral-400/[0.3] border-white/[0.3]'>
          <a href="/" className='flex items-center'>
            <img className='w-11 aspect-square' src="/icon.png" alt="favicon" />
            <p className='font-semibold text-lg'>YouTube Clipper</p>
          </a>
          <div id="nav-links" className='flex justify-between items-center gap-4'>
            <Link className='px-6 py-2 rounded-3xl bg-[#F37852] text-white font-semibold' href='/'>Home</Link>
            <Link className='px-6 py-2 font-semibold' href='/about'>About</Link>
            <Link className='px-6 py-2 font-semibold' href=''>How it works</Link>
          </div>
          <div className="flex items-center gap-3">
            {/* <LuMoon className="text-2xl" name="Toggle Theme" title="Toggle Theme" /> */}
            {
              user ?
                <NavButton url='/api/auth/logout' text='Logout' /> :
                <NavButton url='/api/auth/login' text='Login' />
            }
          </div>
        </nav>
      </div>
    </>
  )
}
