import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { nanoid } from "nanoid";
import { useGlobalContext } from "../context/context";
function EditProfile() {
  const { customizeProfile, pictured, setPictures } = useGlobalContext();
  const user = JSON.parse(localStorage.getItem("infoRegister"));
  const filteredProfile = (id) => {
    setPictures((pic) =>
      pic.map((pics) =>
        pics.id === id
          ? { ...pics, select: !pics.select }
          : { ...pics, select: false }
      )
    );
  };
  const saveChange = pictured.find((pics) => pics.select === true);
  //for button save changes
  const saveChanges = pictured.some((pics) => pics.select === true);
  return (
    <div className="flex w-full h-full flex-col items-center bg-[#26272C] py-[1rem]">
      <h1 className="text-[2.5rem] font-poppins text-white">
        <span className="text-[#EEBA2C]">{user?.username || null}</span>'s
        profile
      </h1>
      <div className="pt-[2rem] h-1/2 my-auto space-y-3">
        <h1 className="text-center text-white font-poppins text-3xl">
          Please select your new Profile
        </h1>
        <div className={`flex space-x-4`}>
          {pictured.map((picture) => (
            <button
              onClick={() => filteredProfile(picture.id)}
              key={picture.id}
              className={`w-[100px] p-2 rounded-full border-2 border-white overflow-hidden ${
                picture.select && "border-yellow-500"
              }`}
            >
              <img src={picture.img} className="w-full" />
            </button>
          ))}
        </div>
        <div className="flex w-full justify-center items-center space-x-4 pt-4">
          <Link
            to=".."
            className={`px-4 py-2 rounded-sm font-poppins bg-slate-400`}
          >
            Cancel
          </Link>
          <Link
            onClick={() => customizeProfile(saveChange.img, saveChange.id)}
            to={saveChanges ? ".." : "."}
            className={`px-4 py-2 rounded-sm font-poppins ${
              saveChanges ? "bg-yellow-300" : "bg-slate-400"
            }`}
          >
            Save Changes
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
