import React, { Fragment } from "react";
import student from "../../Assets/student.png"
import onlineClass from "../../Assets/onlineClass.png"
import { FaGlobeAsia } from "react-icons/fa";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { BsCodeSquare } from "react-icons/bs";
import { GiArtificialIntelligence } from "react-icons/gi";
import { Link, useNavigate } from 'react-router-dom';

export default function HomeCourses() {
  const navigate = useNavigate();
  return (
    <Fragment>
      <div className="grid grid-cols-2 gap-1 mb-4 text-[#523d03]">
        <div className="flex ml-4 p-4  mx-auto" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
          <div className="h-16 sm:ml-8 sm:h-20 w-2 bg-[#ffca3d]"></div>
          <div className="ml-2 my-auto">
            <p className="text-left text-xs sm:text-lg font-bold">ALL</p>
            <p className="md:text-3xl sm:text-2xl text-lg font-extrabold">
              COURSES
            </p>
          </div>
        </div>
        <div className="h-30 w-12 my-auto mx-auto">
          <img src={student} alt="student" data-aos-easing="ease-out-cubic" data-aos="fade-left" />
        </div>
      </div>
      <div className="mt-4">
        <img src={onlineClass} data-aos="zoom-out" className="mb-6 mt-3 mx-auto" alt="" />
        <div className="grid gap-x-4 gap-y-4 p-6 md:grid-cols-2">
          <div className="p-2" data-aos="zoom-in-right">
            <Link to="/courses">
              <div className="p-2 bg-gradient-to-r from-[#D0DAE3] to-[#ADCDED] hover:from-[#3A8678] rounded-2xl text-[#523d03]">
                <FaGlobeAsia className="h-8 mx-auto w-12 mb-3" />
                <p className="text-2xl font-medium">Web Development</p>
              </div>
            </Link>
          </div>
          <div className="p-2" data-aos="zoom-out-up">
            <Link to="/courses">
              <div className="p-2 bg-gradient-to-r from-[#D0DAE3] to-[#ADCDED] hover:from-[#3A8678] rounded-2xl text-[#523d03]">
                <VscWorkspaceTrusted className="h-8 mx-auto w-12 mb-3" />
                <p className="text-2xl font-medium">Cyber Security</p>
              </div>
            </Link>
          </div>
          <div className="p-2" data-aos="zoom-out-down">
            <Link to="/courses">
              <div className="p-2 bg-gradient-to-r from-[#D0DAE3] to-[#ADCDED] hover:from-[#3A8678] rounded-2xl text-[#523d03]">
                <BsCodeSquare className="h-8 mx-auto w-12 mb-3" />
                <p className="text-2xl font-medium">Programming Languages</p>
              </div>
            </Link>
          </div>
          <div className="p-2" data-aos="zoom-in-left">
            <Link to="/courses">
              <div className="p-2 bg-gradient-to-r from-[#D0DAE3] to-[#ADCDED] hover:from-[#3A8678] rounded-2xl text-[#523d03]">
                <GiArtificialIntelligence className="mx-auto h-8 w-12 mb-3" />
                <p className="text-2xl font-medium">AI & Machine Learning</p>
              </div>
            </Link>
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
    </Fragment>
  );
}

