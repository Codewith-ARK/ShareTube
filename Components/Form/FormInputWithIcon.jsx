import React from 'react'
import FormInput from './FormInput'

export default function FormInputWithIcon({ icon, inputType, text, name, changeHandler, value }) {
  return (
    <div className='w-full flex items-center'>
      {icon}
      <FormInput type={inputType}
        placeholder={text}
        name={name}
        onChange={changeHandler}
        value={value}
      />
    </div>
  )
}
