import React from 'react'
import { Link } from 'react-router-dom'

import Button from './Button'

import Logo from '../Assets/logo.svg'
import Logo2 from '../Assets/logo2.svg'


const Footer = () => {
  return (
    <div className='w-full mb-[100px] mt-[20px] flex items-center justify-center md:h-[85px] '>
      <div className='bg-white py-2 md:w-[1440px] flex justify-between items-center mt-8 '>
        
        {/* logos */}
        <div className='flex items-center gap-10 '>
        <div className='flex gap-5 items-center justify-between w-[170px] ml-10 ' >
          <img src={Logo2} />
          <img src={Logo} />
        </div>

        <div className='py-5 px-3 hover:underline hover:text-purple-600'>© 2023 NFD, INC. ALL RIGHTS RESERVED.</div>

        </div>
        

        {/* centernav */}
        <div className='flex items-center  gap-5 text-[16px] font-semibold font-sans'>
          <Link to='#' className='py-5 px-3 underline'><div >Privacy</div></Link>
          <Link to='#'className='py-5 px-3 underline '><div>Term of use</div></Link>
        
        </div>

        {/* icons */}

        <div className='flex gap-5 items-center justify-between mr-10 '>
        
        <Link to='#'className='py-5 px-3 underline text-purple-600 '><div>contact@nfd.gg</div></Link>
         <Button text={"Try App"}/>
        </div>

      </div>
      
    </div>
  )
}

export default Footer

