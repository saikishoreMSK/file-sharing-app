import React, { useState } from 'react'
import AlertMsg from './AlertMsg';
import FilePreview from './FilePreview';
import ProgressBar from './ProgressBar';

const UploadForm = ({uploadBtnClick,progress}) => {
    const [file,setFile] = useState();
    const [errMsg,setErrMsg] = useState();
    const onFileSelect=(file)=>{
        console.log(file);
        if(file&&file.size>2000000){
            console.log("File size is greater than 2MB")
            setErrMsg("Max file size is 2 MB")
            return;
        }
        setErrMsg(null)
        setFile(file);
    }
  return (
    <div className='text-center'>
        <div class="flex items-center justify-center w-full">
    <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-blue-300 border-dashed rounded-lg cursor-pointer bg-blue-50 hover:bg-blue-100">
        <div class="flex flex-col items-center justify-center pt-5 pb-6">
            <svg class="w-12 h-12 mb-4 text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
            </svg>
            <p class="mb-2 text-lg md:text-2xl text-gray-500"><span class="font-semibold">Click to upload</span> or <strong className='text-primary'>drag</strong> and <strong className='text-primary'>drop</strong></p>
            <p class="text-xs text-gray-500">SVG, PNG, JPG or GIF (MAX SIZE: 2MB)</p>
        </div>
        <input id="dropzone-file" type="file" class="hidden" 
        onChange={(event)=>onFileSelect(event.target.files[0])} />
    </label>
    
</div>
{errMsg?<AlertMsg msg={errMsg} />:null}
{file? <FilePreview file={file} removeFile={()=>setFile(null)}/>:null}

{progress>0? <ProgressBar progress={progress}/>:<button disabled={!file} className='bg-primary text-white p-2 m-5 rounded-full w-[30%] disabled:bg-gray-500'
onClick={()=>uploadBtnClick(file)}>Upload</button>}

      


      {/* <div class="flex items-center justify-center w-full">
    <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
        <div class="flex flex-col items-center justify-center pt-5 pb-6">
            <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
            </svg>
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
            <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
        </div>
        <input id="dropzone-file" type="file" class="hidden" />
    </label>
</div>  */}
    </div>
  )
}

export default UploadForm
