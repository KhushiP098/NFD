import React ,{useState} from 'react'
import Box from '../components/Box'

import FeaturesBg1 from '../Assets/FeaturesBg1.svg'
import Feature2 from '../Assets/Feature2.webp'
import Feature3 from '../Assets/Features3.webp'
import Feature4 from '../Assets/Features4.webp'
import Feature5 from '../Assets/Features5.webp'
import Feature6 from '../Assets/Features6.webp'


const data=[
  {id:0 ,url:Feature2,
    text1:"Activities",
    text2:"Receive already reviewed information about the most captivating events in crypto world. The professional analytics will allow you to easily make money.",
  },

  {id:1 ,url:Feature3,
    text1:"Auto-Update feed",
    text2:"All activities will have an “auto update feed”, which will be monitored by the NFD team so that you wont miss important changes or additions to any activity. Stay up to date!",
  },

  {id:2 ,url:Feature4,
    text1:"Calendar",
    text2:"We have implemented an internal calendar functionality that will synchronize all your “Activities” in NFD, all their deadlines and important events. You can also add your token",
  },

  {id:3 ,url:Feature5,
    text1:"Aggregator",
    text2:"Create a project card, set up data parsing in just 2 minutes and get only the necessary information concerning any crypto project.",
  },

  {id:4 ,url:Feature6,
    text1:"Alpha Search",
    text2:"Make your own list of influencers, funds or degen accounts on Twitter and monitor their new subscriptions and where those subscriptions match each other. Be the first to find an alpha.",

  },
]

const Features = () => {

  const [ind,setInd]=useState(0);

  return (
    <div className={`mt-10 `}>
    
      {/* bg img */}
      
      {/* <div class="absolute left-0 top-0 right-0 w-[100%] ">
      <img src={FeaturesBg1} alt="image" class="w-full object-fill scale-x-100 "/>
    </div> */}

      <div className='  flex flex-col'>
        {/* headings */}
        <div className='text-center h-[400px]'>
          <p className='text-[60px] font-serif font-bold leading-[72px] mb-6'>Use all the benefits of NFD</p>
          <p className='text-[20px] font-serif leading-[30px] '>Unlock the next level of control with customizable real-time feeds, charts,<br/> watchlists, and alerts with NFD.gg</p>
        </div>
        
        {/* img & box */}
        <div className='flex items-center justify-between md:w-[1440px] mx-auto '>
          <div className='flex flex-col '>
            {
              data.map((item)=>(
                <Box key={item.id} item={item} ind={ind} setInd={setInd}/>
              ))
            }

          </div>


          <img src={data[ind]?.url} className='w-[800px] h-[550px]'/>
          
        </div>

        

      </div>

    </div>
  )
}

export default Features
