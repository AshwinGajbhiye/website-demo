import React from "react";
import { CgWebsite } from "react-icons/cg";

const Services = () => {
  return (
    <div className="h-full w-full bg-white flex flex-col items-center my-[10rem]">
      <div className="flex justify-center text-center font-semibold text-xl w-[80%] sm:text-3xl">
        <h1>
          The services we offer, are specifically designed to meet your needs.
        </h1>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
        <div className="border-black border-4 rounded-3xl w-[20rem] h-[20rem] flex flex-col items-center mt-10">
          <CgWebsite className="w-14 h-14 mt-8" />
          <h1 className="font-bold text-xl mt-4">Web Development</h1>
          <p className="text-center mt-4 w-[85%]">
            Enhance your online presence with our web development services. We
            build robust, scalable websites tailored to your business needs.
          </p>
        </div>

        <div className="border-black border-4 rounded-3xl w-[20rem] h-[20rem] flex flex-col items-center mt-10">
          <CgWebsite className="w-14 h-14 mt-8" />
          <h1 className="font-bold text-xl mt-4">Designing</h1>
          <p className="text-center mt-4 w-[85%]">
            Transform your online presence with our expert designing services.
            We create stunning, user friendly designs that captivate and convert
            visitors.
          </p>
        </div>

        <div className="border-black border-4 rounded-3xl w-[20rem] h-[20rem] flex flex-col items-center mt-10">
          <CgWebsite className="w-14 h-14 mt-8" />
          <h1 className="font-bold text-xl mt-4">Video Editing</h1>
          <p className="text-center mt-4 w-[85%]">
            Elevate your brand with our video editing services. We craft engaging, professional videos that captivate audiences and enhance your message.
          </p>
        </div>

        <div className="border-black border-4 rounded-3xl w-[20rem] h-[20rem] flex flex-col items-center mt-10">
          <CgWebsite className="w-14 h-14 mt-8" />
          <h1 className="font-bold text-xl mt-4">Socail Media Handling</h1>
          <p className="text-center mt-4 w-[85%]">Boost your brand with social media. We make eye catching, memorable Profiles that help your business stand out.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
