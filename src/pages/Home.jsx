import React from "react";

const Home = () => {
  return (
    <div className="h-[100vh] w-full bg-black text-white flex items-center justify-center sm:justify-start">

      <div className="flex flex-col items-center sm:items-start sm:ml-10">
        <h1 className="text-[8rem] font-semibold">InfyTeck</h1>
        <h3 className="">From Concept To Creation</h3>

        <div className="mt-[5rem] flex gap-4">
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
