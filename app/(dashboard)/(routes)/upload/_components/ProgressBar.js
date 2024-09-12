import React from 'react'

const ProgressBar = ({progress}) => {
  return (
    <div className='w-full h-4 bg-gray-400 rounded-full'>
      <div className=' bg-primary h-4 rounded-full text-[10px] text-white' style={{width:`${progress}%`}}>
        {`${Number(progress).toFixed(0)}%`}
      </div>
    </div>
  )
}

export default ProgressBar
