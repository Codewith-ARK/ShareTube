import { PostContext } from '@/context/postContext';
import React, { useContext } from 'react'
import { LuThumbsUp, LuThumbsDown, LuMoreVertical, LuTrash2 } from "react-icons/lu";


export default function Post({ title, link, category, id }) {
  const { deletePost } = useContext(PostContext);
  async function handleDelete() {
    deletePost(id)
  }
  return (
    <div className='flex flex-col gap-3 border border-gray-700 rounded-lg p-3 relative overflow-clip'>
      <h2 className='font-bold text-lg'>{title}</h2>
      <div className='top-0 right-0 rounded-bl-xl bg-slate-400 w-fit absolute px-4 py-1 '>{category ? category : "Default"}</div>
      <a href={link} className='text-sm'>{link}</a>
      <div className='pt-2 flex justify-between'>
        <div className='flex gap-2'>
          <button className='p-1'>
            <LuThumbsUp title='Thumbs Up' />
          </button>
          <button className='p-1'>
            <LuThumbsDown title='Thumbs Down' />
          </button>
        </div>
        <div className='flex gap-2'>
          <button onClick={handleDelete}>
            <LuTrash2 />
          </button>
          <button>
            <LuMoreVertical title='More' />
          </button>
        </div>
      </div>

    </div>
  )
}
