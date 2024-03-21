"use client"
import { PostContext } from '@/context/postContext';
import React, { useState } from 'react'
import fetchPosts from '@/Utils/fetchPosts';
import deletePost from '@/Utils/deletePost';
import App from '@/Components/App';
export default function page() {
  const [posts, setPosts] = useState([]);
  return (
    <PostContext.Provider value={{ posts, setPosts, fetchPosts, deletePost }}>
      <App />
      {/* <div className='grid grid-cols-4'>
        <div>
          <SideNav />
        </div>
        <div className='pt-6 col-span-2'>
          <MakePost />
          <div className=''>
            <AllPost />
          </div>
        </div>
        <div className=''>
          <Dashboard />
        </div>
      </div> */}

    </PostContext.Provider>
  )
}
