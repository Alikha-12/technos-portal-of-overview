import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import { TbKarate } from "react-icons/tb";
import { FaVolleyballBall } from "react-icons/fa";
import { GiMusicalNotes } from "react-icons/gi";
import { IoMdJournal } from "react-icons/io";
import { MdCameraRoll } from "react-icons/md";
import { BsFillFlagFill } from "react-icons/bs";
import { VscBroadcast } from "react-icons/vsc";
import { GiMaterialsScience } from "react-icons/gi";
import { ImNewspaper } from "react-icons/im";
import { RiBasketballFill } from "react-icons/ri";
import { FaFutbol } from "react-icons/fa";

function Extracurriculars() {
  return (
    <section className="bg-[#0e82bd]">
      <div className="container px-6 py-10 mx-auto md:content-center">
        <h1 className="text-3xl font-semibold text-center font-Bebas tracking-[0.25rem] text-white capitalize lg:text-4xl ">
          Extracurriculars
        </h1>
        <div className=" flex-row grid-cols-1 inline-grid">
          <div className="grid  gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
            <Extracurricular
              name="IT"
              description={
                "Offering a dynamic and challenging experience for students passionated with computer science and technology."
              }
              children={<FaLaptopCode className=" text-[#0e82bd] w-40 h-40" />}
            />
            <Extracurricular
              name="Volley"
              description={
                "Provides opportunities for students to develop their coordination, teamwork, and sportsmanship."
              }
              children={
                <FaVolleyballBall className=" text-[#0e82bd] w-40 h-40" />
              }
            />
            <Extracurricular
              name="Rebana"
              description={
                "Provides opportunities for students to learn and perform traditional drumming and percussion music."
              }
              children={
                <GiMusicalNotes className=" text-[#0e82bd] w-40 h-40" />
              }
            />
            <Extracurricular
              name="Journalistic"
              description={
                "Offering opportunities for students to develop their writing and reporting skills, explore different forms of media."
              }
              children={<IoMdJournal className=" text-[#0e82bd] w-40 h-40" />}
            />
            <Extracurricular
              name="Theatre"
              description={
                "Provides opportunities for students to explore the world of acting, stagecraft, and performance."
              }
              children={<MdCameraRoll className=" text-[#0e82bd] w-40 h-40" />}
            />
            <Extracurricular
              name="PABRASMADA"
              description={
                "Provide students with an opportunity to develop their discipline, leadership skills and patriotism."
              }
              children={
                <BsFillFlagFill className=" text-[#0e82bd] w-40 h-40" />
              }
            />
            <Extracurricular
              name="Broadcasting"
              description={
                "Provide opportunities for students to develop their communication skills, and gain hands-on experience in radio broadcasting."
              }
              children={<VscBroadcast className=" text-[#0e82bd] w-40 h-40" />}
            />
            <Extracurricular
              name="MIPA"
              description={
                "Provide opportunities for students to explore and expand their understanding of these fields outside of the traditional classroom setting. "
              }
              children={
                <GiMaterialsScience className=" text-[#0e82bd] w-40 h-40" />
              }
            />
            <Extracurricular
              name="KTI"
              description={
                "Students can learn about the scientific method, which is a systematic approach to conducting research and collecting data."
              }
              children={<ImNewspaper className=" text-[#0e82bd] w-40 h-40" />}
            />
            <Extracurricular
              name="Basket"
              description={
                "Provide opportunities for students to develop their skills, teamwork, and leadership abilities in the sport of basketball."
              }
              children={
                <RiBasketballFill className=" text-[#0e82bd] w-40 h-40" />
              }
            />
            <Extracurricular
              name="Karate"
              description={
                "Helping students to develop their physical fitness, discipline, focus, and self-defense skills."
              }
              children={<TbKarate className=" text-[#0e82bd] w-40 h-40" />}
            />
            <Extracurricular
              name="Futsal"
              description={
                "Providing a fun, challenging, and rewarding experience for students who are passionate about soccer"
              }
              children={<FaFutbol className=" text-[#0e82bd] w-40 h-40" />}
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
      <h1 className="text-2xl font-semibold pt-7 text-[#0e82bd]">{name}</h1>
      <p className="text-[#0e82bd] text-center">{description}</p>
      <a
        href="#"
        className="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500"
      ></a>
    </div>
  );
};

export default Extracurriculars;
