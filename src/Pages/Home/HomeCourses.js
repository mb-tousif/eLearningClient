import React from 'react'
import student from "../../Assets/student.png"
import onlineClass from "../../Assets/onlineClass.png"
import { FaGlobeAsia } from "react-icons/fa";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { BsCodeSquare } from "react-icons/bs";
import { GiArtificialIntelligence } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';

export default function HomeCourses() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex justify-around mb-4 text-[#523d03]">
        <div className="flex ml-4 p-4">
          <div className="h-16 sm:ml-8 sm:h-20 w-2 bg-[#ffca3d]"></div>
          <div className="ml-2 my-auto">
            <p className="text-left text-xs sm:text-lg font-bold">ALL</p>
            <p className="md:text-3xl sm:text-2xl text-lg font-extrabold">
              COURSES
            </p>
          </div>
        </div>
        <div className="h-30 w-12 my-auto">
          <img src={student} alt="student" />
        </div>
      </div>
      <div className="mt-4">
        <img src={onlineClass} className='mb-6 mx-auto' alt="" />
        <p className="sm:text-xl text-base w-2/3 mx-auto sm:font-semibold mb-12 text-[#523d03]">
          <span
            style={{
              background:
                "linear-gradient(90deg, rgb(208, 218, 227), rgb(173, 205, 237))",
            }}
            className="text-[#020c53] p-2 rounded-2xl"
          >
            Study With Scholar
          </span>
          is all about project-based learning. We create short highly-focused
          videos that make learning to level up your programming skills.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          <div className="p-2">
            <div className="hover:bg-[#023b74] p-2 text-[#ffca3d] rounded-2xl hover:text-[#523d03]">
              <FaGlobeAsia className="h-8 mx-auto w-12 mb-3" />
              <p className="text-2xl font-medium">Web Development</p>
            </div>
          </div>
          <div className="p-2">
            <div className="hover:bg-[#65767b] p-2 rounded-2xl text-[#ffca3d] hover:text-[#523d03]">
              <VscWorkspaceTrusted className="h-8 mx-auto w-12 mb-3" />
              <p className="text-2xl font-medium">Cyber Security</p>
            </div>
          </div>
          <div className="p-2">
            <div className="hover:bg-[#023b74] p-2 rounded-2xl text-[#ffca3d] hover:text-[#523d03]">
              <BsCodeSquare className="h-8 mx-auto w-12 mb-3" />
              <p className="text-2xl font-medium">Programming Language</p>
            </div>
          </div>
          <div className="p-2">
            <div className="hover:bg-[#65767b] p-2 rounded-2xl text-[#ffca3d] hover:text-[#523d03]">
              <GiArtificialIntelligence className="mx-auto h-8 w-12 mb-3" />
              <p className="text-2xl font-medium pb-4">AI & Machine Learning</p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 pb-8">
        <button
          onClick={() => navigate("/courses")}
          className="hover:bg-[#2f3a8b] hover:text-gray-50 transition ease-in-out duration-500 w-1/2 sm:w-1/3 md:w-1/4 text-[#523d03] rounded-2xl h-10 bg-amber-400"
        >
          All Courses
        </button>
      </div>
    </div>
  );
}
