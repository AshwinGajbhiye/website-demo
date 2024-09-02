import React from "react";
import infylogo from '../assets/InfyTeck-Logo.png'
// Icons
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <section className="cta bg-black">
        <div className="container ml-[120px] max-w-[1255px] flex py-16 border-b border-cadet-blue-crayola_a20">
          <h2 className="text-white text-3xl font-semibold mb-6 max-w-lg">
            Join our community by using our services and grow your business.
          </h2>
          <a
            href="#"
            className="btn ml-[550px] h-12 w-40 text-center bg-violet-600 text-white py-3 px-6 rounded-3xl"
          >
            Try it For Free
          </a>
        </div>
      </section>
      <div className="bg-black text-white h-full flex flex-col lg:flex-row gap-8 py-8 lg:justify-evenly pb-20">
        <div className="flex flex-col items-center lg:items-start text-zinc-300">
          <img src={infylogo} className="mb-2 w-[180px] h-[24] text-center" />
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
          <h3 className="font-semibold text-xl mb-4">Get in Touch</h3>
          <p className="mb-2 text-zinc-300">
            Moonshine St. 14/05 Light City, London, United Kingdom
          </p>
          <p className="text-zinc-300">info@infyteck.com</p>
          <p className="text-zinc-300">+44 123 456 7890</p>
        </div>

        <div className="hidden lg:flex flex-col w-[11rem]">
          <h3 className="font-semibold text-xl mb-4">Learn More</h3>
          <ul className="text-zinc-300">
            <li>About Us</li>
            <li>Our Story</li>
            <li>Projects</li>
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="flex flex-col lg:w-[20%] items-center">
          <h3 className="font-semibold text-xl mb-2">Our Newsletter</h3>
          <p className="mb-6 text-center text-zinc-300">
            Subscribe to our newsletter to get our news & deals delivered to
            you.
          </p>
          <div className="flex bg-white rounded-lg text-sm ">
            <input className="h-10 rounded-lg text-black pl-2" placeholder="Email Address" />
            <a href="/" className=" bg-violet-500 px-4 text-white rounded-lg py-2">
              Join
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
