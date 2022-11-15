import React from 'react'
import { FaGlobeAsia } from "react-icons/fa";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { BsCodeSquare } from "react-icons/bs";
import { GiArtificialIntelligence } from "react-icons/gi";

export default function AllCourses() {
  return (
    <div className="min-h-screen mx-auto my-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <div className="p-2">
          <div className="p-2 h-36 py-4 bg-gradient-to-r from-[#D0DAE3] to-[#ADCDED] hover:from-[#3A8678] rounded-2xl text-[#523d03]">
            <BsCodeSquare className="h-8 mx-auto w-12 mb-3" />
            <p className="text-2xl font-medium">Programming Languages</p>
          </div>
        </div>
        <div className="p-2">
          <div className="p-2 h-36 py-4 bg-gradient-to-r from-[#D0DAE3] to-[#ADCDED] hover:from-[#3A8678] rounded-2xl text-[#523d03]">
            <VscWorkspaceTrusted className="h-8 mx-auto w-12 mb-3" />
            <p className="text-2xl font-medium">Cyber Security</p>
          </div>
        </div>
        <div className="p-2">
          <div className="p-2 h-36 py-4 bg-gradient-to-r from-[#D0DAE3] to-[#ADCDED] hover:from-[#3A8678] rounded-2xl text-[#523d03]">
            <FaGlobeAsia className="h-8 mx-auto w-12 mb-3" />
            <p className="text-2xl font-medium">Web Development</p>
          </div>
        </div>
        <div className="p-2">
          <div className="p-2 h-36 py-4 bg-gradient-to-r from-[#D0DAE3] to-[#ADCDED] hover:from-[#3A8678] rounded-2xl text-[#523d03]">
            <GiArtificialIntelligence className="mx-auto h-8 w-12 mb-3" />
            <p className="text-2xl font-medium">AI & Machine Learning</p>
          </div>
        </div>
      </div>
    </div>
  );
}
