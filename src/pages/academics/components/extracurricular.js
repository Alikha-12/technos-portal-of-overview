import React from "react";
import { FaLaptopCode } from "react-icons/fa";

function Extracurriculars() {
  return (
    <section className="bg-[#658864]">
      <div className="container px-6 py-10 mx-auto md:content-center">
        <h1 className="text-3xl font-semibold text-center font-Bebas tracking-[0.25rem] text-white capitalize lg:text-4xl ">
          Extracurriculars
        </h1>
        <div className=" flex-row grid-cols-1 inline-grid">
          <div className="grid  gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
            <Extracurricular
              name="History"
              description={
                "I'm a big history nerd, history always never failed to impress me, my favorite person is Otto von Bismarck and favorite nation is the Austro-Hungarian Empire"
              }
              children={<FaLaptopCode className=" text-[#658864] w-40 h-40" />}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const Extracurricular = ({ name, description, children }) => {
  return (
    <div className="flex flex-col items-center p-6 space-y-3 text-center bg-white rounded-xl hover:cursor-pointer hover:scale-105 duration-200 hover:shadow-[#B7B78A]  hover:shadow-2xl pb-10">
      <span className="inline-block p-3 text-blue-500 rounded-full ">
        {children}
      </span>
      <h1 className="text-2xl font-semibold pt-7 text-[#B7B78A]">{name}</h1>
      <p className="text-[#B7B78A] text-center">{description}</p>
      <a
        href="#"
        className="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500"
      ></a>
    </div>
  );
};

export default Extracurriculars;
