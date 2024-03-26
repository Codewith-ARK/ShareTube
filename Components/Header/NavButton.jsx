import React from 'react'

export default function NavButton({url, text}) {
  return (
    <a className='text-white px-6 py-2 rounded-3xl bg-[#F37852] font-semibold' href={url}>{text}</a>
  )
}
