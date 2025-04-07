import React from 'react'

const UserInfoCard = ({users}) => {
  const {image, name, userDescription, testimony } = users;
  
  return (
    <div className='bg-[#f4f4f4] rounded-md py-10 px-4 flex flex-col space-y-5'>
      <div className='flex items-center md:gap-2 gap-4'>
        <img src={image} alt={name}  height={70} width={70}/>
        <div>
          <h4 className='font-bold text-xl text-[#333]'>{name}</h4>
          <p className='text-lg text-[#71717a]'>{userDescription}</p>
        </div>
      </div>
        <p className='max-w-[400px] text-xl text-[#333]'>"{testimony}"</p>
    </div>
  )
}

export default UserInfoCard