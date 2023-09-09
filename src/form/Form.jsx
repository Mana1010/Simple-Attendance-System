import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
function Form() {
  const location = useLocation();
  return (
    <div className="w-screen h-screen bg-[#2C2C2D] flex items-center justify-center flex-col relative">
      <div className="w-full flex justify-center">
        <Outlet />
      </div>
    </div>
  );
}

export default Form;
