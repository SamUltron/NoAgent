import React from "react";
import "../Hero.css";
import { MapPin, Search } from "lucide-react";
import { IoIosArrowDown } from "react-icons/io";
import { TbCurrencyNaira } from "react-icons/tb";
import { FaRegBuilding } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="hero-bg min-h-[50vh] md:h-[70vh] text-white text-5xl flex flex-col justify-center py-20 px-8 space-y-28 absolute -z-10">
      <div>
        <h2 className="text-white md:text-7xl text-4xl md:leading-[1.2] leading-[1.4] whitespace-nowrap">
          <span className="font-semibold">Discover</span> Your Dream <br />
          Residence <span className="font-semibold">With Us</span>
        </h2>
      </div>
      <div className="mt-11 flex items-center gap-6 md:ml-5 flex-wrap">
        <div className="flex gap-4 items-center">
          <MapPin className="md:h-10 md:w-10 h-6 w-6" />
          <p className="text-white md:text-xl text-lg">Location</p>
          <IoIosArrowDown size={25} />
          <div className="md:h-12 h-8 border border bg-white"></div>
        </div>
        <div className="flex gap-4 items-center">
          <TbCurrencyNaira className="md:h-10 md:w-10 h-6 w-6" />
          <p className="text-white md:text-xl text-lg">Price</p>
          <IoIosArrowDown size={25} />
          <div className="md:h-12 h-8 border bg-white"></div>
        </div>
        <div className="flex gap-4 items-center">
          <FaRegBuilding className="md:h-10 md:w-10 h-6 w-6" />
          <p className="text-white md:text-xl text-lg">Type</p>
          <IoIosArrowDown size={25} />
          <div className="md:h-10 md:w-10 h-7 w-7 rounded-full bg-white flex items-center justify-center">
            <Search color="black" className="md:h-6 md:w-6 h-4 w-4"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
