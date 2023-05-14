import React, { useContext, useEffect } from 'react'
import logo from '../assets/logo.svg'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import {AiOutlineMenu} from 'react-icons/ai'
import { SidebarContext } from '../contexts/AppContext'
const Navbar = () => {
  const location=useLocation();

  const checkActiveRoute=(route)=>{
   if(location.pathname==route){
    return true;
   }else{
    return false;
   }
  }
  const links=[
    {id:'00',title:'Home',link:'/'},
    {id:'01',title:'Destination',link:'/destination'},
    {id:'02',title:'Crew',link:'/crew'},
    {id:'03',title:'Technology',link:'/technology'},
  ]
  const {sideBarState,setSideBarState}=useContext(SidebarContext)
    return (

    <div className='absolute top-0 left-0 right-0 flex items-center justify-between px-8 py-10 lg:px-14 Navbar'>
       <Link to={'/'}>
       <img src={logo} alt='logo' />
       </Link>
        <div className='flex sm:hidden'>
          {!sideBarState && <AiOutlineMenu  onClick={()=>setSideBarState(true)} size={28} />
}
        </div>
        
        <ul className='hidden sm:flex items-center gap-8 lg:gap-12 lg:px-[120px] lg:py-[38px] '>
          {links?.map((item,index)=>{
            return <Link to={item?.link} key={index} className='relative' >
              <li className='  text-lg tracking-[2px] uppercase '>
              <span className='mr-1 font-bold md:mr-3 title'> {item?.id}</span>
               {item?.title}
               </li>
               <span className={` ${checkActiveRoute(item?.link) ?' absolute bottom-[-34px] w-[100%] h-[2px] bg-[#fff] ':
               ' '} `}></span>
               </Link>
          })}
        </ul>
    </div>
  )
}

export default Navbar