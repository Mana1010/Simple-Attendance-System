import { useState, useEffect, createContext, useContext } from "react";
import axios from "axios";
import { nanoid } from "nanoid";
import user from "./images/user.png";
import girl from "../components/images/girl.png";
import boy from "../components/images/boy.png";
import head from "../components/images/head.png";
import baby from "../components/images/baby.png";
import anonymous from "../components/images/anonymous.png";
import avatar from "../components/images/avatar.png";
import AttendanceForm from "../form/AttendanceForm";

const Context = createContext();

export function ContextProvider({ children }) {
  const [infoRegister, setInfoRegister] = useState({
    username: "",
    password: "",
    confirmpass: "",
    condition: false,
    id: nanoid(),
  });
  const [officialAccount, setOfficialAccount] = useState(
    JSON.parse(localStorage.getItem("infoRegister"))
  );
  //For Edit
  const [pictured, setPictures] = useState([
    {
      img: girl,
      id: nanoid(),
      select: false,
    },
    {
      img: boy,
      id: nanoid(),
      select: false,
    },
    {
      img: head,
      id: nanoid(),
      select: false,
    },
    {
      img: baby,
      id: nanoid(),
      select: false,
    },
    {
      img: anonymous,
      id: nanoid(),
      select: false,
    },
    {
      img: avatar,
      id: nanoid(),
      select: false,
    },
  ]);
  const [profile, setProfile] = useState(
    JSON.parse(localStorage.getItem("profile")) || { img: user, id: nanoid() }
  );
  //For Attendance
  const timeIn = new Date();
  const forTimeIn = {
    hours: timeIn.getHours(),
    minutes: timeIn.getMinutes(),
    second: timeIn.getSeconds(),
  };
  const [attendanceForm, setAttendanceForm] = useState({
    id: nanoid(),
    name: "",
    gender: "Male",
    age: "",
    address: "",
    timeIn: `${forTimeIn.hours % 12}:${forTimeIn.minutes}:${forTimeIn.second}`,
    timeOut: "",
  });
  const [attendanceList, setAttendanceList] = useState(
    JSON.parse(localStorage.getItem("attendanceList")) || []
  );

  const [specificEditForm, setSpecificEditForm] = useState();
  const [specificTimeOutForm, setSpecificTimeOutForm] = useState();
  async function specificEditFunc(id) {
    const filtered = attendanceList.find((attendance) => attendance.id === id);
    setSpecificEditForm(filtered);
  }
  async function specificTimeOutFunc(id) {
    const findAttendance = attendanceList.find((attend) => attend.id === id);
    setSpecificTimeOutForm({
      ...findAttendance,
      timeOut: `${forTimeIn.hours % 12}:${forTimeIn.minutes}:${
        forTimeIn.second
      }`,
    });
  }
  async function attendanceListed() {
    const request = await axios.get("http://localhost:8000/attendance");
    const converted = request.data;
    setAttendanceList(converted);
  }

  async function postAttendance() {
    try {
      await axios.post("http://localhost:8000/attendance", attendanceForm, {
        headers: { "Content-Type": "application/json" },
      });
      await attendanceListed();
    } catch (err) {
      console.log("Failed to Post");
    }
  }
  async function removeLocalStorageAttendance(id) {
    localStorage.removeItem(`${id}`);
  }
  async function deleteAttendance(id) {
    try {
      await axios.delete(`http://localhost:8000/attendance/${id}`);
      await removeLocalStorageAttendance(id);
      await attendanceListed();
    } catch (err) {
      throw new Error("Failed to Delete");
    }
  }

  async function updateAttendance(id) {
    try {
      await axios.put(
        `http://localhost:8000/attendance/${id}`,
        specificEditForm,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      await attendanceListed();
    } catch (err) {
      throw new Error("Failed to Update");
    }
  }
  useEffect(() => {
    async function updateTimeOutAttendance(id) {
      try {
        await axios.put(
          `http://localhost:8000/attendance/${id}`,
          specificTimeOutFunc,
          {
            headers: { "Content-Type": "application/json" },
          }
        );
        await attendanceListed();
      } catch (err) {
        throw new Error(err);
      }
    }
    updateTimeOutAttendance(specificTimeOutForm?.id);
  }, [specificTimeOutForm]);
  async function addAccount(data) {
    try {
      await axios.post("http://localhost:3000/accounts", {
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });
    } catch (err) {
      throw new Error("Failed to add account");
    }
  }
  function customizeProfile(image, ids) {
    setProfile({
      img: image,
      id: ids,
    });
  }
  useEffect(() => {
    localStorage.setItem("profile", JSON.stringify(profile));
  }, [profile]);
  useEffect(() => {
    localStorage.setItem("attendanceList", JSON.stringify(attendanceList));
  }, [attendanceList]);
  return (
    <Context.Provider
      value={{
        infoRegister,
        setInfoRegister,
        officialAccount,
        setOfficialAccount,
        addAccount,
        customizeProfile,
        profile,
        setProfile,
        pictured,
        setPictures,
        attendanceForm,
        setAttendanceForm,
        postAttendance,
        attendanceList,
        deleteAttendance,
        updateAttendance,
        specificEditFunc,
        specificEditForm,
        setSpecificEditForm,
        specificTimeOutFunc,
        specificTimeOutForm,
        setSpecificTimeOutForm,
      }}
    >
      {children}
    </Context.Provider>
  );
}
export function useGlobalContext() {
  return useContext(Context);
}
