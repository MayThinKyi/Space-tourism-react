import React, { useEffect, useState } from 'react'
import { technology } from '../data/data'

const Technology = () => {
    const [technologyId,settechnologyId]=useState(0);
    const [data,setData]=useState([])
    useEffect(()=>{
     setData(technology[technologyId]);
    },[technologyId])    
  return (
    <div className=' Technology h-[auto] pt-[100px] sm:pt-[200px]  pb-[100px] xl:pb-[200px] ps-5 sm:ps-[50px]  xl:ps-[100px] gap-10 flex flex-wrap md:flex-nowrap  justify-between'>
        <div className='order-2 md:order-1 w-[100%] TechnologyMt  sm:mt-[350px] md:mt-0 md:w-[60%]'> 
            <h1 className='title mb-8 tracking-[4px] text-2xl sm:text-3xl lg:text-3xl  text-[#fff] '>
              <span className='text-[#54575E] font-bold'>03 </span>
              SPACE LAUNCH 101
              </h1>
              <div className='flex justify-center lg:justify-start flex-wrap md:flex-nowrap gap-8 sm:gap-10'>
          <div className='flex flex-row mx-auto  md:flex-col gap-5 sm:gap-10'>
                {technology?.map((item,index)=>{
                    return <div key={index}  onClick={()=>settechnologyId(index)} className={ `cursor-pointer font-serif text-4xl  font-[300] border rounded-full w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] flex justify-center items-center ${technologyId==index ? 'bg-[#fff] text-[#000]' :''} ` }>{index}</div>
                })}
          </div>
          <div >
          <h1 className='title mt-5  text-[20px]    tracking-[3px]  text-[#CAD0F2] font-[400]'>
          THE TERMINOLOGY...
          </h1>
          <h1 className=' font-serif mb-3 text-[40px]  lg:text-[50px]   tracking-[3px]  text-[#fff] font-[400]'>
            {data?.name}
          </h1>

          <h1 className='text-[#CAD0F2] pb-14  text-lg font-[300] [line-height: 32px]'>
        {data?.description}
        </h1>
          </div>
          </div>       
        </div>
         <div className='w-[100%] md:w-[40%] order-1 md:order-2  mx-auto mt-10 md:mt-0 '>
        <img className=' object-cover mx-auto w-[100%] md:w-[40%] absolute  right-0 md:bottom-[100px]
         lg:bottom-0 xs:h-[300px] sm:h-[345px] lg:h-[445px]' alt={data?.name} src={data?.image} />       
         </div>
    </div>
  )
}

export default Technology