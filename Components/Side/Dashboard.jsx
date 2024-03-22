import React from 'react'
import { LuChevronRight } from "react-icons/lu";

export default function Dashboard() {
  return (
    <div className='h-screen bg-gradient-to-t from-white/[0.3] to-gray-400/[0.3] rounded-tl-2xl rounded-bl-2xl border border-white/[0.3]'>
      <div className='inline-block px-1 py-7 bg-white/[0.6] relative top-1/2 -translate-y-1/2 rounded-e-2xl'>
        <LuChevronRight className='text-2xl'/>
      </div>
    </div>
  )
}
