import React from 'react'
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <div className='Hero pt-[200px]  pb-20 h-[auto] px-5 sm:px-[50px]  xl:px-[150px] flex flex-wrap md:flex-nowrap items-center justify-between'>
        <div className='lg:w-[50%]'> 
            <h1 className='title tracking-[4px] text-2xl sm:text-3xl lg:text-4xl  text-[#CAD0F2] '>SO, YOU WANT TO TRAVEL TO</h1>
        <h1 className=' font-serif text-[70px] sm:text-[100px] lg:text-[140px]  tracking-[8px] sm:tracking-[10px] xl:tracking-[13px]  text-[#fff] font-[400]'>SPACE</h1>
       <h1 className='text-[#CAD0F2] text-lg font-[300] [line-height: 32px]'>Let's face it; if you want to go to space, you might 
        as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!</h1>
        </div>
        <Link to={'/destination'}>
         <div className='flex items-center justify-center mx-auto mt-10 md:mt-0 homeCircleContainer'>
            <div className='flex items-center justify-center cursor-pointer homeCircle'>
            <h1 className=' font-serif text-xl  sm:text-3xl tracking-[4px]  uppercase text-[#302e2e] font-[300]'>
                Explore</h1>
            </div>
         </div>
         </Link>
    </div>
  )
}

export default Hero