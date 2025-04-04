import React from 'react'
import { FaAppStoreIos, FaGooglePlay } from 'react-icons/fa'

const DownloadSide = () => {
  return (
    <div className='flex flex-col justify-center space-y-6'>
        <h1 className='text-white text-3xl font-semibold'>Download the NoAgent App</h1>
        <p className='text-white text-md max-w-[600px]'>Get the full experience on your mobile device. Search properties, chat with
        landlords, and manage your rental journey on the go.</p>
        <div className='space-x-3 flex'>
            <button className='bg-white outline-none border-none p-4 rounded-md flex items-center justify-between gap-x-3'><FaAppStoreIos size={30}/> App Store</button>
            <button className='bg-white outline-none border-none p-4 rounded-md flex items-center justify-between gap-x-3'> <FaGooglePlay size={30}/> Google Play</button>
        </div>
    </div>
  )
}

export default DownloadSide