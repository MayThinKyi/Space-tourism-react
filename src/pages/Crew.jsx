import React, { useEffect, useState } from 'react'
import { crew } from '../data/data'

const Crew = () => {
  const [crewId,setCrewId]=useState(0);
  const [data,setData]=useState([])
  useEffect(()=>{
   setData(crew[crewId]);
  },[crewId])
  return (
       <div className=' Crew h-[auto] pt-[200px]  pb-40 px-5 sm:px-[50px]  xl:px-[150px] gap-10 flex flex-wrap md:flex-nowrap  justify-between'>
            <div className=' md:w-[60%]'> 
                <h1 className='title mb-8 tracking-[4px] text-2xl sm:text-3xl lg:text-3xl  text-[#fff] '>
                  <span className='text-[#54575E] font-bold'>02 </span>
                  MEET YOUR CREW
                </h1>
                <div className='flex gap-8 sm:gap-10'>
                </div>
                <h1 className=' font-serif mt-5  text-[30px]  lg:text-[40px]   tracking-[3px]  text-[#7C7E83] font-[400]'>
                {data?.role}
                </h1>
                <h1 className=' font-serif mb-3 text-[40px]  lg:text-[50px]   tracking-[3px]  text-[#fff] font-[400]'>
                  {data?.name}
                </h1>
                <h1 className='text-[#CAD0F2] pb-14  text-lg font-[300] [line-height: 32px]'>
              {data?.bio}
              </h1>
              <div className='flex gap-4 my-5'>
              {crew?.map((item,index)=>{
                return <div key={index} onClick={()=>setCrewId(index)} className= {`cursor-pointer w-[13px] h-[13px] rounded-full ${ crewId==index ? 'bg-[#fff]' :'bg-[#85878B]'} `} >
                </div>
              })}
              </div>
            </div>
            <div className='  mx-auto mt-10 md:mt-0 '>
                <img className='  mx-auto w-[auto] xs:h-[300px] sm:h-[345px] lg:h-[445px]' alt={data?.name} src={data?.image} />       
            </div>
        </div>
  )
}

export default Crew