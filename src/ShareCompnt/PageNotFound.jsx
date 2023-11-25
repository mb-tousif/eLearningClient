import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import ErrorImage from "../Assets/404.png"

export default function PageNotFound() {

   const navigate = useNavigate();
   useEffect(() => {
     setTimeout(() => {
       navigate("/");
     }, 3000);
   }, [navigate]);

  return (
    <div className="p-4 text-[#523d03] bg-gradient-to-r from-[#D0DAE3] to-[#ADCDED]">
      <div className="w-full">
        <h2 className="sm:text-2xl text-xl bolder font-extrabold">
          404-PAGE NOT FOUND!
        </h2>
        <p>After 3sec User will be Auto Redirect to Home Page!</p>
        <img
          className="mx-auto my-auto p-2 shadow-2xl w-2/3 sm:h-96 h-60 rounded-xl animate-pulse"
          src={ErrorImage}
          alt="Page not found"
        />
      </div>
      <div className="mx-auto my-auto text-center">
        <h2 className="font-bold mb-4 mt-4">
          The page you are looking for might have been removed or temporarily
          unavailable.
        </h2>
      </div>
    </div>
  );
}
