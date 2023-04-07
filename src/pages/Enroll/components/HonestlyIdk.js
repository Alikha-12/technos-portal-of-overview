import Proud from "./image/proud.jpeg";
import Robot from "./image/Robotic.jpg";
function Idk() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="bg-[#0e82bd] p-8 md:p-12 lg:px-16 lg:py-24 lg:h-full md:h-1/3">
            <div className="mx-auto max-w-xl text-center align-middle">
              <h2 className="text-2xl font-bold text-white md:text-3xl lg:pt-20">
                Kickstart your journey now!
              </h2>
              <p className="hidden text-white/90 sm:mt-4 sm:block">
                With guide our students academically and spiritually. We make
                sure they unleashed their potential.
              </p>
              <div className="mt-4 md:mt-8">
                {/* Hover */}
                <a
                  className="group relative inline-block focus:outline-none focus:ring"
                  href="https://wa.me/6285852339448
                  "
                >
                  <span className="absolute inset-0 translate-x-0 translate-y-0 bg-white transition-transform group-hover:translate-y-1.5 group-hover:translate-x-1.5" />
                  <span className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-[#0e82bd]">
                    ENROLL
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
            <img
              alt="Student"
              src={Proud}
              className="h-40 w-full object-cover sm:h-56 md:h-full"
            />
            <img
              alt="Student"
              src={Robot}
              className="h-40 w-full object-cover sm:h-56 md:h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Idk;
