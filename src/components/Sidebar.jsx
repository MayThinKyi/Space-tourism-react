import React, { useContext } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import {IoMdClose} from 'react-icons/io'
import { Link } from 'react-router-dom'
import { SidebarContext } from '../contexts/AppContext'
const Sidebar = () => {
    const links=[
        {id:'00',title:'Home',link:'/'},
        {id:'01',title:'Destination',link:'/destination'},
        {id:'02',title:'Crew',link:'/crew'},
        {id:'03',title:'Technology',link:'/technology'},
      ]
      const {sideBarState,setSideBarState}=useContext(SidebarContext)

  return (
    <div className='sidebar py-[35px] px-[30px] absolute z-10 top-0 right-0 bottom-0 h-[100%] w-[300px]'>
        <div style={{color:'#D0D6F9'}} className='flex justify-end mb-10 '  >
        <IoMdClose size={50} onClick={()=>setSideBarState(false)}  />
        </div>
        <ul className='flex flex-col'>
        {links?.map((item,index)=>{
            return <Link to={item?.link} key={index} className='relative mb-10' >
              <li className='  text-lg tracking-[3px] uppercase '>
              <span className='mr-3 font-bold title'> {item?.id}</span>
               {item?.title}
               </li>
               </Link>
          })}
        </ul>
    </div>
  )
}

export default Sidebar