import React from "react";
import LinkData from "../data/link";
console.log(LinkData);

function Links() {
  return (
    <main className="w-full  p-2 ">
      <div className="to-blue-700 flex flex-col items-center gap-2">
        {LinkData.map((link) => (
          <a
            href="https://www.youtube.com/@UtopiXI"
            target="_blank"
            className="bg-white text-black font-semibold text-[12px] hover:cursor-pointer hover:bg-green-400  rounded-2xl py-2  pl-[20px] pr-20 flex items-center  w-[270px] justify-between "
          >
            <i className={`fa-brands ${link.linkIcon} `}></i> 
            {link.linkName}
          </a>
        ))}
      </div>
    </main>
  );
}

export default Links;
