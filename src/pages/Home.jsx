import React from "react";
import homeImage from "../assets/Home(White).png";
import Services from "../components/Services";
import Info from "../components/Info";
import Projects from "../components/Projects";

const Home = () => {
  return (
    <div className="flex flex-col overflow-x-hidden">
      {/* Hero Section */}
      <div className="h-[100vh] w-full bg-black text-white flex items-center justify-center">
        <div className="flex flex-col items-center sm:ml-0">
          <img src={homeImage} className="h-[30rem] w-auto max-w-full" />
          <div className="flex gap-4 mt-6">
            <button className="bg-white border-white border-2 hover:bg-black hover:text-white text-black px-5 py-3 rounded-[40px]">
              Explore Now
            </button>
            <button className="hover:bg-white hover:text-black px-5 py-3 rounded-[40px]">
              Connect With Us
            </button>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section id="services">
        <Services />
      </section>

      {/* Info Section */}
      <section id="info">
        <Info />
      </section>

      {/* Projects Section */}
      <section id="projects">
        <Projects />
      </section>
    </div>
  );
};

export default Home;
