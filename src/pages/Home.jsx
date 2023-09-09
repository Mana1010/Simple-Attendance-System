import React from "react";
import about from "./images/about.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex w-full h-full justify-center bg-[#26272C] px-[5rem] py-[1rem]">
      <div className="basis-[50%] flex justify-center items-center flex-col">
        <h1 className="text-[4.5rem] font-poppins text-white">
          <span className="text-[#EEBA2C]">INFO</span>TECH
        </h1>
        <p className="text-white font-poppins">
          Best Attendance System Web Application
        </p>
        <div className="pt-4">
          <Link
            to="attendance"
            className="text-[#EEBA2C] font-poppins px-9 py-2 bg-slate-800 hover:bg-[#EEBA2C] hover:text-white rounded-sm"
          >
            Try it now
          </Link>
        </div>
      </div>
      <div className="basis[50%]">
        <img src={about} className="w-full h-full" />
      </div>
    </div>
  );
}

export default Home;
