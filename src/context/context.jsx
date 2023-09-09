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
  const [attendanceForm, setAttendanceForm] = useState({
    userId: nanoid(),
    time: new Date(),
    name: "",
    gender: "male",
    age: "",
    address: "",
    timein: "",
    timeout: "",
  });
  async function addAccount(data) {
    try {
      await axios.post("http://localhost:3000/accounts", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });
    } catch (err) {}
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
      }}
    >
      {children}
    </Context.Provider>
  );
}
export function useGlobalContext() {
  return useContext(Context);
}
