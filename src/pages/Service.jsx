import React from "react";
import { IoBrushOutline } from "react-icons/io5";
import { BsCodeSlash, BsCameraVideo, BsBrush } from "react-icons/bs"; // Imported BsBrush
import webDesignImg from "../assets/web_show_1.png";
import webDesignImg2 from "../assets/web_design_2.png";
import webDevelopmentImg from "../assets/cara_dev.png";
import webDevelopmentImg2 from "../assets/Tour_dev.png";
import webDevelopmentImg4 from "../assets/panet_dev.jpg";
import logoDesignImg1 from "../assets/InfyTeck-Logo.png"; // Add appropriate image imports
import logoDesignImg2 from "../assets/Tour_dev.png"; // Add appropriate image imports

const Service = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 py-10 mt-[6rem] w-full px-8">
      {/* Web Design Section */}
      <div className="bg-zinc-900 p-8 rounded-lg shadow-lg max-w-7xl w-full mb-10 ">
        <div className="flex justify-center items-center gap-4 mb-8 w-full text-white">
          <h1 className="text-4xl font-bold ">Web Design</h1>
          <IoBrushOutline className="text-5xl" />
        </div>

        <div className="flex bg-white p-8 rounded-lg shadow-lg w-full gap-12 flex-col items-center lg:flex-row lg:justify-center">
          <div className="flex flex-col gap-6 w-full lg:w-[45%]">
            <h2 className="text-3xl font-semibold mb-6">
              Services that we provide in web design
            </h2>
            <ul className="list-disc pl-5 text-lg text-gray-700 space-y-2 flex flex-col gap-2">
              <li className="pl-2">
                Custom Design: Tailored visual design that aligns with your
                brand identity.
              </li>
              <li className="pl-2">
                Responsive Layouts: Ensuring the website looks great on all
                devices, whether it's a mobile, tablet, or desktop.
              </li>
              <li className="pl-2">
                User Experience (UX): Focused on creating an intuitive and
                engaging user experience for your visitors.
              </li>
              <li className="pl-2">
                UI Design: Visually appealing interface with easy navigation to
                enhance user satisfaction.
              </li>
              <li className="pl-2">
                Performance Optimization: Fast loading times and smooth
                interactions for a better overall experience.
              </li>
            </ul>
          </div>

          <div className="w-[90%] lg:w-[45%]">
            <img
              src={webDesignImg2}
              alt="Web Design"
              className="w-full h-auto rounded-lg shadow-md"
            />
            <img
              src={webDesignImg}
              alt="Web Design"
              className="w-full h-auto rounded-lg shadow-md translate-x-10 -translate-y-40"
            />
          </div>
        </div>
      </div>

      {/* Web Development Section */}
      <div className="bg-zinc-900 p-8 rounded-lg shadow-lg max-w-7xl w-full mb-10 ">
        <div className="flex justify-center items-center gap-4 mb-8 w-full text-white">
          <h1 className="text-4xl font-bold">Web Development</h1>
          <BsCodeSlash className="text-5xl" />
        </div>

        <div className="flex bg-white p-8 rounded-lg shadow-lg w-full gap-12 flex-col items-center lg:flex-row ">
          <div className="w-full lg:w-[45%]">
            <div className="relative overflow-hidden rounded-lg mb-4">
              <img
                src={webDevelopmentImg}
                alt="Web Development"
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 right-0 w-full flex items-end justify-end bg-black bg-opacity-50">
                <p className="text-white text-2xl font-bold px-4 py-2">
                  <a
                    href="http://127.0.0.1:5501/Build-and-Deploy-Ecommerce-Website/index.html"
                    className="hover:underline"
                  >
                    Explore
                  </a>
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg mb-4">
              <img
                src={webDevelopmentImg2}
                alt="Web Development"
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 right-0 w-full flex items-end justify-end bg-black bg-opacity-50">
                <p className="text-white text-2xl font-bold px-4 py-2">
                  <a
                    href="https://tourbuddy-d6zy.onrender.com/places"
                    className="hover:underline"
                  >
                    Explore
                  </a>
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg">
              <img
                src={webDevelopmentImg4}
                alt="Web Development"
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 right-0 w-full flex items-end justify-end bg-black bg-opacity-50">
                <p className="text-white text-2xl font-bold px-4 py-2">
                  <a
                    href="https://github.com/Anirudh-x/WebSecure"
                    className="hover:underline"
                  >
                    Explore
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[45%] pl-8 flex flex-col gap-6">
            <h2 className="text-3xl font-semibold mb-6">
              Services that we provide in web development
            </h2>
            <ul className="list-disc pl-5 text-lg text-gray-700 space-y-2 flex flex-col gap-2">
              <li className="pl-2">
                Front-End Development: Building the client-side of websites with
                modern technologies like HTML, CSS, and JavaScript frameworks.
              </li>
              <li className="pl-2">
                Back-End Development: Developing the server-side with Node.js,
                PHP, and more.
              </li>
              <li className="pl-2">
                Performance Optimization: Enhancing website speed and
                performance.
              </li>
              <li className="pl-2">
                CMS Customization: Developing CMS platforms like WordPress.
              </li>
              <li className="pl-2">
                API Integration: Integrating third-party services and APIs.
              </li>
              <li className="pl-2">
                Security Implementation: Protecting your website from threats.
              </li>
              <li className="pl-2">
                Maintenance and Support: Ongoing maintenance and updates.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Video Editing Section */}
      <div className="bg-zinc-900 p-8 rounded-lg shadow-lg max-w-7xl w-full mb-10 ">
        <div className="flex justify-center items-center gap-4 mb-8 w-full text-white">
          <h1 className="text-4xl font-bold">Video Editing</h1>
          <BsCameraVideo className="text-5xl" />
        </div>

        <div className="flex bg-white p-8 rounded-lg shadow-lg w-full gap-12 flex-col items-center lg:flex-row">
          <div className="w-full lg:w-[45%] flex flex-col gap-6">
            <h2 className="text-3xl font-semibold mb-6">
              Services that we provide in video editing
            </h2>
            <ul className="list-disc pl-5 text-lg text-gray-700 space-y-2 flex flex-col gap-2">
              <li className="pl-2">Cutting and Trimming: Enhance storytelling.</li>
              <li className="pl-2">Transitions: Smooth scene changes.</li>
              <li className="pl-2">Color Grading: Set the mood with adjustments.</li>
              <li className="pl-2">Sound Editing: Sync and adjust audio.</li>
              <li className="pl-2">Layering and Compositing: Combine layers for effects.</li>
              <li className="pl-2">Text and Titles: Add dynamic text to visuals.</li>
            </ul>
          </div>

          <div className="w-full lg:w-[45%] ">
            <video className="w-full h-auto rounded-lg shadow-md" controls>
              <source src="/assets/video_sample.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>

      {/* Logo Design Section */}
      <div className="bg-zinc-900 p-8 rounded-lg shadow-lg max-w-7xl w-full mb-10 ">
      <div className="flex justify-center items-center gap-4 mb-8 w-full text-white">
        <h1 className="text-4xl font-bold">Logo Design</h1>
        <BsBrush className="text-5xl" />
      </div>
    
      <div className="flex bg-white p-8 rounded-lg shadow-lg w-full gap-12 flex-col items-center lg:flex-row">
        {/* Logos on the left side */}
        <div className="w-full lg:w-[45%] gap-10 ">
          <img
            src={logoDesignImg1}
            alt="Logo Design"
            className="w-full h-auto rounded-lg shadow-md mb-6"
          />
          <img
            src={logoDesignImg2}
            alt="Logo Design"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
    
        {/* Content on the right side */}
        <div className="w-full lg:w-[45%] flex flex-col gap-6">
          <h2 className="text-3xl font-semibold mb-6">
            Services that we provide in logo design
          </h2>
          <ul className="list-disc pl-5 text-lg text-gray-700 space-y-2 flex flex-col gap-2">
            <li className="pl-2">
              Custom Logos: Unique, personalized logos that represent your
              brand identity.
            </li>
            <li className="pl-2">
              Branding: Ensure consistent use across platforms.
            </li>
            <li className="pl-2">
              Vector Design: High-quality, scalable logos that maintain
              clarity at any size.
            </li>
            <li className="pl-2">
              Typography: Custom typography to complement the logo.
            </li>
            <li className="pl-2">
              Icon Design: Accompanying icons for additional branding needs.
            </li>
          </ul>
        </div>
      </div>
    </div>
    
    </div>
  );
};

export default Service;
