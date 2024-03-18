import React, { useContext, useState } from 'react'

export default function Login() {

  const submitHandler = (e) => {
    e.preventDefault();
  }

  return (
    <section className='h-screen w-screen flex justify-center items-center'>
      <form onSubmit={submitHandler} className='flex justify-center items-center flex-col gap-2'>
        <h3 className='text-4xl'>Login</h3>
        <a className='text-white py-2 px-4 rounded-lg bg-blue-500' href="/api/auth/login">Login</a>
      </form>
    </section>
  )
}
