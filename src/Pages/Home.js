import React from 'react'
import ContactUs from './ContactUs'
import Aggregator from './Aggregator'
import Button from '../components/Button'
import About from './About'
import Features from './Features'
import Roadmap from './Roadmap'

import { FaApple } from "react-icons/fa";
import { IoLogoWindows } from "react-icons/io5";
import { PiHandsClappingLight } from "react-icons/pi";

import  Logo from '../Assets/logo2.svg'
import videoBg from '../Assets/videoBg.webp'
import App from '../Assets/App.svg'
import Setting from '../Assets/settings.svg'
import Tools from '../Assets/PrivateTools.svg'
import Teddy from '../Assets/teddy.svg'
import Quad from '../Assets/Quad.svg'



const Home = () => {
  return (
    <div className='bg-purple-100 flex flex-col items-center justify-center overflow-hidden  '>
       
       {/* Home */}
      {/* 1st div */}
      <div className='bg-white xl:w-[1400px]  mt-2 mb-5 flex flex-wrap items-center justify-center  '>
        
        {/* leftdiv */}
        <div className='flex flex-wrap flex-col items-center justify-center md:w-[600px] my-10  '>

          <img src={Teddy} className='mb-5'/>
           
           <div className='md:w-[500px] w-[300px] text-center'>
            <p className='md:text-[50px] text-[30px] font-serif font-bold md:leading-[72px] mt-5'>NFD platform</p>
            <p className="md:text-[50px] text-[30px] text-indigo-600/[0.65] font-serif font-bold md:leading-[40px] mb-6">“NFD.gg”</p>
            <p className='md:text-[20px]  text-black/[0.5] font-serif leading-[30px] ' >An Alpha community 2.0 with its own platform for participating,searching, and tracking any crypto related information.</p>
           </div>
          
          {/* buttons */}
          <div className='flex items-center md:flex-row flex-col text-[16px] my-8 mx-6 '>
            <div className='flex items-center justify-center rounded-xl mx-4 my-4 gap-4 p-2 border'><img src={App} className='bg-slate-300/[0.5] p-2 rounded-lg'/><span>Info in one place</span></div>
            <div className='flex items-center justify-center rounded-lg mx-4 my-4 gap-4 p-2 border'><img src={Tools} className='bg-slate-300/[0.5] p-2 rounded-lg' /><span>Private tools</span></div>
            <div className='flex items-center justify-center rounded-lg mx-4 my-4 gap-4 p-2 border'><img src={Setting} className='bg-slate-300/[0.5] p-2 rounded-lg' /><span>Wide functionality</span></div>
            

          </div>

          <div className='flex md:flex-row flex-col items-center gap-5 mx-2 my-2 '>
          <Button text={`Try platform`}/>
          <p className='text-indigo-600 text-[17px]'>How it Works?</p>
          </div>

        </div>
        {/* leftdiv ends */}
        
        {/* rightdiv */}
        <div className='flex h-[680px] flex-wrap flex-col items-center justify-center 2xl:w-[700px] md:w-[600px] bg-black text-white my-10'>

          {/* icon */}
          <div className={` rounded-full flex items-center gap-2 px-4 py-1 border-2 border-purple-400`}>
            <PiHandsClappingLight size={22}/><span>Software by NFD</span>
          </div>

           
           {/* heading */}
         <div  className='text-center md:w-[600px] w-[300px]'>
           <p className='md:text-[50px] text-[30px] text-white/[0.65] font-serif font-bold md:leading-[72px] mt-5'>NFD software</p>
           <p className="md:text-[50px] text-[30px] text-indigo-300/[0.5] font-serif font-bold md:leading-[40px] mb-6">“Combine”</p>
             <p className='md:text-[20px] text-center text-white/[0.5] font-serif leading-[30px] ' >
              Handle your crypto-wallets, farm activities and retrodrops on a single app.
             </p>
         </div>

            {/* icons */}
            <div className='flex md:flex-row flex-col items-center justify-around gap-10 w-[500px] text-[20px] border-b mb-5 '>
            <div className='flex justify-center md:w-[200px] items-center gap-3 text-white/[0.47] cursor-pointer p-4'><FaApple className=''size={25} /><span >macOs</span></div>
            <div className='relative  flex justify-center md:w-[200px] items-center gap-3 cursor-pointer p-4 border-b-2  border-purple-600'>
              <IoLogoWindows className='' />
              <span>Windows</span>
              <div className='absolute top-[35px] w-[200px]' ><img src={Quad} className='object-fit' /></div>
            </div>
            </div>

            {/* buttons */}
            <div className='flex  md:flex-row flex-col items-center gap-5 mx-2 my-5 '>
          <Button text={`Download`}/>
          <p className='text-indigo-600 text-[17px]'>How it Works?</p>
          </div>

            





          

        </div>
        {/* rightdiv ends*/}

      </div>

      {/* aggregator */}
      <Aggregator/>

      {/* Features */}
      <Features/>

      {/* roadmap */}
      <Roadmap/>

      {/* contactus */}
      <ContactUs/>

      

    </div>
  )
}

export default Home
