import React from 'react'

const Box = ({item,ind,setInd}) => {

    const handler=(Id)=>{
        setInd(Id);
    }
  return (
    <div onClick={()=>handler(item.id)}
     className={`flex flex-col font-serif cursor-pointer border bg-white p-5  rounded-2xl mt-5 md:w-[520px] ${item.id===ind? "bg-purple-300/[0.3]":""}`}>
        <p className='text-[22px] text-black/[0.55] font-bold leading-[50px]'>{item.text1}</p>

        {
            item.id===ind &&
           <p className='text-[17px] text-black/[0.65] leading-[25px]'>{item.text2}</p>
        }

      
    </div>
  )
}

export default Box;
