import { FileText, Info, Search } from "lucide-react";
import React from "react";
import HowCard from "../components/HowCard";
import "../fade.css"

const cards = [
  {
    id: 1,
    icon: <Search color="#CBA135" />,
    title: "Search & Filter",
    description:
      "Browse verified listings by location, price, and preferences without any hidden fees.",
  },
  {
    id: 2,
    icon: <Info color="#CBA135" />,
    title: "Chat Directly",
    description:
      "Connect with landlords instantly - no middlemen, no agent fees, just straightforward communication.",
  },
  {
    id: 3,
    icon: <FileText color="#CBA135" />,
    title: "Sign Digital Leases",
    description:
      "Complete the entire rental process online with secure payments and paperless agreements.",
  },
];
const How = () => {
  return (
    <div className="flex flex-col items-center bg-[#F5F5F5] h-1/2 mt-20 relative z-0 py-20">
      <h2 className="md:text-6xl text-5xl text-center font-semibold">How NoAgent Works</h2>
      <p className="text-[#333] max-w-5xl text-center mt-10 md:text-2xl text-xl">
        We've simplified the rental process by removing agents and connecting
        you directly with property owners.
      </p>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-8 mt-20 px-2 fade-in-from-ground relative z-0">
        {cards.map((card) => (
          <HowCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default How;
