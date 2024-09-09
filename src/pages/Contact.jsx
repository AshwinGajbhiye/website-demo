// src/components/ContactUs.js
import React from "react";
import Swal from 'sweetalert2'

// icons
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "ee106186-8812-4ed4-8414-89ec1bb120fb");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Submitted!",
        text: "Message sent successfully!",
        icon: "success"
      });
    }
  };

  return (
    <div className="h-[100vh] w-full bg-gray-100 flex items-center justify-between px-20 mt-[3rem]">
      <div className="hidden md:flex flex-col gap-10 w-[40%]">
        <h1 className="text-7xl font-bold text-gray-800">Get in Touch</h1>
        <p>
          We’re here to turn your ideas into reality. Whether you’re looking for
          a stunning website, a standout logo, or engaging video content, our
          team of creative experts is ready to help. Have a question or need
          more information about our services? Let’s connect!
        </p>
        <div className="flex gap-4">
          <FaInstagram className="h-[3rem] w-[3rem]"/>
          <FaLinkedin className="h-[3rem] w-[3rem]"/>
          <FaXTwitter className="h-[3rem] w-[3rem]"/>
        </div>
      </div>

      <div className="bg-white p-8 flex flex-col gap-5 rounded-lg shadow-lg w-full md:w-[45%] max-w-2xl mt-[2rem]">
        <h2 className="text-2xl font-bold text-black">
          Here’s how you can reach us:
        </h2>
        <form onSubmit={onSubmit} className="space-y-3">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-gray-700 font-medium">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-gray-700 font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="subject" className="text-gray-700 font-medium">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="text-gray-700 font-medium">
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              className="mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-slate-800 text-white py-3 rounded-md hover:bg-black transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
