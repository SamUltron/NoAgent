import React, { useState } from "react";
import { Mail,  LockKeyhole,    } from "lucide-react";
import AppleLogo from "../assets/Apple Logo.png";
import GoogleLogo from "../assets/Google Logo.png";
import FacebookLogo from "../assets/Facebook Logo.png";
import brandhouse from "../assets/darkhouse.jpeg";
import frame from "../assets/Frame 4.png";

import { useNavigate } from "react-router-dom";

const Signupp = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    role: "renter"
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      navigate("/home"); 
    }, 1500); 
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 bg-[#F5F5F5] h-screen mt-10">
      <div className="relative hidden md:block">
        <img
          src={brandhouse}
          alt="Brandhouse Logo"
          className="absolute top-0 left-0 bottom-0 w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-70" />
        <div className="absolute flex flex-col justify-between items-center gap-y-14 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <img src={frame} alt="" />
          <h1 className="text-sm sm:text-base text-white text-center">
            Find it. Rent it. Love it - No Agents <br /> Needed
          </h1>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center p-6 sm:p-8 lg:p-12 md:max-w-[90%] mx-auto">
        <h1 className="text-2xl font-bold mb-2">Create an Account</h1>
        <p className="text-base mb-4">
          Already have an account?{" "}
          <a className="text-blue-700 text-sm" href="/login">
            Login
          </a>
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
          <div className="flex rounded-xl bg-gray-200 items-center p-2">
            <Mail className="text-gray-600" size={20} />
            <input
              className="bg-gray-200 p-2 w-full text-sm"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
            />
          </div>

          <div className="flex rounded-xl bg-gray-200 items-center p-2">
            <LockKeyhole className="text-gray-600" size={20} />
            <input
              className="bg-gray-200 p-2 w-full text-sm"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
            />
          </div>
          <button
            className="rounded-xl bg-[#CBA135] text-white py-3 mt-5 w-full"
            type="submit"
          >
            {isLoading ? "Signing Up..." : "Sign Up"}
          </button>

          <div className="space-y-3 mt-4">
            <p>I am a:</p>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <label htmlFor="renter">Renter</label>
                <input
                  type="radio"
                  id="renter"
                  name="role"
                  value="renter"
                  checked={formData.role === "renter"}
                  onChange={handleChange}
                  className="h-4 w-4"
                />
              </div>
              <div className="flex items-center gap-2">
                <label htmlFor="landlord">Landlord</label>
                <input
                  type="radio"
                  id="landlord"
                  name="role"
                  value="landlord"
                  checked={formData.role === "landlord"}
                  onChange={handleChange}
                  className="h-4 w-4"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center mt-6 gap-2">
            <div className="bg-black h-[0.9px] flex-1" />
            <span className="text-base">or register with</span>
            <div className="bg-black h-[0.9px] flex-1" />
          </div>

          <div className="flex space-x-10 justify-center items-center mt-4 text-center">
            <a href="">
              <img src={GoogleLogo} alt="Google Logo" />
            </a>
            <a href="">
              <img src={AppleLogo} alt="Apple Logo" />
            </a>
            <a href="">
              <img src={FacebookLogo} alt="Facebook Logo" />
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signupp;