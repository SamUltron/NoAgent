import React from "react";
import ChooseCard from "../components/ChooseCard";
import { Calendar, Home, Shield } from "lucide-react";
import "../fade.css"

const chooses = [
{
    id: 1,
    icon: <Shield color="#CBA135" />,
    title: "No Agent Fees",
    description:
      "Save thousands by connecting directly with property owners.",
  },
  {
    id: 2,
    icon: <Shield color="#CBA135" />,
    title: "Verified Listings",
    description:
      "Every property is checked for authenticity to prevent scams.",
  },
  {
    id: 3,
    icon: <Calendar color="#CBA135" />,
    title: "Instant Booking",
    description:
      "Secure your new home immediately",
  },
  {
    id: 4,
    icon: <Home color="#CBA135" />,
    title: "Wide Selection",
    description:
      "Access properties that match your exact needs.",
  }
];

const Choose = () => {
  return (
    <div className="flex flex-col items-center bg-[#F5F5F5] h-1/2 mt-20 py-20 px-10">
      <h2 className="md:text-6xl text-5xl text-center font-semibold">Why Choose NoAgent?</h2>
      <p className="text-[#333] max-w-5xl text-center mt-10 text-xl md:text-2xl">
      We're revolutionizing the rental market by eliminating unnecessary costs and streamlining
      the process.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-8 mt-20 px-2 fade-in-from-ground">
        {chooses.map((choose) => (
          <ChooseCard key={choose.id} choose={choose} />
        ))}
      </div>
    </div>
  );
};

export default Choose;
