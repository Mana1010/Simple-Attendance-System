import React from "react";
import { motion } from "framer-motion";

export default function AttendanceFormNotification() {
  return (
    <div className="w-[200px] h-[40px] bg-white absolute bottom-3">
      <div className="flex justify-center items-center h-full">
        <span className="text-green-500">
          <ion-icon name="checkmark-done-outline"></ion-icon>
        </span>
        <h1 className="text-green-600 font-poppins">Added Successfully</h1>
      </div>
    </div>
  );
}
