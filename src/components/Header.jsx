import React from 'react'
import logo from "../assets/Frame 5.png"

const Header = () => {
  return (
    <nav className='flex bg-[#f5f5f5] justify-between items-center py-5 px-8'>
        <div className="flex items-center justify-center gap-x-3">
          <img src={logo} alt="" />
            <h2 className='font-semibold text-3xl'>NoAgent</h2>
        </div>
        <div className='space-x-8 text-2xl'>
            <a href="">Feature</a>
            <a href="">How it works</a>
            <a href="">Benefits</a>
        </div>
        <div className='space-x-4'>
            <button className='text-xl font-semibold border border-black rounded-lg py-3 px-6'>Login</button>
            <button className='text-xl font-semibold text-white bg-[#CBA135] rounded-lg py-3 px-6'>Sign up</button>
        </div>
    </nav>
  )
}

export default Header