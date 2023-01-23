import Toothpaste from "./toothpaste.png";

function HeroSecond() {
  return (
    <div
      className="bg-cover text-right pr-5 pt-96 tracking-wider font-medium text-white text-6xl bg-scroll bg-center h-screen w-screen"
      style={{
        backgroundImage: `url(${Toothpaste})`,
      }}
    >
      {" "}
      endless posibilities.
    </div>
  );
}
export default HeroSecond;
