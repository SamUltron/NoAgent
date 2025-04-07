import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#F5F5F5] mt-10">
      <div className="flex flex-wrap justify-between p-10">
        <div className="space-y-3 md:w-1/4">
          <h2 className="md:text-3xl text-2xl font-semibold">NoAgent</h2>
          <p className="text-lg">
            Connecting renters directly <br />with landlords, ensuring a <br />transparent,
            cost-effective, <br /> and hassle-free rental <br />experience.
          </p>
        </div>

        <div className="space-y-3 md:w-1/4">
          <h2 className="md:text-3xl text-2xl font-semibold">Quick Links</h2>
          <ul className="text-lg space-y-1">
            <li>Home</li>
            <li>About Us</li>
            <li>Properties</li>
            <li>For LandLords</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="space-y-3 md:w-1/4">
          <h2 className="md:text-3xl text-2xl font-semibold">Resources</h2>
          <ul className="text-lg space-y-1">
            <li>Rental</li>
            <li>Tenant Rights</li>
            <li>Landlord Resources</li>
            <li>FAQs</li>
            <li>Blog</li>
          </ul>
        </div>

        <div className="space-y-3 md:w-1/4">
          <h2 className="md:text-3xl text-2xl font-semibold">Legal</h2>
          <ul className="text-lg space-y-1">
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
            <li>Disclaimer</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="text-lg pt-10 md:text-left text-center">© 2025 NoAgent Accommodation Rental. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
