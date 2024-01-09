import React from 'react'

const Button = ({text}) => {
  return (
    <button className='rounded-tl-3xl rounded-bl-lg rounded-tr-lg rounded-br-3xl
    text-white px-4 py-2 font-serif font-bold text-lg bg-gradient-to-r from-indigo-600  to-purple-600 '>
   <div className='py-2 px-8  '>{text}</div>
  </button> 
  )
  // bg-rgb(255, 255, 255)
}

export default Button
