import React, { useEffect, useState } from 'react'
import { destinations } from '../data/data'

const Destination = () => {
  const [name,setName]=useState(destinations[0]?.name);
  const [data,setData]=useState([])
  useEffect(()=>{
   setData(destinations?.filter(((item)=>item?.name===name))[0]);
  },[name])
  return (
  <div className='Destination  h-[auto] pt-[200px]  pb-40 px-5 sm:px-[50px]  xl:px-[150px] gap-10 flex flex-wrap md:flex-nowrap  justify-between'>
        <div className=' '> 
            <h1 className='title mb-8 tracking-[4px] text-2xl sm:text-3xl lg:text-3xl  text-[#fff] '>
              <span className='text-[#54575E] font-bold'>01 </span>
              PICK YOUR DESTINATION
              </h1>
            <img className=' w-[auto] xs:h-[300px] sm:h-[345px] lg:h-[445px]' alt={data?.name} src={data?.image} />
        </div>
         <div className='w-[100%] md:w-[40%] lg:w-[50%] mx-auto mt-10 md:mt-0 '>
          <div className='flex gap-8 sm:gap-10'>
          {destinations?.map((item,index)=>{
           return <h1  key={index} onClick={()=>setName(item?.name)} className={` title text-xl tracking-[1px] hover:border-b-2  hover:border-b-[#CAD0F2] transition-all cursor-pointer
           ${name==item?.name ?  'text-[#fff] border-b-2  border-b-white  ':'text-[#CAD0F2]'} ` }>{item?.name}</h1>
          })}
          </div>
          <h1 className=' font-serif mt-5 text-[50px] sm:text-[80px] lg:text-[100px]  tracking-[8px] sm:tracking-[10px] xl:tracking-[13px]  text-[#fff] font-[400]'>
            {data?.name}
          </h1>

          <h1 className='text-[#CAD0F2] pb-14 border-b border-b-[#CAD0F2]  text-lg font-[300] [line-height: 32px]'>
        {data?.description}
        </h1>
        <div className='my-6 flex flex-wrap gap-10 lg:gap-0 lg:flex-nowrap justify-between items-center'>
          <div>
          <h1 className='mb-3 title tracking-[4px] text-xl sm:text-2xl lg:text-2xl  text-[#CAD0F2] '>
          AVG. DISTANCE
          </h1>
          <h1 className=' font-serif text-3xl    text-[#fff] font-[400]'>
          {data?.distance}
          </h1>
          </div>
          <div>
          <h1 className='mb-3 title tracking-[4px] text-xl sm:text-2xl lg:text-2xl  text-[#CAD0F2] '>
          EST. TRAVEL TIME
          </h1>
          <h1 className=' font-serif text-3xl    text-[#fff] font-[400]'>
          {data?.travel}
          </h1>
          </div>
        </div>
         </div>
    </div>
  )
}

export default Destination