import React from 'react'
import Main from './Main/Main'
import SideNav from './Side/SideNav'
import Dashboard from './Side/Dashboard'

export default function App() {
  return (
    <>
      <div className='grid grid-cols-4 gap-y-6 gap-x-5'>
        <div><SideNav /></div>
        <div className='col-span-2'><Main /></div>
        <div><Dashboard /></div>
      </div>
    </>
  )
}
