import React, { useState } from "react";
import about_person from "../assets/about-banner.png";
import feature_banner from "../assets/feature-banner.png";
import { FaCheck } from "react-icons/fa6";

const AboutSection = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAccordion = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const accordionData = [
    {
      title: "Professional Design",
      content:
        "Experience exceptional design with our professional services. We craft stunning, functional designs tailored to your needs, elevating your brand and captivating your audience.",
    },
    {
      title: "Top-Notch Support",
      content:
        "Enjoy top-notch support with our dedicated team. We're here to assist you every step of the way, ensuring your needs are met quickly and efficiently.",
    },
    {
      title: "Exclusive Assets",
      content:
        "Unlock the potential of exclusive assets with us. Our unique designs and premium resources give your projects a competitive edge, ensuring you stand out in the market.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-20 pt-20">
      <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center">
        {/* Left Side Image */}
        <div className="w-full lg:w-1/2">
          <img
            src={about_person}
            alt="About"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side Content */}
        <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center lg:ml-10">
          <h2 className="text-sm font-semibold mb-4">Why Choose Us?</h2>
          <p className="text-3xl font-semibold mb-6">
            We bring solutions to make life easier for our clients.
          </p>

          {/* Accordion Section */}
          <ul>
            {accordionData.map((item, index) => (
              <li key={index} className="mb-4 border-b pb-4">
                <div
                  className={`accordion-card ${
                    expandedIndex === index ? "expanded" : ""
                  }`}
                  onClick={() => toggleAccordion(index)}
                >
                  <h3 className="card-title">
                    <button className="accordion-btn flex items-center gap-2 w-full text-left focus:outline-none">
                      <span
                        className={`transition-colors duration-300 text-xl ${
                          expandedIndex === index
                            ? "text-blue-600"
                            : "text-gray-800"
                        }`}
                      >
                        {item.title}
                      </span>
                    </button>
                  </h3>
                  <p
                    className={`accordion-content transition-all duration-500 ease-in-out overflow-hidden pl-6 ${
                      expandedIndex === index
                        ? "max-h-screen opacity-100 pb-5"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    {item.content}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* Feature Section */}
      <div className="container mx-auto px-6 lg:px-16 py-16">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Side Content */}
          <div className="w-full lg:w-1/2 lg:pr-10">
            <p className="text-sm font-semibold text-gray-600" id="feature-label">
              Our Solutions
            </p>
            <h2 className="text-3xl font-bold text-gray-800 mt-4">
              We Simplify Efforts, Maximize Value, and Enhance Your Business Control.
            </h2>
            <p className="text-md text-gray-700 mt-6">
              Our solutions save you both time and money, providing exceptional value for your company. We streamline processes and deliver high-quality results, ensuring your business thrives while minimizing costs and effort. Plus, we give you perfect control of your business.
            </p>

            <ul className="mt-8 space-y-4">
              <li className="flex items-start">
                <div className=" text-sm mr-4 mt-1">
                  <FaCheck />
                </div>
                <span className="text-gray-800 text-sm">
                  Design preview and feedback before starting.
                </span>
                
              </li>
              <li className="flex items-start">
                <div className=" text-sm mr-4 mt-1">
                  <FaCheck />
                </div>
                <span className="text-gray-800">
                  We create stunning animations to bring your website to life.
                </span>
              </li>
              <li className="flex items-start">
                <div className=" text-sm mr-4 mt-1">
                  <FaCheck />
                </div>
                <span className="text-gray-800">
                  We offer instant customer help for all your inquiries.
                </span>
              </li>
              <li className="flex items-start">
                <div className=" text-sm mr-4 mt-1">
                <FaCheck />
                </div>
                <span className="text-gray-800">
                  We provide weekly updates on project progress.
                </span>
              </li>
            </ul>
          </div>

          {/* Right Side Image */}
          <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
            <img
              src={feature_banner}
              alt="Feature banner"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
