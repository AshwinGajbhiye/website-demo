import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../assets/InfyTeck-Logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="bg-black text-white flex justify-between items-center px-10 py-2 fixed top-0 left-0 w-full z-50">
      <img src={logo} alt="InfyTeck Logo" className="h-[5rem]" />

      <div className="">
        <RxHamburgerMenu className="md:hidden" />
        <ul className="hidden md:flex gap-8 font-medium text-[14px]">
          <li className="hover:text-black hover:bg-white px-4 py-2 rounded-[50rem]"><Link to="/">Home</Link></li>
          <li className="hover:text-black hover:bg-white px-4 py-2 rounded-[50rem]"><Link to="/services">Services</Link></li>
          <li className="hover:text-black hover:bg-white px-4 py-2 rounded-[50rem]">Projects</li>
          <li className="hover:text-black hover:bg-white px-4 py-2 rounded-[50rem]">Testimonials</li>
          <li className="hover:text-black hover:bg-white px-4 py-2 rounded-[50rem]"><Link to="/contact">Contact Us</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
