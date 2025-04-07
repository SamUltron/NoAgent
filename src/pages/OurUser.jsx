import React from 'react'
import UserInfoCard from '../components/UserInfoCard'
import {users} from "../users.js"

const OurUser = () => {
  return (
    <div className='bg-white flex flex-col items-center py-20 px-10'>
      <h2 className="md:text-6xl text-5xl font-semibold text-center">What Our Users Say</h2>
      <p className="text-[#333] max-w-5xl text-center mt-10 text-xl md:text-2xl">
      Hear from people who have found their perfect home without paying agent fees.
      </p>
      <div className='grid md:grid-cols-3 grid-cols-1 gap-6 mt-10 px-4'>
        {users.map((user) =>(
            <UserInfoCard key={user.id} users={user}/>
        ))}
      </div>
    </div>
  )
}

export default OurUser