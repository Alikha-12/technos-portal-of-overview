import Grid from "./images/white_grid.png";
import React from "react";
import { RxDoubleArrowDown } from "react-icons/rx";
function More() {
  return (
    <section className="bg-[#0e82bd]">
      <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
        <h2 className="max-w-2xl mx-auto text-2xl font-semibold tracking-tight text-white xl:text-3xl">
          Still not sure?{" "}
          <span className="text-[#dce7f4] hover:text-white hover:cursor-pointer duration-300">
            Read below.
          </span>
        </h2>
        <div className="inline-flex w-full mt-6 sm:w-auto"></div>
      </div>
    </section>
  );
}
export default More;
