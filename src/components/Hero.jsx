import React from "react";
import "../Hero.css";
import { MapPin, Search } from "lucide-react";
import { IoIosArrowDown } from "react-icons/io";
import { TbCurrencyNaira } from "react-icons/tb";
import { FaRegBuilding } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="hero-bg h-screen md:h-[80vh] text-white text-5xl flex flex-col justify-center px-8 space-y-28 absolute -z-10">
      <div>
        <h2 className="text-white md:text-7xl  leading-[1.2]">
          <span className="font-semibold">Discover</span> Your Dream <br />
          Residence <span className="font-semibold">With Us</span>
        </h2>
      </div>
      <div className="mt-11 flex items-center gap-6 md:ml-5">
        <div className="flex gap-4 items-center">
          <MapPin className="" size={30}/>
          <p className="text-white text-xl">Location</p>
          <IoIosArrowDown size={25} />
          <div className="h-12 border bg-white"></div>
        </div>
        <div className="flex gap-4 items-center">
        <TbCurrencyNaira className="" size={30}/>
          <p className="text-white text-xl">Price</p>
          <IoIosArrowDown size={25} />
          <div className="h-12 border bg-white"></div>
        </div>
        <div className="flex gap-4 items-center">
        <FaRegBuilding className="" size={30}/>
          <p className="text-white text-xl">Type</p>
          <IoIosArrowDown size={25} />
          <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center">
            <Search color="black"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
