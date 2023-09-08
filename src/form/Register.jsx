import React, { useState } from "react";
import { Link, useNavigate, redirect, Navigate } from "react-router-dom";
import { useGlobalContext } from "../context/context";

function Register() {
  // const [infoRegister, setInfoRegister] = useState({
  //   username: "",
  //   password: "",
  //   confirmpass: "",
  //   condition: false,
  // });
  const { infoRegister, setInfoRegister, setOfficialAccount, addAccount } =
    useGlobalContext();
  const [alreadySignIn, setAlreadySignIn] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setconfirmPasswordError] = useState("");
  const [conditionError, setConditionError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordFocus, setpasswordFocus] = useState(false);
  const [confirmpasswordFocus, setconfirmpasswordFocus] = useState(false);
  const [validationUsername, setValidationUsername] = useState(true);
  const [validationPassword, setValidationPassword] = useState(true);
  const [validationConfirmPassword, setValidationConfirmPassword] =
    useState(true);
  const navigate = useNavigate();
  function handleChange(e) {
    const { name, type, value, checked } = e.target;
    setInfoRegister({
      ...infoRegister,
      [name]: type === "checkbox" ? checked : value,
    });
  }
  function check(e) {
    if (e) {
      setConditionError("");
    }
  }
  // To handle the border focus /*
  function handleBorderPasswordFocus() {
    setpasswordFocus(true);
  }
  function handleBorderPasswordBlur() {
    setpasswordFocus(false);
  }
  function handleBorderConfirmPasswordFocus() {
    setconfirmpasswordFocus(true);
  }
  function handleBorderConfirmPasswordBlur() {
    setconfirmpasswordFocus(false);
  }
  // To handle the border focus */

  //To handle form errors /*
  function handleuserNameError(e) {
    const value = e.target.value;
    if (/\s|^\s/.test(value)) {
      setValidationUsername(false);
      setUsernameError("Don't put spaces");
    } else if (/[^a-z0-9]/gi.test(value)) {
      setValidationUsername(false);
      setUsernameError("Please don't include any non-letter characters");
    } else {
      setUsernameError("");
      setValidationUsername(true);
    }
  }
  function handlepassWordError(e) {
    const passValue = e.target.value;
    if (passValue.length <= 7 && passValue.length !== 0) {
      setValidationPassword(false);
      setPasswordError("No less than 7 characters");
    } else if (passValue.length >= 17) {
      setValidationPassword(false);
      setPasswordError("No more than 17 characters");
    } else if (/\s/.test(passValue)) {
      setValidationPassword(false);
      setPasswordError("Don't put spaces");
    } else {
      setValidationPassword(true);
      setPasswordError("");
    }
  }
  function handleConfirmPasswordError(e) {
    const conpassValue = e.target.value;
    if (infoRegister.password !== conpassValue && conpassValue.length !== 0) {
      setValidationConfirmPassword(false);
      setconfirmPasswordError("Password doesn't match");
    } else {
      setValidationConfirmPassword(true);
      setconfirmPasswordError("");
    }
  }
  //To handle form errors */
  function submitForm(e) {
    e.preventDefault();
    if (!infoRegister.condition) {
      setConditionError("Please check this");
      return;
    }
    if (
      !validationConfirmPassword ||
      !validationPassword ||
      !validationUsername ||
      infoRegister.username.length === 0 ||
      infoRegister.password.length === 0 ||
      infoRegister.confirmpass.length === 0
    ) {
      return null;
    }
    if (localStorage.getItem("infoRegister")) {
      setAlreadySignIn("You already have an Account");
      return;
    }
    addAccount(infoRegister);
    setAlreadySignIn("");
    localStorage.setItem("infoRegister", JSON.stringify(infoRegister));
    setOfficialAccount(JSON.parse(localStorage.getItem("infoRegister")));
    navigate("/attendancesystem/login");
  }
  return (
    <div>
      <form
        className="sm:bg-[#26272C] bg-transparent w-[370px] h-[400px] py-4 px-6 rounded-sm space-y-4"
        method="post"
        onSubmit={submitForm}
      >
        <div>
          <h1 className="text-[#EEBA2C] font-poppins text-2xl">Register</h1>
          {alreadySignIn && (
            <p className="text-red-500 font-poppins text-sm">{alreadySignIn}</p>
          )}
        </div>
        <div>
          <input
            value={infoRegister.username}
            placeholder="Username"
            type="name"
            name="username"
            onChange={(e) => {
              handleChange(e), handleuserNameError(e);
            }}
            className={`bg-[#343436] py-3 px-2 text-white outline-offset-0 outline-none placeholder:text-zinc-400 w-full text-sm font-poppins ${
              validationUsername
                ? "focus:outline-green-500 outline-[1px]"
                : "focus:outline-red-500 outline-[1px]"
            }`}
          />
          {usernameError && (
            <p className="text-[0.7rem] text-red-500 font-poppins">
              {usernameError}
            </p>
          )}
        </div>
        <div>
          <div
            className={`flex justify-between items-center w-full bg-[#343436] py-2 px-2 ${
              passwordFocus
                ? `outline outline-[1px] ${
                    validationPassword
                      ? " outline-green-500"
                      : "outline-red-500"
                  }`
                : "outline-none"
            }`}
          >
            <input
              value={infoRegister.password}
              placeholder="Password"
              type={`${showPassword ? "text" : "password"}`}
              name="password"
              onChange={(e) => {
                handleChange(e), handlepassWordError(e);
              }}
              className={`bg-transparent outline-none w-[250px] text-white font-poppins text-sm`}
              onFocus={handleBorderPasswordFocus}
              onBlur={handleBorderPasswordBlur}
            />
            <button
              type="button"
              className="text-lg text-white pr-2"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? (
                <ion-icon name="eye-off-outline"></ion-icon>
              ) : (
                <ion-icon name="eye-outline"></ion-icon>
              )}
            </button>
          </div>
          {passwordError && (
            <p className="text-[0.7rem] text-red-500">{passwordError}</p>
          )}
        </div>
        <div>
          <div
            className={`flex justify-between items-center w-full bg-[#343436] py-2 px-2 ${
              confirmpasswordFocus
                ? `outline outline-[1px] ${
                    validationConfirmPassword
                      ? " outline-green-500"
                      : "outline-red-500"
                  }`
                : "outline-none"
            }`}
          >
            <input
              value={infoRegister.confirmpass}
              placeholder="Confirm Password"
              type={`${showConfirmPassword ? "text" : "password"}`}
              name="confirmpass"
              onChange={(e) => {
                handleChange(e), handleConfirmPasswordError(e);
              }}
              className={`bg-transparent outline-none w-[250px] text-white font-poppins text-sm`}
              onFocus={handleBorderConfirmPasswordFocus}
              onBlur={handleBorderConfirmPasswordBlur}
            />
            <button
              type="button"
              className="text-lg text-white pr-2"
              onClick={() => setShowConfirmPassword((prev) => !prev)}
            >
              {showConfirmPassword ? (
                <ion-icon name="eye-off-outline"></ion-icon>
              ) : (
                <ion-icon name="eye-outline"></ion-icon>
              )}
            </button>
          </div>
          {confirmPasswordError && (
            <p className="text-red-500 text-[0.7rem]">{confirmPasswordError}</p>
          )}
        </div>
        <div>
          <div className="space-x-2 flex items-center">
            <input
              name="condition"
              type="checkbox"
              checked={infoRegister.condition}
              onChange={(e) => {
                handleChange(e), check(e.target.value);
              }}
              id="condition"
            />
            <label
              htmlFor="condition"
              className="text-sm font-poppins text-white select-none"
            >
              I agree to the terms and condition
            </label>
          </div>
          {conditionError && (
            <p className="text-red-500 text-[0.7rem] font-poppins">
              {conditionError}
            </p>
          )}
        </div>
        <div className="flex space-x-1 items-center">
          <h4 className="text-white text-sm font-poppins">
            Already have an account?
          </h4>
          <Link
            to="login"
            className="text-[#EEBA2C] underline underline-offset-2 text-sm font-poppins"
          >
            Click here
          </Link>
        </div>
        <button
          type="submit"
          className="w-full text-[#EEBA2C] font-poppins py-2.5 bg-slate-700"
        >
          SIGN UP
        </button>
      </form>
    </div>
  );
}

export default Register;
