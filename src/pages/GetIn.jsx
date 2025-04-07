import React from 'react'
import Touch from '../components/Touch'
import SendMessage from '../components/SendMessage'

const GetIn = () => {
  return (
    <div className='grid md:grid-cols-2 grid-cols-1 px-10 py-20 gap-10'>
        <Touch/>
        <SendMessage/>
    </div>
  )
}

export default GetIn