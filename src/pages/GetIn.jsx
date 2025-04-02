import React from 'react'
import Touch from '../components/Touch'
import SendMessage from '../components/SendMessage'

const GetIn = () => {
  return (
    <div className='grid grid-cols-2 px-10 place-items-center'>
        <Touch/>
        <SendMessage/>
    </div>
  )
}

export default GetIn