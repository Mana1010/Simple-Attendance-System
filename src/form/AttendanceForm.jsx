import React from "react";
import { useState } from "react";

function AttendanceForm() {
  return (
    <div className="absolute w-screen h-screen top-0 bottom-0 left-0 right-0 backdrop-blur-sm bg-white/20 flex justify-center items-center">
      <form className="w-[350px] h-[500px] bg-[#26272C] rounded-sm py-3 px-5">
        <h1 className="text-white font-poppins text-md">
          <span className="text-[#EEBA2C]">INFO</span>TECH
        </h1>
        <h1 className="text-center font-poppins text-white text-xl uppercase font-bold">
          Attendance Form
        </h1>
        <p className="text-center text-[#EEBA2C] font-poppins text-sm">
          Fill Up the Form
        </p>
      </form>
    </div>
  );
}

export default AttendanceForm;
