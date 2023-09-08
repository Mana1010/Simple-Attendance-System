import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
function Form() {
  const location = useLocation();
  return (
    <div className="w-screen h-screen bg-[#2C2C2D] flex items-center justify-center flex-col relative">
      {/* <NavLink
          to="register"
          className={`border-[#444448] border-2 px-3.5 py-2.5 rounded-md font-poppins`}
        >
          REGISTER
        </NavLink> */}
      <div className="w-full flex justify-center">
        <Outlet />
      </div>
      {/* <footer
        className={`w-full absolute p-5 bottom-0 left-0 right-0 flex justify-end`}
      >
        <NavLink
          to="login"
          className={`border-[#EEBA2C] border-[1px] px-5 py-2 rounded-md font-poppins overflow-hidden flex items-center text-white hover:bg-[#EEBA2C] relative`}
        >
          Proceed to Login
        </NavLink>
      </footer> */}
    </div>
  );
}

export default Form;
