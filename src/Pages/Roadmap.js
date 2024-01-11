import React, { useState } from 'react'
import Button from '../components/Button'
import Profile from '../components/Profile'


import Avatar1 from '../Assets/Avtar1.webp'
import Avatar2 from '../Assets/Avtar2.webp'
import Avatar3 from '../Assets/Avtar3.png'
import Avatar4 from '../Assets/avtar4.png'
import Avatar5 from '../Assets/Avtar5.webp'
import Avatar6 from '../Assets/Avtar7.png'

const data=[

  {id:1,name:"William",text1:"CTO",color:"blue",url:Avatar1,
  text2:"5+ years in IT, 5 years in crypto. Brought from 0 to successful launch multiple complex projects",
  },

  {id:2,name:"Leo",text1:"CEO",color:"indigo",url:Avatar2,
  text2:"Experience: 4 years in crypto. Invested in almost all the big projects, that have launched on the market in the last 2 years. Works directly with many crypto incubators and launchpads.",
  },

  {id:3,name:"Vadim",text1:"CCO",color:"blue",url:Avatar3 ,
  text2:"Experience: In web3 since 2018. Head of content. For more than two years he has been writing for the famous and authoritative communities.",
  },

  {id:4,name:"Vitale",text1:"Team Lead Fullstack",color:"red",url:Avatar4 ,
  text2:"5.5+ years in development. Team Lead. Founded a successful web studio. FMW: React (Native), Angular, Laravel. Langs: TS,Python, PHP, Solidity.",
  },

  {id:5,name:"Nikita ",text1:"Frontend Developer",color:"green",url:Avatar6 ,
  text2:"Experience: 3 years of working with most popular front-end frameworks and libraries including. Loves working with 3d libraries and solving complex problems.",
  },

  {id:6,name:"Den",text1:"Backend Developer",color:"pink",url:Avatar5 ,
  text2:"Experience: 4+ years developing complex back-end solutions. JS/TS, Python, Rust, Go.",

  },
]

const Roadmap = () => {

  const [show,setShow]=useState(0);
  return (
  <div className='w-full flex flex-col'>
   
   {/* 1st section */}
   <div className='w-full min-h-[1500px] flex flex-col items-start xl:items-center justify-center bg-black overflow-hidden'>
       
       {/* background circle */}
       <div className='flex items-center justify-between h-[800px] z-5'>
        <div className='rounded-full w-[800px] h-[800px] blur-lg bg-blend-darken  bg-gradient-to-r from-black  to-purple-600/[0.2] outline m-20 relative right-[100px] '></div>
        <div className='rounded-full w-[500px] h-[500px] blur-lg  bg-gradient-to-r from-black  to-purple-600/[0.65] outline m-20 relative right-[100px] '></div>
        <div className='rounded-full w-[200px] h-[200px] blur-lg  bg-gradient-to-r from-black  to-purple-600/[0.3] outline m-20 relative right-[100px] '></div>     
       </div>
       
       {/* heading */}
       <div className='w-full text-center h-[100px] text-white relative -top-[700px]'>
        <p className='md:text-[90px] text-[50px] font-serif font-bold md:leading-[112px] mt-5'>NFD - game changing crypto platform</p>

        {/* small texts */}
        <div className='flex items-center my-10 text-[15px] justify-center '>
         <div className='flex items-center gap-2 mx-5'><div className='h-2 w-2 rounded-full bg-green-600'></div>Done</div>

         <div className='flex items-center gap-2 mx-5'><div className='h-1 w-1 animate-ping rounded-full bg-yellow-600  '></div>In work</div>
         <div className='flex items-center gap-2 mx-5'><div className='h-2 w-2 rounded-full bg-white'></div>Upcoming</div>
        </div>

      
        <div className='h-[50px] w-full '></div>
         
          {/* line */}
        <div className='h-[1px] xl:block hidden w-full bg-white/[0.2]'></div>

        <div className='flex flex-wrap items-center justify-center mt-10 xl:justify-around '>

          <div className='w-[250px] h-[200px] m-3 text-[16px] xl:leading-[30px] xl:relative xl:-top-[44px] '>
            <div className='h-3 w-3 blur-sm  rounded-full  bg-purple-800 xl:block hidden'></div>
            <div className='-ml-[100px] underline xl:leading-[40px] font-serif text-[23px]'>Stage1</div>
            <div className='flex items-center gap-2 mx-5'><div className='h-2 w-2 rounded-full bg-green-600'></div>Development</div>
            <div className='flex items-center gap-2 mx-5'><div className='h-2 w-2 rounded-full bg-green-600'></div>Activities and Aggregator</div>
            <div className='flex items-center gap-2 mx-5'><div className='h-2 w-2 rounded-full bg-green-600'></div>Alpha test</div>
            <div className='flex items-center gap-2 mx-5'><div className='h-2 w-2 rounded-full bg-green-600'></div>Alpha search tool</div>
            <div className='flex items-center gap-2 mx-5'><div className='h-1 w-1 animate-ping  rounded-full bg-yellow-600'></div>Beta test</div>
         
          </div>

          <div className='w-[250px] h-[200px] m-3  text-[16px] xl:leading-[30px] xl:relative xl:-top-[44px] xl:-left-[40px]'>
          <div className='h-3 w-3 rounded-full  blur-sm bg-white xl:block hidden'></div>
          <div className='-ml-[100px] underline xl:leading-[40px] font-serif text-[23px]'>Stage2</div>
            <div className='flex items-center gap-2 mx-5'><div className='h-2 w-2 rounded-full bg-green-600'></div>ROI scanner</div>
            <div className='flex items-center gap-2 mx-5'><div className='h-2 w-2 rounded-full bg-green-600'></div>Aggregator Summary</div>
            <div className='flex items-center gap-2 mx-5'><div className='h-2 w-2 rounded-full bg-green-600'></div>Twitter Scanner tool</div>
            <div className='flex items-center gap-2 mx-5'><div className='h-2 w-2 rounded-full bg-green-600'></div>Whale analysis</div>
            <div className='flex items-center gap-2 mx-5'><div className='h-1 w-1 animate-ping  rounded-full bg-yellow-600'></div>Blocks in Aggregator</div>
         
          </div>

          <div className='w-[250px] h-[200px] m-3  text-[16px] xl:leading-[30px] xl:relative xl:-top-[44px] xl:-left-[30px]'>
          <div className='h-3 w-3 rounded-full  blur-sm bg-white xl:block hidden'></div>
          <div className='-ml-[100px] underline xl:leading-[40px] font-serif text-[23px]'>Stage3</div>
            <div className='flex items-center gap-2 mx-5'><div className='h-1 w-1 animate-ping  rounded-full bg-yellow-600'></div> New sections in “Activities”</div>
            <div className='flex items-center gap-2 mx-5'><div className='h-2 w-2 rounded-full bg-green-600'></div>Launching NFD DAO</div>
            <div className='flex items-center gap-2 mx-5'><div className='h-2 w-2 rounded-full bg-green-600'></div>Expanding the calendar</div>
            <div className='flex items-center gap-2 mx-5'><div className='h-2 w-2 rounded-full bg-green-600'></div>Token vesting tool</div>
            <div className='flex items-center gap-2 mx-5'><div className='h-2 w-2 rounded-full bg-green-600'></div>NFD labs incubator</div>
          </div>

          <div className='w-[260px] h-[200px] m-3  text-[16px] xl:leading-[30px]  xl:relative xl:-top-[44px] '>
            <div className='h-3 w-3 rounded-full  blur-sm bg-white xl:block hidden'></div>
            <div className='-ml-[100px] underline xl:leading-[40px] font-serif text-[23px]'>Stage4</div>
            <div className='flex items-center gap-2 mx-5'><div className='h-2 w-2 rounded-full bg-green-600'></div>Crypto arbitrage scanner</div>
            <div className='flex items-center gap-2 mx-5'><div className='h-2 w-2 rounded-full bg-green-600'></div>Alpha search AI developing <br/>based on data collected</div>
            <div className='flex items-center gap-2 mx-5'><div className='h-1 w-1 animate-ping  rounded-full bg-green-600'></div>Adding any services based on<br/> NFD DAO votes</div>
            
          </div>

          <div className='w-[280px] h-[200px] m-3  text-[16px] leading-[30px] xl:relative  xl:-top-[44px]'>
          <div className='h-3 w-3 rounded-full  blur-sm bg-white xl:block hidden'></div>
          <div className='-ml-[100px] underline  xl:leading-[40px] font-serif text-[23px]'>Stage5</div>
            <div className='flex items-center gap-2 mx-5'><div className='h-2 w-2 rounded-full bg-green-600'></div>
            The launch of Project “X” by<br/> NFD labs, which will change the <br/>culture of crypto investment
            </div>
            
          </div>
          
        </div>
       </div>

    </div>

 {/*2nd section  */}
    <div className=' bg-gradient-to-r from-white  to-indigo-600/[0.52] flex flex-col  items-center justify-center'>
      <div className='xl:w-[1300px] p-10 mt-10 flex lg:flex-row flex-col bg-white rounded-lg items-center justify-between  '>

       {/* left div */}
       <div className='md:w-[500px] w-[350px] p-10 font-serif '>

        {/* headings */}
        <p className='text-[50px] font-semibold leading-[60px] mt-5'>We are delighted to introduce the NFD team members to you</p>
        <p className='text-[16px] text-black/[0.85] leading-[30px] my-10 '>NFD team is always open to new partnerships and new team members, so if you have a desire to join and you have a big experience in development or crypto - just leave your request in form and we will consider it.</p>

         {/* button */}
        <Button text={`Fill out a form`} className=" hover:bg-purple-600/[0.65] bg-indigo-600/[0.65]"/>


       </div>

       {/* right div */}
       <div className='xl:w-[800px] md:w-[600px] w-[300px] rounded-lg '>
        <div className='m-5 grid grid-cols-3 grid-rows-2 mx-auto '>

        {
          data.map((item)=>(
           <Profile key={item.id} item={item} show={show} setShow={setShow}/>
          ))
        }
        </div>
       </div>

      </div>

    </div>

   </div>
  )
}

export default Roadmap
