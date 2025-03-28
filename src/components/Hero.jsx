import React from "react";
import "../Hero.css";
import { ArrowBigDown, ArrowBigDownIcon, ArrowDown, ArrowDownAz, ArrowDownLeft, LocateIcon, MapIcon, MapPin, Search } from "lucide-react";
import { IoIosArrowDown } from "react-icons/io";
import { TbCurrencyNaira } from "react-icons/tb";
import { FaRegBuilding } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="hero-bg text-white text-5xl z-20 flex flex-col justify-center px-8 space-y-28">
      <div>
        <h2 className="text-white text-7xl leading-[1.5]">
          <span className="font-semibold">Discover</span> Your Dream <br />
          Residence <span className="font-semibold">With Us</span>
        </h2>
      </div>
      <div className="mt-11 flex items-center gap-6 ml-8">
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
