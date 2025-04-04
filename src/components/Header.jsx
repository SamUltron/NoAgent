import React, { useState } from "react";
import logo from "../assets/Frame 5.png";

const Header = () => {
  const [isOpen, setIsopen] = useState(false);

    const handHamburger = () =>{
      setIsopen(prev => !prev)
    }

  return (
    <nav className="flex bg-[#f5f5f5] justify-between items-center py-5 px-8">
      <div className="flex items-center justify-center gap-x-3">
        <img src={logo} alt="" />
        <h2 className="font-semibold text-3xl">NoAgent</h2>
      </div>
      <div>
        
      </div>
      <div className="space-x-8 text-2xl md:block hidden">
        <a href="">Feature</a>
        <a href="">How it works</a>
        <a href="">Benefits</a>
      </div>
      <div className="space-x-4 md:block hidden">
        <button className="text-xl font-semibold border border-black rounded-lg py-3 px-6">
          Login
        </button>
        <button className="text-xl font-semibold text-white bg-[#CBA135] rounded-lg py-3 px-6">
          Sign up
        </button>

      </div>
        <div className="space-y-1 cursor-pointer md:hidden z-20" onClick={handHamburger}>
          <div className='w-6 h-0.5 bg-black'></div>
          <div className='w-6 h-0.5 bg-black'></div>
          <div className='w-6 h-0.5 bg-black'></div>
        </div>

        <div className={`fixed right-0 top-0 w-[300px] h-full z-100 p-10 space-y-10 text-white text-center bg-[#f5f5f5] ${isOpen ? 'block' : 'hidden'} pt-24`}>
          <ul className="flex flex-col justify-between items-center gap-10 mb-32">
            <li onClick={handHamburger}>
              <a href="" className="text-black text-xl hover:text-[#71717a]">Feature</a>
            </li>
            <li  onClick={handHamburger}>
              <a href="" className="text-black text-xl hover:text-[#71717a]">How it works</a>
            </li>
            <li  onClick={handHamburger}>
              <a href="#" className="text-black text-xl hover:text-[#71717a]">Benefits</a>
            </li>
          </ul>

          <div className="space-y-6">
            <button className="text-xl font-semibold border text-black border-black rounded-lg py-3 px-6 w-full">
            Login
            </button>
            <button className="text-xl font-semibold text-white bg-[#CBA135] rounded-lg py-3 px-6  w-full">
              Sign up
            </button>
          </div>
        </div>
    </nav>
  );
};

export default Header;
