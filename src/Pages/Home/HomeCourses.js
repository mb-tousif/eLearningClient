import React from 'react'
import top from "../../Assets/student.png"
import { FaGlobeAsia } from "react-icons/fa";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { BsCodeSquare } from "react-icons/bs";
import { GiArtificialIntelligence } from "react-icons/gi";

export default function HomeCourses() {
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
          <img src={top} alt="student" />
        </div>
      </div>
      <div className="mt-4">
        <p className="sm:text-2xl text-lg sm:font-semibold mb-12 text-[#523d03]">
          Enroll By Category
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          <div className="p-2">
            <div className="hover:bg-[#65767b] p-2 text-[#ffca3d] rounded-2xl hover:text-[#523d03]">
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
            <div className="hover:bg-[#65767b] p-2 rounded-2xl text-[#ffca3d] hover:text-[#523d03]">
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
    </div>
  );
}

