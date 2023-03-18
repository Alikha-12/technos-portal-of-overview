import Toothpaste from "./toothpaste.png";
function Hero() {
  return (
    <section className="bg-gray-900 text-white text-left w-full">
      <div className="mx-auto max-w-screen-xl py-32 lg:flex lg:h-screen lg:items-center text-center inset-y-0 left-0">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="bg-gradient-to-r from-white via-[#0e82bd] to-blue-500 bg-clip-text text-6xl font-extrabold text-transparent sm:text-5xl">
            Discover your true <br />
            potential with us.
          </h1>
          <div className="mt-8 flex flex-wrap gap-4"></div>
        </div>
      </div>
    </section>
  );
}
export default Hero;
