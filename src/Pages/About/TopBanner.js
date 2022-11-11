import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { someBodies } from '../../Constant/Data';

export default function TopBanner() {
  return (
    <div className="mt-6">
      <div className="my-auto flex justify-center">
        <div className="h-28 ml-3 sm:ml-8 sm:h-40 w-2 bg-[#ffca3d]"></div>
        <div className="ml-3 text-[#523d03] sm:text-2xl md:text-3xl my-auto font-bold">
          <h1 className="text-left">Little Somebodies Are</h1>
          <h1 className="text-left">What We Do</h1>
          <p className="text-xs text-left sm:text-lg">
            "When you study great teachers… <br /> You will learn much more from
            their caring and hard work than from their style." – William Glasser
          </p>
        </div>
      </div>

      <div className="grid gap-x-6 p-3 lg:gap-x-12 md:grid-cols-3">
        {someBodies.map((student) => (
          <div key={student.id} className="m-2 mx-auto my-auto w-full">
            <div className="rounded-lg mt-24 shadow-lg h-full block bg-gradient-to-r from-[#D0DAE3] to-[#ADCDED] hover:from-[#3A8678]">
              <div className="flex justify-center">
                <div
                  className="flex justify-center"
                  style={{ marginTop: "-75px" }}
                >
                  <img
                    src={student.img}
                    className="rounded-full mx-auto shadow-lg"
                    alt="Student"
                    style={{ width: "150px" }}
                  />
                </div>
              </div>
              <div className="p-4  text-[#523d03]">
                <h5 className="text-lg font-bold mb-2">{student.name}</h5>
                <p className="mb-2">{student.role}</p>
                <ul className="flex mx-auto justify-center">
                  <BsFacebook className="m-2 w-6 h-6" />
                  <BsTwitter className="m-2 w-6 h-6" />
                  <FaLinkedinIn className="m-2 w-6 h-6" />
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
