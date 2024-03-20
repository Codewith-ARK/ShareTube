import Link from 'next/link'
import React from 'react'

export default function Nav() {
  return (
    <nav className='flex justify-between py-2 px-6 shadow-xl items-center'>
      <a href="/"><img className='w-11 aspect-square' src="/icon.png" alt="favicon" /></a>
      <div id="nav-links" className='flex justify-between gap-4'>
        <Link href='/'>Home</Link>
        <Link href='/post'>Post</Link>
      </div>
      <a className='text-white py-2 px-4 rounded-lg bg-blue-500' href="/api/auth/login">Login</a>
    </nav>
  )
}
