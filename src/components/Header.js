import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

import { FaTwitter } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

import Logo from '../Assets/logo.svg'
import Logo2 from '../Assets/logo2.svg'
import Icon from '../Assets/CloseBar.svg'


const Header = () => {

  const[lastScroll,setLastScroll]=useState(0);
  const[show,setShow]=useState(false);

  const [nav,setNav]=useState("bg-white rounded-3xl")

  const controlNav=()=>{
    if(window.scrollY>100){
      setShow(true);
       setNav("bg-rgb(55, 49, 69, 0.8) )")
    }
    else{
      setShow(false);
      setNav("bg-white rounded-3xl");
    }
    setLastScroll(window.scrollY);
  }

  useEffect(()=>{

    window.addEventListener("scroll",controlNav);
    return()=>{
      window.removeEventListener("scroll",controlNav);
    }

  },[lastScroll])

  

  return (
    <div className={`w-full z-100 flex sticky  top-0 items-center justify-center md:h-[100px] ${show ? "bg-zinc-600/[0.85] backdrop-blur-md  text-white":"bg-purple-100 "} `}>
      <div className={` py-2 xl:w-[1440px]  w-[1200px] flex justify-between items-center ${nav} `}>
        
        {/* logos */}
        <div className='flex gap-5 items-center justify-between w-[170px] ml-10 ' >
          <img src={Logo2} />
          <img src={Logo} />
        </div>

        <img src={Icon} className='text-white  w-[50px] h-[30px] mr-10 block xl:hidden '/>


        {/* centernav */}
        <div className='hidden xl:flex items-center font-semibold  gap-5 text-[16px] font-serif'>
          <Link to='/about' className='py-5 px-3 hover:underline hover:text-lg hover:text-indigo-600/[0.35]'><div>About</div></Link>
          <Link to='/aggregator' className='hover:underline hover:text-lg hover:text-indigo-600/[0.35] py-5 px-3'><div >Aggregator</div></Link>
          <Link to='/features'className='py-5 px-3 hover:underline hover:text-lg hover:text-indigo-600/[0.35]'><div>Features</div></Link>
          <Link to='/roadmap'className='py-5 px-3 hover:underline hover:text-lg hover:text-indigo-600/[0.35]'><div>Roadmap</div></Link>
          <Link to='/contact'className='py-5 px-3 hover:underline hover:text-lg hover:text-indigo-600/[0.35]'><div>Contact us</div></Link>
        </div>
        {/* centernav ends */}

        
         {/* rightnav */}
        <div className='hidden xl:flex items-center justify-between'>

          {/* icons */}
         <div className='flex gap-2 items-center justify-between mr-10 '>
           <div className='px-2 py-5'><FaDiscord className='text-indigo-700 h-6 w-6' color="sky-600 " /></div> 
           <div className='px-2 py-5'><FaTwitter  className='text-indigo-700 h-6 w-6' color="sky-600 px-5 py-2" /></div> 
         </div>

         {/* buttons */}
         { show &&
          <div className='flex gap-5 backdrop-blur-sm'>
          <div><Button  text={`"Combine"Software`} /></div>
          <div><Button text={`Platform`}/></div>
          </div>
         }

         

        </div>
        {/* rightnav ends */}

      </div>
    </div>
  )
}

export default Header
