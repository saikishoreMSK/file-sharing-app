"use client"
import { File, Shield, Upload } from 'lucide-react'
import React, { useState } from 'react'
import Image from 'next/image'
const SideNav = () => {
    const menuList = [
        {
            id:1,
            name:'Upload',
            icon:Upload,
            path:'/upload'
        },
        {
            id:2,
            name:'Files',
            icon:File,
            path:'/files'
        },
        {
            id:3,
            name:'Upgrade',
            icon:Shield,
            path:'/upgrade'
        },
        
    ]
    const [activeIndex,setActiveIndex] = useState(0);
  return (
    <div className='shadow-sm border-r h-full'>
      <div className='p-5 border-b border-gray-300'>
        <Image src='/logo.svg' width={150} height={100}/>
      </div>
      <div className='flex flex-col float-left w-full'>
        {menuList.map((item,index)=>(
            <button className={`flex gap-2 px-6 py-4 w-full hover:bg-gray-100 text-gray-500
              ${activeIndex===index ? 'bg-blue-50 text-primary':null}`}
            onClick={()=>{setActiveIndex(index)}}>
                <item.icon/>
                <h2>{item.name}</h2>
            </button>
        ))}
      </div>
    </div>
  )
}

export default SideNav
