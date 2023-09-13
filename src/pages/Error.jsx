import React from "react";
import error from "./images/errorPage.png";
import { useRouteError } from "react-router-dom";

function Error() {
  const errorInfo = useRouteError();
  return (
    <div className="flex justify-center items-center h-screen w-screen flex-col bg-[#26272C]">
      <div className="w-1/3">
        <img src={error} alt="error" />
        <h1 className="text-5xl text-center text-red-500 font-poppins">
          Something went Wrong!!
        </h1>
      </div>
    </div>
  );
}

export default Error;
