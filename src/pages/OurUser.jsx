import React from 'react'
import UserInfoCard from '../components/UserInfoCard'
import {users} from "../users.js"

const OurUser = () => {
  return (
    <div className='bg-white flex flex-col items-center py-20'>
      <h2 className="text-6xl font-semibold text-center">What Our Users Say</h2>
      <p className="text-[#333] max-w-5xl text-center mt-10 text-2xl">
      Hear from people who have found their perfect home without paying agent fees.
      </p>
      <div className='grid grid-cols-3 gap-6 mt-10 px-4'>
        {users.map((user) =>(
            <UserInfoCard users={user}/>
        ))}
      </div>
    </div>
  )
}

export default OurUser