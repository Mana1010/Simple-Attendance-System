import React, { useEffect } from "react";
import { Link, useNavigation } from "react-router-dom";
import { useState } from "react";
import timein from "./images/timein.png";
import timeout from "./images/timeout.png";
import deleted from "./images/delete.png";
import AttendanceForm from "../form/AttendanceForm";
import AttendanceFormNotification from "../form/notifications/AttendanceFormNotification";
import axios from "axios";
import { useGlobalContext } from "../context/context";
import EditForm from "../form/EditForm";

function Attendance() {
  const {
    attendanceList,
    deleteAttendance,
    specificEditFunc,
    updateTimeOutAttendance,
    specificTimeOutFunc,
    // specificTimeOutForm,
    // setSpecificTimeOutForm,
  } = useGlobalContext();
  const [showForm, setShowForm] = useState(false);
  const [attendanceFormNotification, setAttendanceFormNotification] =
    useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const timeIn = new Date();
  const forTimeIn = {
    hours: timeIn.getHours(),
    minutes: timeIn.getMinutes(),
    second: timeIn.getSeconds(),
  };
  return (
    <div className="flex w-full h-full bg-[#26272C] px-[5rem] py-[1rem] justify-center">
      <div className="flex flex-col space-y-2">
        <div className="flex space-x-3 justify-center w-full">
          <div className="bg-[rgb(59,62,63)] w-[300px] h-[200px] py-1.5 px-2.5 rounded-sm relative overflow-hidden">
            <h1 className="text-[#26BC6A] font-poppins text-lg font-bold">
              Total Time In
            </h1>
            <h1 className="text-center pt-[2.8rem] text-white font-poppins text-2xl">
              {attendanceList.length}
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
        <div className="w-full flex justify-end">
          <button
            className="px-4 py-2 bg-white text-[#26272C] font-poppins rounded-sm"
            onClick={() => setShowForm((prev) => !prev)}
          >
            <span className="pr-1">
              <ion-icon name="time-outline"></ion-icon>
            </span>
            Time in
          </button>
        </div>
        <div className="overflow-auto">
          <table className="w-full">
            <thead>
              <tr className="sticky top-0">
                <th className="py-1.5 px-7 bg-[#EAB308] text-[#26272C]">
                  Name
                </th>
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
            <tbody className="divide-y-2 divide-zinc-400">
              {attendanceList.map((res, index) => (
                <tr key={res?.id} className="text-white">
                  <td className="text-white px-1.5 py-2.5 text-center text-sm">
                    {res?.name}
                  </td>
                  <td className="text-white px-1.5 py-2.5 text-center text-sm">
                    {res?.gender}
                  </td>
                  <td className="text-white px-1.5 py-2.5 text-center text-sm">
                    {res?.age}
                  </td>
                  <td className="text-white px-1.5 py-2.5 text-center text-sm">
                    {res?.address}
                  </td>
                  <td className="text-white px-1.5 py-2.5 text-center text-sm">
                    {res?.timeIn}
                  </td>
                  <td className="text-white px-1.5 py-2.5 text-center text-sm">
                    {res?.timeOut}
                  </td>
                  <td className="text-center text-xl space-x-2">
                    <button
                      onClick={() => {
                        specificTimeOutFunc(res?.id);
                      }}
                    >
                      <ion-icon name="log-out-outline"></ion-icon>
                    </button>
                    <button
                      className="text-blue-500"
                      onClick={() => {
                        setShowEditForm((prev) => !prev);
                        specificEditFunc(res?.id);
                      }}
                    >
                      <ion-icon name="create-outline"></ion-icon>
                    </button>
                    <button
                      onClick={() => deleteAttendance(res?.id)}
                      className="text-red-500"
                    >
                      <ion-icon name="trash-outline"></ion-icon>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {showForm && (
        <AttendanceForm
          setShowForm={setShowForm}
          setAttendanceFormNotification={setAttendanceFormNotification}
        />
      )}
      {showEditForm && <EditForm setShowEditForm={setShowEditForm} />}
      {/* {attendanceFormNotification && <AttendanceFormNotification />} */}
    </div>
  );
}

export default Attendance;
