import React from 'react'

import { FaTwitter } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

import Button from '../components/Button'
import ContactBg from '../Assets/contact1Bg.webp'
import ContactBg2 from '../Assets/contact2bg.webp'

const ContactUs = () => {
  return (
    <div className='flex  items-center justify-center w-full h-[800px] '>
    <div className='w-full h-[600px] text-white bg-indigo-600/[0.85]  
     flex flex-col items-center justify-center rounded-b-[100px] rounded-t-[100px]'>

     <p className='mb-[30px] text-[70px] font-serif font-bold leading-[72px] mt-5'>Join our community</p>

     <div className='flex items-center gap-10 my-[10px]'>
      <div className='flex py-3 px-8 rounded-tl-3xl rounded-br-3xl rounded-md items-center text-purple-600 bg-white justify-center gap-2'><FaDiscord size={25} className='text-purple-600'/><span>Join Discord</span></div>
      <div className='flex py-3 px-8 rounded-tl-3xl rounded-br-3xl rounded-md border-white border hover:border-0 items-center justify-center gap-2'><FaTwitter size={25}/><span>Follow Twitter</span></div>
     </div>

     <p className=' mt-[20px] underline text-[18px] font-serif font-medium leading-[30px] '>Read our whitepaper</p>
     
    </div>
    </div>
  )
}

export default ContactUs
