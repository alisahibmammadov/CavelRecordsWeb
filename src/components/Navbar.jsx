import React from "react";
import CavelCover from "../assets/CavelCover.jpg";

function Navbar() {
  return (
    <main className="w-full  flex flex-col  items-center justify-center">
      <div className=" flex">
        <img src={CavelCover} alt="Cavel Records" className="m-2 rounded-ful w-[132px] rounded-full"/>
      </div>
      <div><h2 className="font-bold text-[28px] text-[#fff]">Cavel Records</h2></div>
    </main>
  );
}

export default Navbar;
