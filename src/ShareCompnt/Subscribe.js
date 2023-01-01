import React from 'react'
import { useNavigate } from 'react-router-dom';
import QR from '../Assets/QR.png'

export default function Subscribe() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center mx-auto my-8 py-10">
      <div className="max-w-5xl h-64 w-full rounded-lg shadow-md bg-gradient-to-r from-[#D0DAE3] to-[#ADCDED]">
        <h1 className="text-[#523d03] font-semibold sm:font-extrabold mt-2 mb-4 p-2 text-3xl sm:mt-8 sm:mb-4">
          Ready to start Learning ? Join Here...
        </h1>
        <button
          onClick={() => navigate("/login")}
          className="hover:bg-[#2f3a8b] hover:text-gray-50 transition ease-in-out duration-500 w-1/2 sm:w-1/3 md:w-1/4 text-[#523d03] rounded-xl h-10 bg-amber-400"
        >
          Get Started
        </button>
      </div>
      <div data-aos="zoom-out-down" data-aos-easing="ease-out-quad" data-aos-duration="6000" className="bg-white -mt-24 shadow-md rounded-lg overflow-hidden">
        <div className="items-center justify-between py-10 px-5 shadow-2xl rounded-lg mx-auto text-center">
          <div className="px-2 -mt-6">
            <div className="text-center">
              <p className="text-[#523d03] text-lg font-medium">
                For Newsletters.
              </p>
              <img
                src={QR}
                alt="QR-code"
                className="h-36 sm:h-48 sm:w-48 w-36"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
