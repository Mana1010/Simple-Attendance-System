import { Link, NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import tao from "./images/girl.png";
import { useGlobalContext } from "../context/context";
function Sidebar() {
  const { profile, setProfile } = useGlobalContext();
  const [hideSidebar, setHideSidebar] = useState(false);
  const location = useLocation();
  const styled = {
    display: hideSidebar && "none",
  };
  console.log(location);
  return (
    <aside
      className={`h-screen flex p-3 bg-[#3b3e3f] justify-between ${
        hideSidebar ? "w[3%] md:w-[3%]" : "w-[35%] md:w-[18%]"
      } flex-col relative`}
    >
      <button
        onClick={() => setHideSidebar((prev) => !prev)}
        className={`absolute right-[-15px] z-[1px] text-4xl text-[#EEBA2C] bg-slate-600 rounded-full flex items-center animate-pulse hover:animate-none transition-transform duration-150 ease-in ${
          hideSidebar ? "rotate-180" : "rotate-0"
        }`}
      >
        <ion-icon name="arrow-forward-circle-outline"></ion-icon>
      </button>
      <div className="pt-2">
        <h1
          style={styled}
          className="text-[#EEBA2C] font-poppins text-lg md:text-2xl font-bold"
        >
          INFO<span className="text-white">TECH</span>
        </h1>
      </div>
      {/* Edit Profile */}
      <div
        style={styled}
        className="w-full flex flex-col items-center justify-center pt-4 space-y-2"
      >
        <div
          className="w-1/2 rounded-full border border-[#EEBA2C] overflow-hidden bg-white"
          key={profile.id}
        >
          <img src={profile.img} className="w-full" />
        </div>
        <Link
          to="edit-your-profile"
          className="font-poppins px-5 py-2 bg-[#26272C] text-[#EEBA2C] rounded-sm text-sm"
        >
          Change Profile
        </Link>
      </div>
      <div style={styled}>
        <h1 className="text-white font-poppins text-sm text-center">
          Welcome,{" "}
          <span className="text-[#EEBA2C]">
            {JSON.parse(localStorage.getItem("infoRegister"))?.username}
          </span>
        </h1>
      </div>
      <nav style={styled} className="pt-9">
        <ul className="flex w-full flex-col space-y-4 md:space-y-0">
          <NavLink
            to="."
            className={`text-white text-md md:p-3 flex items-center ${
              location.pathname === "/attendancesystem/pages" &&
              "bg-yellow-500 rounded-md"
            }`}
          >
            <span className="pr-2">
              <ion-icon name="home-outline"></ion-icon>
            </span>{" "}
            Home
          </NavLink>
          <NavLink
            to="about"
            className={`text-white text-md md:p-3 flex items-center ${
              location.pathname === "/attendancesystem/pages/about" &&
              "bg-yellow-500 rounded-md"
            }`}
          >
            <span className="pr-2">
              <ion-icon name="information-outline"></ion-icon>
            </span>{" "}
            About
          </NavLink>
          <NavLink
            to="attendance"
            className={`text-white text-md md:p-3 flex items-center ${
              location.pathname === "/attendancesystem/pages/attendance" &&
              "bg-yellow-500 rounded-md"
            }`}
          >
            <span className="pr-2">
              <ion-icon name="person-add-outline"></ion-icon>
            </span>
            Attendance
          </NavLink>
          <NavLink
            to="delete-history"
            className={`text-white text-md md:p-3 flex items-center  ${
              location.pathname === "/attendancesystem/pages/delete-history" &&
              "bg-yellow-500 rounded-md"
            }`}
          >
            <span className="pr-2">
              <ion-icon name="trash-outline"></ion-icon>
            </span>
            Delete History
          </NavLink>
        </ul>
      </nav>
      <div
        style={styled}
        className="text-white flex flex-col justify-center items-center w-full space-y-2"
      >
        <Link
          to=".."
          onClick={() => localStorage.clear()}
          className="w-full md:py-2 text-center md:w-full bg-[#26272C] text-[#EEBA2C] font-poppins"
        >
          Delete Account
        </Link>
        <Link
          to="/"
          className="py-2 w-full text-center bg-[#26272C] text-[#EEBA2C] font-poppins"
        >
          Log Out
        </Link>
      </div>
    </aside>
  );
}

export default Sidebar;
