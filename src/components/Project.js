import React from "react";
import movieApp from "../assets/projects/movieApp.png";
import kanban from "../assets/projects/kanban-clone.png"

export const Project = () => {
  return (
    <div
      name="project"
      className="bg-[#0a192f] w-full md:h-screen text-gray-300"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Projects
          </p>
          <p className="py-6">Check Out my recent Work</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          
          <div
            style={{ backgroundImage: `url(${movieApp})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="flex flex-col opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                MovieApp Application
              </span>
              <span className="text-xl font-medium text-white">Frontend project</span>
              <div className="pt-8 text-center">
                <a
                  href="https://saravanakumaran-movieapp.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Saravanakumaran08011995/movieApp"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${kanban})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="flex flex-col opacity-0 group-hover:opacity-100">
            <span className="text-2xl font-bold text-white tracking-wider">
                Kanban Application
              </span>
              <span className="text-xl font-medium text-white">Frontend project</span>
              <div className="pt-8 text-center">
                <a
                  href="https://saravanakumaran-kanban-clone.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Saravanakumaran08011995/kanban-clone"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
