import React from 'react'

const Profile = ({item,show,setShow}) => {

    const Handler=(Id)=>{
       setShow(Id);
    }

   const handleDisplay=()=>{
    setShow(0);
   }

  return (
    <div  onMouseEnter={()=>Handler(item.id)} onMouseLeave={handleDisplay}
    key={item.id} className={` ${show===item.id?"translate-x-[30px] z-10 duration-1000 linear ":"-translate-x-[30px] duration-700 linear "} md:m-5 m-10 w-[120px] sm:bg-none h-[200px] md:w-[200px] md:h-[300px] font-serif flex flex-col  items-center ${show? "" :"justify-center"} `}>
      
     {
        show===item.id?
         <div className={` object-fit delay-1000 transition linear duration-700  flex flex-col font-serif items-center justify-start `}>
            
          <p className='text-[16px] my-[5px] pt-[5px]'>More Info</p>

          {/* line */}
          <div className='h-[1px] w-[80px] md:w-[200px] bg-black/[0.5]'></div>

          <div className=' my-[8px] w-[80px] sm:w-[150px] flex items-center gap-3 justify-between'>
            {/* img */}
            <div className={`flex justify-center items-center rounded-full w-[60px] h-[60px] border border-indigo-600/[0.25]`}>
              <div className={`rounded-full flex justify-center items-center w-[50px] h-[50px] bg-indigo-600/[0.25]`}>
                <img src={item.url} width="50px" height="50px"/>
              </div>
            </div>
    
           {/* name and position */}
            <div className='flex flex-col text-[10px]  sm:text-[15px] '>
            <p className='my-2 leading-[10px] '>{item.name}</p>
           <p className='text-black/[0.5] '>{item.text1}</p>
            </div>    

          </div>

          <p className=' text-center text-black/[0.5] font-serif text-[10px]  sm:text-[15px] '>{item.text2}</p>

        </div>  
        :
        <div className=' delay-1000 transition linear duration-700  flex flex-col items-center justify-center'>
           <div className={` mb-8 flex justify-center rounded-full md:w-[150px] md:h-[150px] w-[50px] h-[50px] bg-indigo-600/[0.25]`}>
              <div className={`rounded-full  w-[120px] h-[120px] opacity-100`}>
                <img src={item.url}/>
              </div>
            </div>
           <p className='mb-2 text-[16px] leading-5'>{item.name}</p>
           <p className='text-black/[0.5] text-[14px]'>{item.text1}</p>
        </div>
     }

  </div>
  )
};

export default Profile
