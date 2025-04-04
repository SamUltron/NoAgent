import React from 'react'
import face from "../assets/Button.png"
import twitter from "../assets/Button (1).png"
import insta from "../assets/Button (2).png"
import { LuMapPin, LuPhone } from 'react-icons/lu'
import { MdOutlineMail } from 'react-icons/md'

const Touch = () => {
  return (
        <div className='flex flex-col space-y-8'>
            <h2 className='text-4xl font-bold'>Get In Touch</h2>
            <p className='text-[#71717a]'>Have questions about NoAgent? Our team is here to help you find your <br /> perfect home without agent fees.</p>
            <ul className='list-none space-y-4'>
                <li className='flex items-center gap-3 text-xl text-[#333]'>
                    <MdOutlineMail color="#CBA135" /> contact@noagent.com
                </li>
                <li className='flex items-center gap-3 text-xl text-[#333]'>
                <LuPhone color="#CBA135"/> +234 (456) 123-4567
                </li>
                <li className='flex items-center gap-2 text-xl text-[#333]'>
                <LuMapPin color="#CBA135"/> 123 Innovation Street, Tech City
                </li>
            </ul>
            <div className='flex items-center gap-5'>
                <img src={face} alt="" className=''/>
                <img src={twitter} alt="" />
                <img src={insta} alt="" />
            </div>
        </div>
  )
}

export default Touch