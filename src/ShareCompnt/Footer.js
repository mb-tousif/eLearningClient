import React from 'react'
import logo from "../Assets/log.png";

export default function Footer() {
  return (
    <div className="bg-[#012379] text-[#a3a10a] p-2 md:p-4">
      <div className="p-2">
        <img className="h-16 md:h-20 mx-auto my-auto md:w-40 w-32" src={logo} alt="Logo" />
      </div>
      <p className="text-base md:text-xl">
        Best Learning Platform Since 2020.
      </p>
      <p>
        Copyright &#169; {new Date().getFullYear()} - All right reserved.
      </p>
    </div>
  );
}
