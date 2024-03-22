import React from 'react'
import { LuChevronLeft } from 'react-icons/lu'

export default function SideNav() {
  return (
    <div className='h-screen bg-gradient-to-t from-white/[0.3] to-gray-400/[0.3] rounded-tr-2xl rounded-br-2xl border border-white/[0.3] relative'>
      <div className='inline-block px-1 py-7 bg-white/[0.6] absolute right-0 top-1/2 -translate-y-1/2 rounded-s-2xl'>
        <LuChevronLeft className='text-2xl' />
      </div>

    </div>
  )
}
