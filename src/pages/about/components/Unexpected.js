import Class from "./images/class.png";

function Unexpected() {
  return (
    <section className="bg-white ">
      <div className="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
        <div className="wf-ull lg:w-1/2">
          <h1 className="mt-3 text-2xl font-semibold text-gray-800 md:text-3xl">
            VISI
          </h1>
          <p className="mt-4 text-gray-500">
            Cendekiawan Muslim, Berbasis Teknologi dan Berbudaya Lingkungan
          </p>
          <div className="flex items-center mt-6 gap-x-3">
            <button
              href="/contact"
              className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600 "
            >
              Got a qestion?
            </button>
          </div>
        </div>
        <div className="relative w-full mt-8 lg:w-1/2 lg:mt-0">
          <img
            className=" w-full lg:h-[32rem] h-80 md:h-96 rounded-lg object-cover "
            src={Class}
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
export default Unexpected;
