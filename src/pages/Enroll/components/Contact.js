import C from "./image/Grid.png";
import React from "react";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineGlobal } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { SiIssuu } from "react-icons/si";

function Contact() {
  return (
    <section className="min-h-screen bg-white  lg:flex">
      <div className="flex flex-col justify-center w-full p-8 lg:bg-gray-100 lg:px-12 xl:px-32 lg:w-1/2">
        <h1 className="text-2xl font-semibold text-gray-800 capitalize  lg:text-3xl">
          take the first step.
        </h1>
        <p className="mt-4 text-gray-500 ">Find more about us</p>
        <div className="mt-0 md:mt-8">
          <h3 className="font-medium text-gray-600 text-left">Find us</h3>
          <div className="flex align-top pt-0 -mx-1.5 ">
            <Link
              img={
                <AiOutlineWhatsApp className=" h-7 w-7 ml-0 hover:text-[#128c7e]" />
              }
            />
            <Link
              img={<AiOutlineGlobal className="h-7 w-7 hover:text-[#0e82bd]" />}
            />
            <Link
              img={
                <AiOutlineInstagram className="h-7 w-7 hover:text-[#cc39a2]" />
              }
            />
            <Link img={<SiIssuu className="h-7 w-7 hover:text-[#f26f61]" />} />
          </div>
        </div>
      </div>
      <div
        className="flex flex-col justify-center w-full p-8 lg:px-12 xl:px-32 lg:w-1/2 bg-center"
        style={{
          backgroundImage: `url(${C})`,
        }}
      ></div>
    </section>
  );
}
export default Contact;

const Link = ({ img }) => {
  return (
    <div className="flex flex-col pl-2 items-center space-y-3 text-center hover:cursor-pointer hover:scale-105 duration-200 pb-10">
      <span
        className="inline-block  text-gray-400 h-7 text-left w-7 rounded-full "
        href="/"
      >
        {img}
      </span>
    </div>
  );
};

// from-white via-[#0e82bd] to-blue-500
