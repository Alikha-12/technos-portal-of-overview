import Grid from "./images/blue_grid.png";
import vision from "./images/vision.png";
function Below() {
  return (
    <div
      className="text-center tracking-wider font-medium text-white text-6xl bg-scroll bg-center bg-[length:200px_100px]"
      style={{
        backgroundImage: `url(${vision})`,
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
