import React from "react";
import homeImage from "../assets/Home(White).png"

const Home = () => {
  return (
    <div className="h-[100vh] w-full bg-black text-white flex items-center justify-center">

      <div className="flex flex-col items-center sm:ml-10">
        <img src={homeImage} className="h-[30rem] w-[60rem]"/>

        <div className="flex gap-4">
          <button className="bg-white border-white border-2 hover:bg-black hover:text-white text-black px-5 py-3 rounded-[40px]">
            Explore Now
          </button>
          <button className="hover:bg-white hover:text-black px-5 py-3 rounded-[40px]">
            Connect With US
          </button>
        </div>
      </div>

    </div>
  );
};

export default Home;
