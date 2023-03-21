import EC from "./image/Classroom.jpeg";

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${EC})`,
      }}
    >
      <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25" />
      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-center sm:text-left">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Choose wisely
            <strong className="block font-extrabold text-[#0e82bd]">
              Choose us.
            </strong>
          </h1>
          <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
            We'll guide them trought their spiritual and journey to make the
            most of themselves.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 text-center"></div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
