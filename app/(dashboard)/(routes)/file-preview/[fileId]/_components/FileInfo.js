"use client"
import React,{useEffect,useState} from 'react'
import Image from 'next/image'

const FileInfo = ({file}) => {
    const [fileType,setFileType]=useState();
    useEffect(()=>{
        file&&setFileType(file?.fileType.split('/')[0]);
        console.log(fileType)
    },[file])
  return file&&(
    <div className='text-center border bg-gray-200 border-blue-200 flex flex-col justify-center 
    items-center m-4 rounded-md'>
      <Image src={fileType=='image'?file?.fileUrl:'/file.png'}
      width={200} height={200} className='h-[200px] rounded-md object-contain' alt='Image Unavailable'/>
      <div>
        <h2>{file.fileName}</h2>
        <h2 className='text-gray-400 text-[13px]'>{file.fileType}</h2>
      </div>
    </div>
  )
}

export default FileInfo
