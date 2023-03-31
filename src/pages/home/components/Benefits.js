import Competitive from "./images/undraw_drone_race.svg";
import Leadership from "./images/undraw_revenue.svg";
import Thinking from "./images/undraw_code_inspection.svg";

function Benefits() {
  return (
    <section className="bg-[#0e82bd]">
      <div className="container px-6 py-10 mx-auto md:content-center">
        <h1 className="text-3xl font-semibold text-center font-Bebas tracking-[0.25rem] capitalize lg:text-4xl text-white">
          Benefits
        </h1>
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
          <Benefit
            img={Competitive}
            skill="Competitive"
            description={
              "Competitiveness can help them develop important skills and attributes that are beneficial for their personal and professional growth."
            }
          />
          <Benefit
            img={Leadership}
            skill="Leadership"
            description={
              "Leadership is important because it can help organizations and individuals to achieve their goals, push the boundaries, and achieve success."
            }
          />
          <Benefit
            img={Thinking}
            skill="Thinking"
            description={
              "Allowing individuals to solve problems, make informed decisions, generate new ideas, and communicate effectively."
            }
          />
        </div>
      </div>
    </section>
  );
}
export default Benefits;

const Benefit = ({ img, skill, description }) => {
  return (
    <div className="flex flex-col items-center p-6 space-y-3 text-center bg-white rounded-xl hover:cursor-pointer hover:scale-105 duration-200 hover:shadow-teal-300  hover:shadow-2xl pb-10">
      <span className="inline-block p-3 text-blue-500 bg-white rounded-full ">
        <img src={img} className="h-40 w-40"></img>
      </span>
      <h1 className="text-2xl font-semibold pt-7 text-[#0e82bd]">{skill}</h1>
      <p className="text-[#0e82bd] text-center">{description}</p>
      <a
        href="#"
        className="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500"
      ></a>
    </div>
  );
};
