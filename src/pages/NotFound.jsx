import React from "react";
import error from "./images/error.png";
function NotFound() {
  return (
    <div className="bg-[#26272C] w-screen h-screen flex justify-center items-center flex-col">
      <h1 className="md:text-[4rem] text-[2.5rem] text-white">
        Page Not Found
      </h1>
      <div className="md:w-1/4">
        <img src={error} alt="404" className="w-full h-full" />
      </div>
    </div>
  );
}

export default NotFound;
