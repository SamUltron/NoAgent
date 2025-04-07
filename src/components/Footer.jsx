import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#F5F5F5] mt-10">
      <div className="flex flex-wrap justify-between p-10">
        <div className="space-y-3 md:w-1/4">
          <h2 className="md:text-3xl text-2xl font-semibold">NoAgent</h2>
          <p className="text-lg  hover:text-[#71717a]">
            Connecting renters directly <br />with landlords, ensuring a <br />transparent,
            cost-effective, <br /> and hassle-free rental <br />experience.
          </p>
        </div>

        <div className="space-y-3 md:w-1/4">
          <h2 className="md:text-3xl text-2xl font-semibold">Quick Links</h2>
          <ul className="text-lg space-y-1">
            <li className=" hover:text-[#71717a]">Home</li>
            <li className=" hover:text-[#71717a]">About Us</li>
            <li className=" hover:text-[#71717a]">Properties</li>
            <li className=" hover:text-[#71717a]">For LandLords</li>
            <li className=" hover:text-[#71717a]">Contact</li>
          </ul>
        </div>

        <div className="space-y-3 md:w-1/4">
          <h2 className="md:text-3xl text-2xl font-semibold">Resources</h2>
          <ul className="text-lg space-y-1">
            <li className=" hover:text-[#71717a]">Rental</li>
            <li className=" hover:text-[#71717a]">Tenant Rights</li>
            <li className=" hover:text-[#71717a]">Landlord Resources</li>
            <li className=" hover:text-[#71717a]">FAQs</li>
            <li className=" hover:text-[#71717a]">Blog</li>
          </ul>
        </div>

        <div className="space-y-3 md:w-1/4">
          <h2 className="md:text-3xl text-2xl font-semibold">Legal</h2>
          <ul className="text-lg space-y-1">
            <li className=" hover:text-[#71717a]">Terms of Service</li>
            <li className=" hover:text-[#71717a]">Privacy Policy</li>
            <li className=" hover:text-[#71717a]">Cookie Policy</li>
            <li className=" hover:text-[#71717a]">Disclaimer</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="text-lg pt-10 md:text-left text-center">© 2025 NoAgent Accommodation Rental. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
