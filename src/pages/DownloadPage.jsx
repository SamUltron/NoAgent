import React from 'react'
import DownloadSide from '../components/DownloadSide'
import NAImage from '../components/NAImage'

const DownloadPage = () => {
  return (
    <div className='bg-black flex items-center justify-between px-5 py-20 md:gap-x-4 gap-x-10'>
        <DownloadSide/>
        <NAImage/>
    </div>
  )
}

export default DownloadPage