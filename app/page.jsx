"use client"
import MakePost from '@/Components/MakePost';
import Posts from '@/Components/Posts';
import SideNav from '@/Components/SideNav';
import { PostContext } from '@/context/postContext';
import React, { useContext, useState } from 'react'
import { useUser } from '@auth0/nextjs-auth0/client';
import Dashboard from '@/Components/Dashboard';

export default function page() {

  const [POSTS, setPOSTS] = useState([]);
  // const [isLoggedIn, setIsLoggedIn] = useState(false)
  const { user } = useUser();
  return (
    <PostContext.Provider value={{ POSTS, setPOSTS, user}}>
        <div className='grid grid-cols-4'>
          <div>
            <SideNav />
          </div>
          <div className='pt-6 col-span-2'>
            <MakePost />
            <div className=''>
              <Posts />
            </div>
          </div>
          <div className=''>
            <Dashboard />
          </div>
        </div>

    </PostContext.Provider>
  )
}
