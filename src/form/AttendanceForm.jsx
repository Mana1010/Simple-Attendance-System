import React from "react";
import { useState } from "react";
import { useGlobalContext } from "../context/context";
import { nanoid } from "nanoid";
import { useNavigation } from "react-router-dom";
function AttendanceForm({ setShowForm }) {
  const {
    attendanceForm,
    setAttendanceForm,
    postAttendance,
    attendanceListed,
  } = useGlobalContext();
  const [errorMessage, setErrorMessage] = useState("");
  function handleChangeInfo(e) {
    const { name, value } = e.target;
    setAttendanceForm({
      ...attendanceForm,
      [name]: value,
    });
  }
  function submitForm(e) {
    const timeIn = new Date();
    const forTimeIn = {
      hours: timeIn.getHours(),
      minutes: timeIn.getMinutes(),
      second: timeIn.getSeconds(),
    };
    if (
      attendanceForm.name.length === 0 ||
      attendanceForm.age.length === 0 ||
      attendanceForm.address.length === 0
    ) {
      e.preventDefault();
      setErrorMessage("Please complete the Form");
      return;
    }

    postAttendance();
    setAttendanceForm({
      id: nanoid(),
      name: "",
      gender: "Male",
      age: "",
      address: "",
      timeIn: `${forTimeIn.hours % 12}:${forTimeIn.minutes}:${
        forTimeIn.second
      }`,
      timeOut: "",
    });
    setErrorMessage("");
    setShowForm(false);
  }
  return (
    <div className="absolute w-screen h-screen top-0 bottom-0 left-0 right-0 backdrop-blur-sm bg-white/20 flex justify-center items-center">
      <form
        className="w-[350px] h-[400px] bg-[#26272C] rounded-sm py-3 px-5"
        onSubmit={submitForm}
      >
        <h1 className="text-white font-poppins text-md">
          <span className="text-[#EEBA2C]">INFO</span>TECH
        </h1>
        <h1 className="text-center font-poppins text-white text-xl uppercase font-bold">
          Attendance Form
        </h1>
        {errorMessage && (
          <p className="text-center text-red-500 font-poppins text-sm">
            {errorMessage}
          </p>
        )}
        <div className="space-y-4 pt-3">
          <input
            placeholder="Name"
            type="text"
            value={attendanceForm.name}
            name="name"
            onChange={handleChangeInfo}
            className="px-2 py-3 w-full outline-none focus:ring-[1px] focus:ring-[#EEBA2C] bg-[#11141B] placeholder:text-[#EEBA2C] font-poppins text-white placeholder:uppercase text-sm"
          />
          <div className="space-x-2 w-full flex">
            <select
              name="gender"
              value={attendanceForm.gender}
              onChange={handleChangeInfo}
              className="px-2 py-3 w-1/2 outline-none focus:ring-[1px] focus:ring-[#EEBA2C] bg-[#11141B] text-[#EEBA2C] font-poppins uppercase text-sm"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <input
              placeholder="Age"
              type="number"
              name="age"
              value={attendanceForm.age}
              onChange={handleChangeInfo}
              className="px-2 py-3 w-1/2 outline-none focus:ring-[1px] focus:ring-[#EEBA2C] bg-[#11141B] placeholder:text-[#EEBA2C] text-white font-poppins uppercase text-sm"
            />
          </div>
          <input
            placeholder="Address"
            value={attendanceForm.address}
            name="address"
            onChange={handleChangeInfo}
            className="px-2 py-3 w-full outline-none focus:ring-[1px] focus:ring-[#EEBA2C] bg-[#11141B] placeholder:text-[#EEBA2C] font-poppins text-white placeholder:uppercase text-sm"
          />
        </div>
        <div className="flex space-x-2 w-full justify-center items-center p-3">
          <button
            onClick={() => setShowForm((prev) => !prev)}
            type="button"
            className="text-[#EEBA2C] font-poppins w-1/2 p-2 bg-slate-900"
          >
            Back
          </button>
          <button
            type="submit"
            className="text-[#EEBA2C] font-poppins w-1/2 p-2 bg-slate-900 active:bg-slate-700"
          >
            Time In
          </button>
        </div>
        <footer
          className="space-y-1 p-4
        "
        >
          <p className="text-[0.8rem] font-poppins text-white text-center">
            Made by:{" "}
            <a
              href="https://www.tiktok.com/@arcane_mage"
              className="text-[#EEBA2C] underline underline-offset-1"
            >
              @arcane_mage
            </a>
          </p>
          <p className="text-[0.7rem] font-poppins text-white text-center">
            2023 All Right Reserved
          </p>
        </footer>
      </form>
    </div>
  );
}

export default AttendanceForm;
