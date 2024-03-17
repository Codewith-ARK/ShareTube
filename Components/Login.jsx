import React, { useContext, useState } from 'react'

export default function Login({ setIsLoggedIn }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
  }

  return (
    <section className='h-screen w-screen flex justify-center items-center'>
      <form onSubmit={submitHandler} className='flex justify-center items-center flex-col gap-2'>
        <h3 className='text-4xl'>Login</h3>
        <input autoComplete='off' className='border border-gray-800 p-2 rounded-lg' type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} />
        <input autoComplete='off' className='border border-gray-800 p-2 rounded-lg' type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
        <button className='bg-blue-600 p-2 rounded-lg text-white' type="submit">Submit</button>
      </form>
    </section>
  )
}
