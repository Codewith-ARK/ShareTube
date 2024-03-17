import React from 'react'
import { LuThumbsUp, LuThumbsDown, LuMoreVertical } from "react-icons/lu";


export default function Post({ title, link }) {
  return (
    <div className='flex flex-col gap-3 border border-gray-700 rounded-lg p-3 relative overflow-clip'>
      <h2 className='font-bold text-lg'>{title}</h2>
      <div className='top-0 right-0 rounded-bl-xl bg-slate-400 w-fit absolute px-4 py-1 '>Tag</div>
      <a href={link} className='text-sm'>{link}</a>
      <div className='pt-2 flex justify-between'>
        <div>
          <button className='p-1'>
            <LuThumbsUp title='Thumbs Up'/>
          </button>
          <button className='p-1'>
            <LuThumbsDown title='Thumbs Down'/>
          </button>
        </div>
        <div>
          <button>
            <LuMoreVertical title='More'/>
          </button>
        </div>
      </div>

    </div>
  )
}
