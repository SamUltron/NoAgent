import { FileText, Info, Search } from "lucide-react";
import React from "react";
import HowCard from "../components/HowCard";

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
    <div className="flex flex-col items-center bg-[#F5F5F5] h-1/2 mt-20 py-20">
      <h2 className="text-6xl font-semibold">How NoAgent Works</h2>
      <p className="text-[#333] max-w-5xl text-center mt-10 text-2xl">
        We've simplified the rental process by removing agents and connecting
        you directly with property owners.
      </p>
      <div className="flex justify-between items-center gap-8 mt-20">
        {cards.map((card) => (
          <HowCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default How;
