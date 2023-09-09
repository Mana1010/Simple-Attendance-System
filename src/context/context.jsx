import { useState, useEffect, createContext, useContext } from "react";
import axios from "axios";
import { nanoid } from "nanoid";

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
  const [profile, setProfile] = useState({
    img: {},
    id: nanoid(),
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
  // function customizeProfile(image, ids) {
  //   setProfile({
  //     img: image,
  //     id: ids,
  //   });
  // }
  return (
    <Context.Provider
      value={{
        infoRegister,
        setInfoRegister,
        officialAccount,
        setOfficialAccount,
        addAccount,
      }}
    >
      {children}
    </Context.Provider>
  );
}
export function useGlobalContext() {
  return useContext(Context);
}
