import React from "react";

const Projects = () => {
  return (
    <div className="h-full w-full flex flex-col items-center gap-10 my-10">
      <h1 className="font-semibold text-[50px]">Why Choose Us</h1>

      <div className="flex flex-col lg:flex-row gap-x-40 ">
        <div className="flex justify-center">
          <img src="https://picsum.photos/400" className="rounded-xl" />
        </div>

        <div className="flex flex-col text-center gap-5 my-8">
          <h1 className="font-semibold text-[26px] lg:w-[25rem]">
            We bring solutions to make life easier for our clients.
          </h1>

          <div className="grid justify-center gap-2 text-[18px]">
            <li>Speciality 1</li>
            <li>Speciality 2</li>
            <li>Speciality 3</li>
          </div>
        </div>
      </div>

      <hr className="h-0.5 w-full bg-black" />

      <div className="flex flex-col gap-8">
        <h1 className="font-semibold text-[25px] text-center">
          Check out some of our awesome projects with creative ideas and great
          design.
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 text-white">
          <div className="flex flex-col bg-slate-800 items-center text-center p-8 m-4 gap-4 rounded-lg">
            <img
              src="https://picsum.photos/400"
              className="h-[16rem] w-[16rem] rounded-3xl"
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
              totam inventore deserunt quas est aliquam temporibus reiciendis
            </p>
          </div>

          <div className="flex flex-col bg-slate-800 items-center text-center p-8 m-4 gap-4 rounded-lg">
            <img
              src="https://picsum.photos/400"
              className="h-[16rem] w-[16rem] rounded-3xl"
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
              totam inventore deserunt quas est aliquam temporibus reiciendis
            </p>
          </div>

          <div className="flex flex-col bg-slate-800 items-center text-center p-8 m-4 gap-4 rounded-lg">
            <img
              src="https://picsum.photos/400"
              className="h-[16rem] w-[16rem] rounded-3xl"
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
              totam inventore deserunt quas est aliquam temporibus reiciendis
            </p>
          </div>

          <div className="flex flex-col bg-slate-800 items-center text-center p-8 m-4 gap-4 rounded-lg">
            <img
              src="https://picsum.photos/400"
              className="h-[16rem] w-[16rem] rounded-3xl"
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
              totam inventore deserunt quas est aliquam temporibus reiciendis
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
