import { Download, DownloadIcon } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'

const FileItem = ({file}) => {
  const [password,setPassword] = useState('');
  return file&&(
    <div>
        <div className='p-5 rounded-md flex bg-white flex-col items-center justify-center w-[400px]'>
            <div className='text-center flex gap-3 items-center justify-center flex-col'>
                <h2 className='text-[20px] text-gray-600 '><strong className='text-primary'>{file.userName}</strong> has Shared a file With You.</h2>
                <h2 className='text-[10px] text-gray-400 '>Find File Details Below</h2>
                <DownloadIcon width={150} height={150}
                className='h-[150px] w-[150px] p-5'/>
                {/* <Image src={'/download-file.gif'} width={150} height={150}
                className='h-[150px] w-[150px] p-5'/> */}
                <h2 className='text-[15px] text-gray-500'>{file.fileName} ⚡️ {file.fileType} ⚡️ {(file.fileSize/ (1024 * 1024)).toFixed(2)} MB</h2>
            </div>
      
        {file.password.length>3?<input type='password' 
        onChange={(e)=>setPassword(e.target.value)}
        className='p-2 border rounded-md text-[14px] mt-5 text-center outline-blue-400'
        placeholder='Enter password to Access'/>:null}

        <button href='' className='w-full flex gap-2 p-2 mt-2 bg-primary text-white text-[14px]
        text-center justify-center items-center disabled:bg-gray-300 hover:bg-blue-400 rounded-full'
        onClick={()=>window.open(file?.fileUrl)}
        disabled={file.password!==password} ><Download className='h-4 w-4'/> Download</button>
        <h2 className='text-gray-400 text-[12px]'>*Terms and Condistions Apply</h2>
        </div>
    </div>
  )
}

export default FileItem
