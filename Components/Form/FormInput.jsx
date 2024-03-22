import React from 'react'

export default function FormInput({ inputType, text, name, changeHandler, value }) {
  return (
    <input
      className='text-black/[0.3] text-base flex-grow'
      autoComplete='off'
      type={inputType}
      placeholder={text}
      name={name || ''}
      onChange={changeHandler}
      value={value}
    />
  )
}
