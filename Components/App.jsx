import React from 'react'
import Main from './Main/Main'
import SideNav from './Side/SideNav'
import Dashboard from './Side/Dashboard'
import { useUser } from '@auth0/nextjs-auth0/client';

export default function App() {

  const { user } = useUser();

  return (
    <>
      <div className='grid grid-cols-1 p-4 lg:grid-cols-4 md:p-0 gap-y-6 gap-x-5 overflow-x-hidden'>
        <div>
          {/* <SideNav /> */}
        </div>
        <div className='col-span-2'><Main /></div>
        <div>
          {/* <Dashboard /> */}
        </div>
      </div>
    </>
  )
}
