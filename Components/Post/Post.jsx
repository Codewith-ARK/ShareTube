import { PostContext } from '@/context/postContext';
import React, { useContext } from 'react'
import { LuThumbsUp, LuThumbsDown, LuMoreVertical, LuTrash2, LuArrowUpRight } from "react-icons/lu";


export default function Post({ title, link, category, id, likeCount, dislikeCount, author }) {

  const { deletePost, setPosts, posts } = useContext(PostContext);

  async function handleDelete() {
    // Delete the post from the DB
    deletePost(id)

    // find the index of the deleted post
    const postIndex = (posts, id) => posts.findIndex(obj => obj.id === id);
    const updatedPosts = [...posts];
    updatedPosts.splice(postIndex, 1); // remove the deleted posts
    setPosts(updatedPosts); // update the local posts variable
  }

  return (
    <div className='flex flex-col justify-between gap-3 p-3 relative overflow-clip max-h-fit rounded-2xl bg-gradient-to-b from-white/[0.6] to-white/[0.3]'>
      <h2 className='font-bold text-lg'>{title}</h2>
      <div className='top-0 right-0 rounded-bl-xl text-sm bg-slate-100 w-fit absolute px-4 py-1 '>{category ? category : "Default"}</div>
      <a href={link} target='_blank' className='text-sm text-blue-600 underline'>Take me there <LuArrowUpRight className='inline-block' /></a>
      {/* <div className='pt-2 flex justify-between'>
        <div className='flex gap-2'>
          <button className='p-1 flex gap-1 items-center'>
            <LuThumbsUp title='Thumbs Up' className='hover:text-gray-600' />
            <p className='text-gray-600'>{likeCount}</p>
          </button>
          <button className='p-1 flex gap-1 items-center'>
            <LuThumbsDown title='Thumbs Down' className='hover:text-gray-600' />
            <p className='text-gray-600'>{dislikeCount}</p>
          </button>
        </div>
        <div className='flex gap-2'>
          <button onClick={handleDelete} >
            <LuTrash2 className='hover:text-gray-600' />
          </button>
          <button>
            <LuMoreVertical title='More' />
          </button>
        </div>
      </div> */}

    </div>
  )
}
