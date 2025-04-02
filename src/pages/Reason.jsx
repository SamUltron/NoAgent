import React from "react";
import ProductList from "../components/ProductList";

const Reason = () => {
  return (
    <div className="bg-white flex flex-col items-center py-20">
      <h2 className="text-6xl font-semibold text-center">Featured Apartments</h2>
      <p className="text-[#333] max-w-5xl text-center mt-10 text-2xl">
      Discover our selection of verified properties available for immediate booking.
      </p>
      <ProductList/>
    </div>
  );
};

export default Reason;
