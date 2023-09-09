import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import timein from "./images/timein.png";
import timeout from "./images/timeout.png";
import deleted from "./images/delete.png";
import AttendanceForm from "../form/AttendanceForm";
function Attendance() {
  const [showForm, setShowForm] = useState(true);
  return (
    <div className="flex w-full h-full bg-[#26272C] px-[5rem] py-[1rem] justify-center">
      <div className="flex flex-col space-y-2">
        <div className="flex space-x-3 justify-center w-full">
          <div className="bg-[rgb(59,62,63)] w-[300px] h-[200px] py-1.5 px-2.5 rounded-sm relative overflow-hidden">
            <h1 className="text-[#26BC6A] font-poppins text-lg font-bold">
              Total Time In
            </h1>
            <h1 className="text-center pt-[2.8rem] text-white font-poppins text-2xl">
              0
            </h1>
            <div className="absolute left-[-10px] bottom-[-5px] w-1/2">
              <img src={timein} alt="Time in" />
            </div>
          </div>
          <div className="bg-[#3B3E3F] w-[300px] h-[200px] py-1.5 px-2.5 rounded-sm relative">
            <h1 className="text-blue-500 font-poppins text-lg font-bold">
              Total Time Out
            </h1>
            <div className="absolute left-[-10px] bottom-[-10px] w-1/2">
              <img src={timeout} alt="Time out" />
            </div>
          </div>
          <div className="bg-[#3B3E3F] w-[300px] h-[200px] py-1.5 px-2.5 rounded-sm relative">
            <h1 className="text-[#DB3545] font-poppins text-lg font-bold">
              Total Deleted User
            </h1>
            <div className="absolute left-0 bottom-[-3px] w-1/2">
              <img src={deleted} alt="Deleted" />
            </div>
          </div>
        </div>
        {/* <div className="flex justify-end px-4">
          <button className="px-5 py-2 font-poppins bg-white font-semibold">
            Time In
          </button>
        </div> */}
        <div className="w-full flex justify-end">
          <button className="px-4 py-2 bg-white text-[#26272C] font-poppins rounded-sm">
            <span className="pr-1">
              <ion-icon name="time-outline"></ion-icon>
            </span>
            Time in
          </button>
        </div>
        <table className="w-full overflow-auto">
          <thead>
            <tr>
              <th className="py-1.5 px-7 bg-[#EAB308] text-[#26272C]">
                UserID
              </th>
              <th className="py-1.5 px-7 bg-[#EAB308] text-[#26272C]">Date</th>
              <th className="py-1.5 px-7 bg-[#EAB308] text-[#26272C]">Name</th>
              <th className="py-1.5 px-7 bg-[#EAB308] text-[#26272C]">
                Gender
              </th>
              <th className="py-1.5 px-7 bg-[#EAB308] text-[#26272C]">Age</th>
              <th className="py-1.5 px-7 bg-[#EAB308] text-[#26272C]">
                Address
              </th>
              <th className="py-1.5 px-7 bg-[#EAB308] text-[#26272C]">
                Time In
              </th>
              <th className="py-1.5 px-7 bg-[#EAB308] text-[#26272C]">
                Time Out
              </th>
              <th className="py-1.5 px-7 bg-[#EAB308] text-[#26272C]">
                Actions
              </th>
            </tr>
          </thead>
        </table>
      </div>
      {showForm && <AttendanceForm />}
    </div>
  );
}

export default Attendance;
