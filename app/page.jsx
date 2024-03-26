"use client"
import { PostContext } from '@/context/postContext';
import React, { useState } from 'react'
import fetchPosts from '@/Utils/fetchPosts';
import deletePost from '@/Utils/deletePost';
import App from '@/Components/App';
import { useUser } from '@auth0/nextjs-auth0/client';
import Login from '@/Components/Login';

export default function page() {

  const [posts, setPosts] = useState([]);
  const { user } = useUser()


  return (
    <PostContext.Provider value={{ posts, setPosts, fetchPosts, deletePost}}>
      {
        user ? (
          <App />
        ) : (
          <Login />
        )
      }
    </PostContext.Provider>
  )
}
