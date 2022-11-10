import React from 'react'
import ErrorImage from "../Assets/404.png"

export default function PageNotFound() {
  return (
    <div className="p-4 bg-gradient-to-r from-[#D0DAE3] to-[#ADCDED]">
      <div className="w-full">
        <img
          className="mx-auto my-auto p-2 shadow-2xl w-2/3 sm:h-96 h-60 rounded-xl animate-pulse"
          src={ErrorImage}
          alt="Page not found"
        />
      </div>
      <div className="mx-auto my-auto text-center">
        <h2 className="sm:text-3xl text-xl bolder font-extrabold">
          404-PAGE NOT FOUND!
        </h2>
        <h2 className="font-bold">
          The page you are looking for might have been removed or temporarily
          unavailable.
        </h2>
      </div>
    </div>
  );
}
