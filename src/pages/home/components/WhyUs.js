import TGD from "./images/undraw_stand_out.svg";
import Scout from "./images/undraw_into_the_night.svg";
import EC from "./images/undraw_quiz.svg";
import WellRounded from "./images/undraw_mathematics.svg";

function WhyUs() {
  return (
    <section className="bg-white">
      <div className="container px-6 py-10 mx-auto mb-24">
        <h1 className="text-3xl font-semibold text-[#0e82bd] lg:text-4xl md:text-5xl">
          Why us?
        </h1>
        <div className="mt-8 lg:mr-96 lg:flex md:flex sm:block lg:items-center">
          <img
            className=" sm:w-auto lg:h-96 lg:mx-6 lg:w-[40%] md:w-[70%] md:px-5 hover:cursor-pointer hover:scale-125 duration-300"
            src={WellRounded}
            alt=""
          />
          <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
            <a
              href="#"
              className="block mt-4 text-2xl font-semibold text-[#0e82bd] hover:drop-shadow-sm sm:text-2xl md:text-4xl"
            >
              Everything you need to be well-rounded
            </a>
            <p className="mt-3 text-sm text-[#46bcf1] md:text-xl">
              We make sure our student to be well-rounded to prepare them for
              the future
            </p>

            {/* <div className="flex items-center mt-6">
              <img
                className="object-cover object-center w-10 h-10 rounded-full"
                src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                alt=""
              />
              <div className="mx-4">
                <h1 className="text-sm text-gray-700 dark:text-gray-200">
                  Amelia. Anderson
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Lead Developer
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
export default WhyUs;
