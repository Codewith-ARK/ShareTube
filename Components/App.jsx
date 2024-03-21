import React from 'react'
import Main from './Main/Main'
import SideNav from './Side/SideNav'
import Dashboard from './Side/Dashboard'

export default function App() {
  return (
    <>
      <div className='grid grid-cols-4'>
        <div><SideNav /></div>
        <div className='pt-6 col-span-2'><Main /></div>
        <div><Dashboard /></div>
      </div>
    </>
  )
}
