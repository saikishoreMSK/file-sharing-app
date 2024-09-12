import { File, X } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const FilePreview = ({file,removeFile}) => {
  return (
    <div className='flex items-center p-2 gap-2 border-[1px] rounded-sm border-blue-400 bg-blue-50 m-2 justify-between'>
      <div className='flex gap-3'>
        <File width={30} height={30}/>
        <div className='text-left'>
          <h2 className='text-[15px]'>{file.name}</h2>
          <h2 className='text-gray-400 text-sm'>{file.type}/{(file.size/1024/1024).toFixed(2)}MB </h2>
        </div>
      </div>
      <X className='text-red-500 cursor-pointer' onClick={()=> removeFile()}/>
    </div>
  )
}

export default FilePreview
