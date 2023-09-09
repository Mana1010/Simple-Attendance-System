import React from "react";
import innovation from "./images/innovation.png";

function About() {
  return (
    <div className="flex w-full h-full justify-center bg-[#26272C] px-[5rem] py-[1rem] flex-wrap">
      <div className="basis-[50%] flex justify-center items-center flex-col">
        <h3 className="text-center text-[#EEBA2C] font-poppins text-lg uppercase">
          About
        </h3>
        <h1 className="text-[4.5rem] font-poppins text-white">
          <span className="text-[#EEBA2C]">INFO</span>TECH
        </h1>
        <p className="text-white font-poppins text-sm">
          An <span className="text-[#EEBA2C]">INFO</span>TECH is a web-based
          tool designed to simplify the process of tracking attendance. It's
          built using a combination of REACTJS and TAILWIND technologies. The
          script presents a user-friendly interface where users can input their
          name and mark their attendance with a simple button click. Upon
          submission, the script captures the current date and time, associates
          it with the user's name, and appends this information to an attendance
          log file. This log file serves as a record of attendance over time,
          helping organizations and institutions keep track of participants in
          various events or classes.
        </p>
      </div>
      <div className="basis-[50%]">
        <img src={innovation} className="w-full h-full" />
      </div>
    </div>
  );
}

export default About;
