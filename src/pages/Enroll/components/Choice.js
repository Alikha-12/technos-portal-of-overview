import Choise from "./image/Grid.png";

function Choice() {
  return (
    <div
      className="bg-fixed font-Bebas text-center pt-5 tracking-wide font-medium text-white text-5xl bg-center h-24 w-screen"
      style={{
        backgroundImage: `url(${Choise})`,
      }}
    >
      {" "}
      choose us.
    </div>
  );
}
export default Choice;
