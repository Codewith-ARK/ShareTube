"use client"
import MakePost from '@/Components/MakePost';
import Posts from '@/Components/Posts';
import SideNav from '@/Components/SideNav';
import Login from '@/Components/Login'
import { PostContext } from '@/context/postContext';
import React, { useContext, useState } from 'react'

export default function page() {

  const [POSTS, setPOSTS] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <PostContext.Provider value={{ POSTS, setPOSTS, isLoggedIn, setIsLoggedIn }}>
      {isLoggedIn ?
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
            right side
          </div>
        </div>
        :
        <Login setIsLoggedIn={setIsLoggedIn} />
      }

    </PostContext.Provider>
  )
}
