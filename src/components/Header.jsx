import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../assets/InfyTeck-Logo.png";

function Header() {
  return (
    <div className="bg-black text-white flex justify-between items-center px-10 py-2">
      <img src={logo} alt="InfyTeck Logo" className="h-[5rem]" />

      <div className="">
      <RxHamburgerMenu className="md:hidden" />
        <ul className="hidden md:flex gap-8 font-medium text-[14px]">
          <li className="hover:text-black hover:bg-white px-4 py-2 rounded-[50rem]">Home</li>
          <li className="hover:text-black hover:bg-white px-4 py-2 rounded-[50rem]">Services</li>
          <li className="hover:text-black hover:bg-white px-4 py-2 rounded-[50rem]">Projects</li>
          <li className="hover:text-black hover:bg-white px-4 py-2 rounded-[50rem]">Testimonials</li>
          <li className="hover:text-black hover:bg-white px-4 py-2 rounded-[50rem]">Contact Us</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
