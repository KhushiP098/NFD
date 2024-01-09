import React from 'react'
import Button from '../components/Button'

import Img1 from '../Assets/1OPT.webp'
import Img2 from '../Assets/AggContent2OPT2.webp'
import Img3 from '../Assets/AggContentOPT.webp'
import Arrow from '../Assets/Arrow.svg'
import Icon1 from '../Assets/icon1.svg'
import Icon2 from '../Assets/Icon2.svg'
import Icon3 from '../Assets/Icon3.svg'
import Alpha from '../Assets/Alpha.svg'

import Image1 from '../Assets/Agg1.webp'
import Image2 from '../Assets/Agg2.webp'
import Image3 from '../Assets/Agg3.webp'

import { FaTwitter } from "react-icons/fa";

const Aggregator = () => {
  return (
    <div className='w-full flex flex-col text-white items-center justify-center bg-black'>

      {/* div1 */}
      <div className='h-[800px] mt-[10px]  w-[1400px] gap-[100px] text-center flex xl:flex-row flex-col items-center justify-between '>

        {/* leftdiv */}
        <div className='xl:w-[700px] xl:block hidden'>
        <img src={Img2} className='w-[700px] h-[600px]'/>
        </div>

        {/* rightdiv */}
        <div className='w-[500px] flex flex-col items-center justify-center '>

          <div className='rounded-full px-5 xl:block hidden  py-2 bg-purple-400 text-white font-bold'>FIRST WEB3 CRYPTO</div>
          <p className='text-[60px] font-serif font-semibold leading-[72px] my-5'>Keeping track of projects in one place</p>

           <p className='text-[18px] text-white/[0.65] font-serif leading-[30px] '>The NFD.gg aggregator allows you to create a specific card of any project and parse any type of information from Discord, Twitter, Dune Analytics, TradingView, Github etc. into your own dashboard.</p>

           <div className='mt-[25px] flex items-center w-[400px] justify-between'>
           <Button text={"Start Creating"} className="cursor-pointer"/>
           <p className='text-[18px] cursor-pointer hover:text-indigo-600 font-serif leading-[30px] '>View Roadmap</p>
           </div>
        </div>



      </div>

      {/* div2 */}
      <div className='text-center flex xl:flex-row flex-col items-center  justify-between '>
      <div className='text-center xl:w-[1400px] flex-wrap flex flex-col items-center justify-center'>

      <polygon className='xl:text-[60px] xl:w-[800px] text-[30px] font-serif font-semibold leading-[72px] mt-[30px]'>Find alpha before anyone else with us</polygon>
          
          {/* buttons */}
          <div className='flex xl:flex-row flex-col items-center font-serif text-[17px] text-white justify-center mt-[50px] '>

            <div className=' m-5 px-5  flex items-center gap-2 justify-center  rounded-full  bg-blue-600 '><img src={Icon1} className='m-4'/><span className='m-4'>Add a list of top Twitter accounts</span></div>
            <div className=' m-5 px-5  flex items-center gap-1 rounded-full  bg-orange-700 '><img src={Icon2} className='m-4'/><span className='m-4'>Follow their new subscriptions.</span></div>
            <div className=' m-5 px-5 flex items-center gap-1 rounded-full  bg-indigo-700 '><img src={Icon3} className='m-4'/><span className='m-4'>We'll show you matches on those subscriptions.</span></div>
          </div>

           {/* arrow */}
           <div className='relative -right-[180px] xl:block hidden h-[100px]'><img src={Arrow} className='w-[300px] h-[280px]'/></div>

          <div className='z-5 xl:block hidden'>
            <img src={Img1}/>
          </div>

          {/* blue div */}
          <div className='xl:w-full relative mt-[30px] xl:-top-[60px]'>
            <div className='xl:w-[1400px] flex xl:flex-row flex-col  w-[600px] items-center xl:justify-around justify-center rounded-xl bg-indigo-500 py-[25px]'>


              {/*  headings */}
              <div className='flex flex-col w-[500px] items-center justify-center my-[30px] '>
                <p className='text-[40px] font-serif font-semibold leading-[30px] '>Finding Alpha is easy</p>
                <p className='text-[18px]  font-serif  leading-[30px] mt-[30px]'>Alpha search tool will let you be one of the first people to find the most promising alpha by tracking influencers and the most hyped projects.</p>
              </div>

              <div className='flex items-center font-serif font-medium justify-around w-[500px]'>
                <div className='flex py-4 px-8 rounded-tl-3xl rounded-br-3xl  text-[20px] rounded-md items-center text-purple-600 bg-white justify-center gap-2'><span>Try now for free</span></div>
                <div className='flex py-4 px-8 rounded-tl-3xl rounded-br-3xl rounded-md border-white border hover:border-0 items-center justify-center gap-2'><FaTwitter size={25}/><span>Follow Twitter</span></div>
              </div>

            </div>

          </div>

       </div> 
       </div>

       {/* div3 */}
       <div className='bg-gradient-to-r h-[1000px] w-[1400px]  from-black  to-purple-800/[0.5] mx-auto  flex xl:flex-row flex-col items-center justify-between'>
        
        {/* leftdiv */}
        <div className='w-[600px] flex flex-col items-center'>

          <div className='text-[50px] gap-5 font-serif font-semibold leading-[72px] mt-[30px] flex items-center '>
            No spam,only<span className='text-purple-400'>Alpha</span>
          </div> 
          
          <img src={Alpha} width="200px" height="100px" className='relative -top-[70px] -right-[200px]' />
         
          <p className='text-[20px] font-serif  leading-[40px] my-[20px]'>We publish on the NFD.gg platform only that activities that have been selected an dresearched by our team.</p>
          <p className='text-[20px] font-serif   leading-[40px] my-[20px]'>You can see several categories of these events from retrodrops and early projects to raffles and mint sales</p>

          <p className='text-[20px] font-serif   leading-[40px] my-[20px]'>
             And a major plus is that they all have an Auto updated feed ,and all updates/cahnges to these activitiez are analyzed and reached by our team and published in this feed
            </p>
            

        </div>
        
        {/* rightdiv */}
        <div className='w-[700px] '>

          <img src={Image2} className='w-[550px] h-[600px]' />

        </div>

       </div>

    </div>
  )
}

export default Aggregator
