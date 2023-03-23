import Grid from "./images/smallest.png";
import vision from "./images/vision.png";
function Below() {
  return (
    <div
      className="text-center tracking-wider font-medium text-white lg:text-6xl sm:text-3xl bg-scroll bg-center bg-[length:200px_100px]"
      style={{
        backgroundImage: `url(${Grid})`,
      }}
    >
      <h1 className=" text-center align-middle p-10">
        {" "}
        We are encouraging our <br />
        students to make the <br />
        most of themselves
      </h1>
    </div>
  );
}
export default Below;
