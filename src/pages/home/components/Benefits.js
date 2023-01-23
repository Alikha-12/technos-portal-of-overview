import Competitive from "./images/undraw_drone_race.svg";
import Leadership from "./images/undraw_revenue.svg";
import Thinking from "./images/undraw_code_inspection.svg";

function Benefits() {
  return (
    <section className="bg-[#0e82bd]">
      <div className="container px-6 py-10 mx-auto md:content-center">
        <h1 className="text-3xl font-semibold text-center font-Bebas tracking-[0.25rem] text-gray-800 capitalize lg:text-4xl dark:text-white">
          Benefits
        </h1>
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
          <Benefit
            img={Competitive}
            skill="Competitive"
            description={
              "This world is full of competition, here we prepare our students to be competitive"
            }
          />
          <Benefit
            img={Leadership}
            skill="Leadership"
            description={
              "This world is full of competition, here we prepare our students to be competitive"
            }
          />
          <Benefit
            img={Thinking}
            skill="Thinking"
            description={
              "Technology plays a big role in our curriculum to teach student to think more critically"
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
      >
        {/* <span className="mx-1">read more</span>
        <svg
          className="w-4 h-4 mx-1 rtl:-scale-x-100"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg> */}
      </a>
    </div>
  );
};
