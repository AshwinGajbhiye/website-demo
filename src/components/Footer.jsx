import React from "react";

// Icons
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black text-white h-full flex flex-col lg:flex-row gap-8 py-8 lg:justify-evenly">
      <div className="flex flex-col items-center lg:items-start">
        <img src="../assets/InfyTeck-Logo.png" className="mb-2" />
        <p className="text-xl">InfyTeck © 2024</p>
        <p className="mb-2">All rights reserved</p>
        <div className="flex justify-center gap-2">
          <FaInstagram />
          <FaFacebook />
          <FaTwitter />
          <FaLinkedin />
        </div>
      </div>

      <div className="hidden lg:flex flex-col w-[11rem]">
        <h3 className="font-bold mb-4">Get in Touch</h3>
        <p className="mb-2">
          Moonshine St. 14/05 Light City, London, United Kingdom
        </p>
        <p>info@infyteck.com</p>
        <p>+44 123 456 7890</p>
      </div>

      <div className="hidden lg:flex flex-col w-[11rem]">
        <h3 className="font-bold mb-4">Learn More</h3>
        <li>About Us</li>
        <li>Our Story</li>
        <li>Projects</li>
        <li>Terms of Use</li>
        <li>Privacy Policy</li>
      </div>

      <div className="flex flex-col lg:w-[20%] items-center">
        <h3 className="font-bold mb-2">Our Newsletter</h3>
        <p className="mb-6 text-center">
          Subscribe to our newsletter to get our news & deals delivered to you.
        </p>
        <div className="flex bg-white rounded-lg ">
          <input className="h-8 rounded-lg text-black pl-2"/>
          <a href="/" className="bg-slate-300 px-4 text-black rounded-lg">Join</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
