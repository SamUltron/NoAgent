import React from 'react'

const ChooseCard = ({choose}) => {
    const {icon, title, description } = choose;
    return (
      <div className='bg-white flex flex-col items-start justify-start space-y-3 p-6 rounded-lg shadow-sm'>
          <div className='bg-[#f5f5f5] rounded-full h-12 w-12 flex items-center justify-center'>
          {icon}
          </div>
          <h3 className='text-2xl font-semibold'>{title}</h3>
          <p className='text-[#71717A] text-2xl max-w-[600px]'>{description}</p>
      </div>
    )
}

export default ChooseCard