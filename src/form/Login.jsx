import React from "react";
import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useGlobalContext } from "../context/context";
import { parse } from "postcss";

function Login() {
  const { infoRegister, officialAccount } = useGlobalContext();
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const [incorrectCredentials, setIncorrectCredentials] = useState("");
  const [validation, setValidation] = useState(true);
  const [toggleEye, setToggleEye] = useState(false);
  const [handlePasswordFocus, setHandlePasswordFocus] = useState(false);
  const navigate = useNavigate();
  function handleUserNameChange(e) {
    const value = e.target.value;
    setusername(value);
  }
  function handlePasswordChange(e) {
    const value = e.target.value;
    setPassword(value);
  }
  function handlePassFocus() {
    setHandlePasswordFocus(true);
  }
  function handdlePassBlur() {
    setHandlePasswordFocus(false);
  }
  function submitLogin(e) {
    const parseData = JSON.parse(localStorage.getItem("infoRegister"));
    console.log(officialAccount.username === parseData.username);
    e.preventDefault();
    if (username !== parseData?.username || password !== parseData?.password) {
      setIncorrectCredentials("Incorrect Username or Password");
    } else {
      setIncorrectCredentials("");
      navigate("/error");
    }
  }
  return (
    <div>
      <form
        className="sm:bg-[#26272C] bg-transparent w-[370px] h-[330px] py-4 px-6 rounded-sm space-y-4"
        onSubmit={submitLogin}
      >
        <div>
          <h1 className="text-[#EEBA2C] font-poppins text-2xl">Login</h1>
          {incorrectCredentials && (
            <p className="text-red-500 font-poppins text-sm">
              {incorrectCredentials}
            </p>
          )}
        </div>
        <input
          type="text"
          placeholder="Name"
          value={username}
          onChange={handleUserNameChange}
          className={`bg-[#343436] py-3 px-2 text-white outline-offset-0 outline-none placeholder:text-zinc-400 w-full text-sm font-poppins outline ${
            validation
              ? "focus:outline-green-500 outline-[1px]"
              : "focus:outline-red-500 outline-[1px]"
          }`}
        />
        <div
          className={`flex justify-between items-center w-full bg-[#343436] py-2 px-2 outline outline-[1px] ${
            handlePasswordFocus ? "outline-green-500" : "outline-none"
          }`}
        >
          <input
            value={password}
            placeholder="Password"
            type={toggleEye ? "text" : "password"}
            onChange={handlePasswordChange}
            className={`bg-transparent outline-none w-[250px] text-white font-poppins text-sm`}
            onFocus={handlePassFocus}
            onBlur={handdlePassBlur}
          />
          <button
            onClick={() => setToggleEye((prevToggle) => !prevToggle)}
            type="button"
            className="text-lg text-white pr-2"
          >
            {toggleEye ? (
              <ion-icon name="eye-off-outline"></ion-icon>
            ) : (
              <ion-icon name="eye-outline"></ion-icon>
            )}
          </button>
        </div>
        <div className="flex flex-col">
          <h1 className="text-white text-sm font-poppins">
            Don't have an account yet?
          </h1>
          <Link
            to="/"
            className="text-[#EEBA2C] underline underline-offset-2 text-sm font-poppins"
          >
            Sign Up Here
          </Link>
        </div>
        <button
          type="submit"
          className="w-full text-[#EEBA2C] font-poppins py-2.5 bg-slate-700"
        >
          LOG IN
        </button>
      </form>
    </div>
  );
}

export default Login;
