import React from "react";
import CavelCover from "../assets/CavelCover.jpg";

function Navbar() {
  return (
    <main className="w-full  flex flex-col md:gap-2 items-center justify-center">
      <div className=" flex">
        <img src={CavelCover} alt="Cavel Records" className="m-2 rounded-ful md:w-[200px] w-[132px] rounded-full"/>
      </div>
      <div><h2 className="font-bold text-[28px] text-[#fff] md:text-7xl">Cavel Records</h2></div>
    </main>
  );
}

export default Navbar;
