import React, { useEffect,useState } from 'react'

import Logo from '../Assets/logo2.svg'
import videoBg from '../Assets/videoBg.webp'

const About = () => {
  
  return (
    

      <div className=' bg-purple-100 w-full flex p-10 items-center justify-center '>

        {/*  section */}
        <div className=' bg-white flex flex-col items-center justify-center xl:w-[1400px]  '>

          <div className='flex p-10 lg:flex-row flex-col items-center justify-center gap-[100px] '>

            {/* left div */}
            <div className='flex flex-col  p-10 md:w-[500px] w-[350px] items-center justify-center'>

              <div className=' mb-[60px] text-[40px] w-full  '>
                <p className='md:text-[60px] font-serif font-semibold md:leading-[72px] my-10'>The first web3 crypto platform</p>
                <p className='text-[23px] font-bold font-serif leading-[30px] mb-5'>Problem</p>
                <p className='text-[19px] text-black/[0.65] font-serif leading-[35px] '
                >Today, even in alpha communities, there's an enormous volume of information that members have to wade through for 6-8+ hours a day. Cutting through the noise of spam is a real problem even where there's something genuinely worth knowing.
                </p>
              </div>

            </div>

            {/* rightdiv */}
            <div className=' flex  items-center justify-center xl:w-[600px] xl:h-[600px] w-[330px] h-[330px] '>

                <img src={videoBg} className=' xl:w-[600px] xl:h-[600px] w-[330px] h-[330px] ' />


              <video muted preload='preload' autoPlay   src="https://www.nfd.gg/outtest_f19ifs.webm"
                type="video/webm" className={`bg-none absolute xl:w-[600px] xl:h-[600px] w-[330px] h-[330px] `}
              />


            </div>

          </div>
          

          <div className=' flex  items-center justify-center '>

          {/* left div */}
          <div className='flex flex-col flex-wrap lg:w-[800px] md:w-[500px] w-[350px] bg-white p-10 items-center justify-center '>

            <div className=' w-full mb-[60px] text-[40px]  '>
              <p className='sm:text-[60px] font-serif font-semibold sm:leading-[72px] mt-5'>We work to make your life easier</p>
              <p className='text-[23px] font-bold font-serif leading-[30px] my-5'>Solution</p>
              <p className='text-[19px] text-black/[0.65] font-serif leading-[30px] '
              >NFD.gg heralds a new era in alpha communities, one where they have their own platform, which structures and condenses relevant information on all these alpha activities, where our team monitors any updates on these activities 24/7. No more reading 2000+ discord messages a day and tracking twitter day in, day out. Everything you ever need to know can be found on NFD.gg.
              </p>

            </div>

            <div className='flex items-center justify-between h-[40px] md:w-[400px] gap-5'>
              <div className='p-4 rounded-lg bg-purple-100'><img src={Logo} className='w-[30px] h-[30px] ' /></div>
              <span className='text-[18px] font-serif leading-[20px] '>NFD will save you time and help you earn money in crypto.</span>
            </div>

          </div>
          
           </div>
          
        </div>

      </div>
  )
}

export default About

