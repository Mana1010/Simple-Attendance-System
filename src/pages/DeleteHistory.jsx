import React from "react";
import { useGlobalContext } from "../context/context";
import { useState } from "react";
function DeleteHistory() {
  const { deleteHistory } = useGlobalContext();
  return (
    <div className=" h-full w-full bg-[#26272C] flex px-[5rem] py-[1rem] flex-col space-y-4">
      <h1 className="text-center text-[#EEBA2C] font-poppins text-2xl">
        Delete History
      </h1>
      <div className="overflow-auto h-full">
        <table className="w-full">
          <thead>
            <tr className="sticky top-0">
              <th className="py-1 px-7 bg-red-500 text-[#26272C]">Name</th>
              <th className="py-1 px-7 bg-red-500 text-[#26272C]">Gender</th>
              <th className="py-1 px-7 bg-red-500 text-[#26272C]">Age</th>
              <th className="py-1 px-7 bg-red-500 text-[#26272C]">Address</th>
              <th className="py-1 px-7 bg-red-500 text-[#26272C]">Time In</th>
              <th className="py-1 px-7 bg-red-500 text-[#26272C]">Time Out</th>
            </tr>
          </thead>
          <tbody>
            {deleteHistory.map((res, index) => (
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DeleteHistory;
