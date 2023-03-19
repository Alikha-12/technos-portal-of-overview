import React, { useState } from "react";

function PageNotFound() {
  const [errorText, setErrorText] = useState(460);
  const [nama, setNama] = useState("");

  return (
    <div className="grid h-screen px-4 bg-white place-content-center">
      <div className="text-center">
        <h1 className="font-black text-gray-200 text-9xl">{errorText}</h1>
        <h1 className="font-black text-gray-200 text-9xl">
          {nama === "tiara" ? "hooman" : "kucing"}
          <br /> {nama}
        </h1>
        <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Uh-oh!
        </p>
        <p className="mt-4 text-gray-500">We can't find that page.</p>
        <input
          className=" bg-sky-300"
          onChange={(event) => {
            setNama(event.target.value);
          }}
        />
        {/* <a
          href="/"
          className="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-[#0e82bd] rounded hover:bg-blue-600 focus:outline-none focus:ring"
        >
          Go Back Home
        </a> */}
        <button
          className="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-[#0e82bd] rounded hover:bg-blue-600 focus:outline-none focus:ring"
          onClick={() => {
            setErrorText(404);
          }}
        >
          Reset
        </button>
      </div>

      <Container nama={"Tiara"} />
      <Container nama={"Rafi"} />
    </div>
  );
}
export default PageNotFound;

const Container = ({ nama }) => {
  return (
    <div className="bg-emerald-400  w-40 h-24 my-14">
      <p>{nama}</p>
    </div>
  );
};
