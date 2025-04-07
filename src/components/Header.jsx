import React, { useState } from "react";
import logo from "../assets/Frame 5.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsopen] = useState(false);

  const handHamburger = () => {
    setIsopen((prev) => !prev);
  };

  return (
    <>
      <nav className="bg-[#f5f5f5] py-5 px-8">
        <div className="flex justify-between items-center gap-10">
          <Link to="/">
            <div className="flex items-center justify-center gap-x-3">
              <img src={logo} alt="Logo" />
              <h2 className="font-semibold text-3xl">NoAgent</h2>
            </div>
          </Link>

          <div className="md:text-2xl md:flex items-center justify-center hidden gap-6">
            <a href="#">Feature</a>
            <a href="#" className="whitespace-nowrap">
              How it works
            </a>
            <a href="#">Benefits</a>
          </div>

          <div className="space-x-4 md:flex hidden">
            <Link to="/sign">
              <button className="text-xl font-semibold border border-black rounded-lg py-3 px-6">
                Login
              </button>
            </Link>
            <Link to="/signup">
              <button className="text-xl font-semibold text-white bg-[#CBA135] rounded-lg py-3 px-6 whitespace-nowrap">
                Sign up
              </button>
            </Link>
          </div>

          <div
            className="space-y-1 cursor-pointer md:hidden z-[1000]"
            onClick={handHamburger}
            // style={{
            //   zIndex: 1000, 
            // }}
          >
            <div className="w-6 h-0.5 bg-black"></div>
            <div className="w-6 h-0.5 bg-black"></div>
            <div className="w-6 h-0.5 bg-black"></div>
          </div>

          <div
            className={`fixed right-0 top-0 w-[300px] h-full p-10 space-y-10 text-white text-center bg-[#f5f5f5] ${
              isOpen ? 'block' : 'hidden'
            } pt-24 md:hidden z-[10]`}
          >
            <ul className="flex flex-col justify-between items-center gap-10 mb-32">
              <li onClick={handHamburger}>
                <a href="#" className="text-black text-xl hover:text-[#71717a]">
                  Feature
                </a>
              </li>
              <li onClick={handHamburger}>
                <a href="#" className="text-black text-xl hover:text-[#71717a]">
                  How it works
                </a>
              </li>
              <li onClick={handHamburger}>
                <a href="#" className="text-black text-xl hover:text-[#71717a]">
                  Benefits
                </a>
              </li>
            </ul>

            <div className="flex flex-col gap-5">
              <Link to="/sign">
                <button className="text-xl font-semibold border text-black border-black rounded-lg py-3 px-6 w-full">
                  Login
                </button>
              </Link>

              <Link to="/signup">
                <button className="text-xl font-semibold text-white bg-[#CBA135] rounded-lg py-3 px-6 w-full">
                  Sign up
                </button>
              </Link>
            </div>
          </div>

          {isOpen && (
            <div
              className="fixed inset-0 md:hidden bg-black opacity-50 z-[5]"
              onClick={handHamburger}
            />
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
