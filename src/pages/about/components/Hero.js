import themarch from "./images/themarch.png";
import frontview from "./images/IMG_3173.jpg";
function Hero() {
  return (
    <section>
      <div
        className=" bg-cover text-center font-Bebas pt-64 tracking-wider font-medium text-whitez text-6xl bg-scroll bg-center"
        style={{
          backgroundImage: `url(${frontview})`,
        }}
      >
        {" "}
        <h1 className=" text-white text-opacity-95 lg:text-6xl pt-80 text-right bg-scroll pr-5 pb-80 sm:text-xl md:text-4xl">
          We are <a className="underline underline-offset-4"> tech-based</a>{" "}
          <br />
          <a className="underline underline-offset-4">
            environment-friendly
          </a>{" "}
          <br />
          <a className="underline underline-offset-4">islamic school</a> <br />
          <a>located in Tuban</a>
        </h1>
      </div>
    </section>
  );
}
export default Hero;
