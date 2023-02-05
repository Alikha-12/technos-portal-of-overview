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
                "Students pursue their passion in Technology with creativity"
              }
              children={<FaLaptopCode className=" text-[#0e82bd] w-40 h-40" />}
            />
            <Extracurricular
              name="Volley"
              description={"Students build teamwork skill while playing volley"}
              children={
                <FaVolleyballBall className=" text-[#0e82bd] w-40 h-40" />
              }
            />
            <Extracurricular
              name="Rebana"
              description={"Students play traditional instrument"}
              children={
                <GiMusicalNotes className=" text-[#0e82bd] w-40 h-40" />
              }
            />
            <Extracurricular
              name="Journalistic"
              description={"Students write like journalist"}
              children={<IoMdJournal className=" text-[#0e82bd] w-40 h-40" />}
            />
            <Extracurricular
              name="Theatre"
              description={"Students plays a drama"}
              children={<MdCameraRoll className=" text-[#0e82bd] w-40 h-40" />}
            />
            <Extracurricular
              name="PABRASMADA"
              description={"Students learns to march"}
              children={
                <BsFillFlagFill className=" text-[#0e82bd] w-40 h-40" />
              }
            />
            <Extracurricular
              name="Broadcasting"
              description={"Students will pre-record for Suara Muslim radio"}
              children={<VscBroadcast className=" text-[#0e82bd] w-40 h-40" />}
            />
            <Extracurricular
              name="MIPA"
              description={"Students will learn Math & Science"}
              children={
                <GiMaterialsScience className=" text-[#0e82bd] w-40 h-40" />
              }
            />
            <Extracurricular
              name="KTI"
              description={"Students build teamwork skill while playing volley"}
              children={<ImNewspaper className=" text-[#0e82bd] w-40 h-40" />}
            />
            <Extracurricular
              name="Basket"
              description={"Students build teamwork skill while playing volley"}
              children={
                <RiBasketballFill className=" text-[#0e82bd] w-40 h-40" />
              }
            />
            <Extracurricular
              name="Karate"
              description={"Students build teamwork skill while playing volley"}
              children={<TbKarate className=" text-[#0e82bd] w-40 h-40" />}
            />
            <Extracurricular
              name="Futsal"
              description={"Students build teamwork skill while playing volley"}
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
