import React from 'react'
import { useNavigate } from 'react-router-dom';
import HeroPicture from '../../Assets/education.svg'

export default function HeroSection() {
    const navigate = useNavigate()
  return (
    <div className='bg-gradient-to-r from-[#D0DAE3] to-[#ADCDED]'>
      <div className="p-2 sm:flex justify-between">
        <div className="my-auto flex justify-center">
          <div className="h-40 sm:ml-8 sm:h-60 w-2 bg-[#ffca3d]"></div>
          <div className="ml-3 text-[#523d03] sm:text-2xl md:text-3xl my-auto font-bold">
            <h1 className="text-left">The Best Online Courses,</h1>
            <h1 className="text-left">You Will Find,</h1>
            <h1 className="text-left">Any Where In The World.</h1>
            <p className="text-xs text-left sm:p-2 sm:text-lg">
              Best Learning Platform Since 2020.
            </p>
          </div>
        </div>
        <div className="sm:mr-6">
          <img src={HeroPicture} alt="HeroPicture" className='sm:h-80 h-48 mx-auto' />
        </div>
      </div>
      <div className="p-4 pb-8">
        <button onClick={()=> navigate("/login")} className="hover:bg-[#2f3a8b] hover:text-gray-50 transition ease-in-out duration-500 w-1/2 sm:w-1/3 md:w-1/4 text-[#523d03] rounded-2xl h-10 bg-amber-400">
          Get Started
        </button>
      </div>
    </div>
  );
}
