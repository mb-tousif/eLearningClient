import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { BsFacebook, BsTwitter } from "react-icons/bs";

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
        <div className="m-2 mx-auto my-auto w-full">
          <div className="rounded-lg mt-24 shadow-lg h-full block bg-gradient-to-r from-[#D0DAE3] to-[#ADCDED] hover:from-[#3A8678]">
            <div className="flex justify-center">
              <div
                className="flex justify-center"
                style={{ marginTop: "-75px" }}
              >
                <img
                  src="https://mdbootstrap.com/img/new/avatars/6.jpg"
                  className="rounded-full mx-auto shadow-lg"
                  alt="Student"
                  style={{ width: "150px" }}
                />
              </div>
            </div>
            <div className="p-4  text-[#523d03]">
              <h5 className="text-lg font-bold mb-2">Marta Smith</h5>
              <p className="mb-2">Web Developer</p>
              <ul className="flex mx-auto justify-center">
                <BsFacebook className="m-2 w-6 h-6" />
                <BsTwitter className="m-2 w-6 h-6" />
                <FaLinkedinIn className="m-2 w-6 h-6" />
              </ul>
            </div>
          </div>
        </div>
        <div className="m-2 w-full mx-auto my-auto">
          <div className="rounded-lg mt-24 shadow-lg w-full h-full block bg-gradient-to-r from-[#D0DAE3] to-[#ADCDED] hover:from-[#3A8678]">
            <div className="flex justify-center">
              <div
                className="flex justify-center"
                style={{ marginTop: "-75px" }}
              >
                <img
                  src="https://mdbootstrap.com/img/new/avatars/15.jpg"
                  className="rounded-full mx-auto shadow-lg"
                  alt="Student"
                  style={{ width: "150px" }}
                />
              </div>
            </div>
            <div className="p-4  text-[#523d03]">
              <h5 className="text-lg font-bold mb-2">Jenifer Florence</h5>
              <p className="mb-2">Our Teacher</p>
              <ul className="flex mx-auto justify-center">
                <BsFacebook className="m-2 w-6 h-6" />
                <BsTwitter className="m-2 w-6 h-6" />
                <FaLinkedinIn className="m-2 w-6 h-6" />
              </ul>
            </div>
          </div>
        </div>
        <div className="m-2 w-full mx-auto my-auto">
          <div className="rounded-lg mt-24 shadow-lg w-full h-full block bg-gradient-to-r from-[#D0DAE3] to-[#ADCDED] hover:from-[#3A8678]">
            <div className="flex justify-center">
              <div
                className="flex justify-center"
                style={{ marginTop: "-75px" }}
              >
                <img
                  src="https://mdbootstrap.com/img/new/avatars/2.jpg"
                  className="rounded-full mx-auto shadow-lg"
                  alt="Student"
                  style={{ width: "150px" }}
                />
              </div>
            </div>
            <div className="p-4 text-[#523d03]">
              <h5 className="text-lg font-bold mb-2">Jon Wicks</h5>
              <p className="mb-2">Software Engineer</p>
              <ul className="flex mx-auto justify-center">
                <BsFacebook className="m-2 w-6 h-6" />
                <BsTwitter className="m-2 w-6 h-6" />
                <FaLinkedinIn className="m-2 w-6 h-6" />
              </ul>
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-lg sm:text-2xl mt-12 text-[#523d03] font-bold mb-2">
        World Wide Our Branches
      </h2>
      <div className="w-2/3 mx-auto mt-6 mb-4 h-2 bg-[#2c1668] rounded-3xl"></div>
      {/* Our Branches */}
      <div className="grid lg:grid-cols-6 p-2 m-4 md:grid-cols-3 gap-4">
        <div className="lg:mb-0 mb-6">
          <img
            src="https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp"
            className="w-full rounded-md shadow-lg"
            alt="Branches"
          />
        </div>
        <div className="lg:mb-0 mb-6">
          <img
            src="https://mdbcdn.b-cdn.net/img/new/fluid/city/111.webp"
            className="w-full rounded-md shadow-lg"
            alt="Branches"
          />
        </div>
        <div className="lg:mb-0 mb-6">
          <img
            src="https://mdbcdn.b-cdn.net/img/new/fluid/city/112.webp"
            className="w-full rounded-md shadow-lg"
            alt="Branches"
          />
        </div>
        <div className="lg:mb-0 mb-6">
          <img
            src="https://mdbcdn.b-cdn.net/img/new/fluid/city/114.webp"
            className="w-full rounded-md shadow-lg"
            alt="Branches"
          />
        </div>
        <div className="lg:mb-0 mb-6">
          <img
            src="https://mdbcdn.b-cdn.net/img/new/fluid/city/115.webp"
            className="w-full rounded-md shadow-lg"
            alt="Branches"
          />
        </div>
        <div className="lg:mb-0 mb-6">
          <img
            src="https://mdbcdn.b-cdn.net/img/new/fluid/city/116.webp"
            className="w-full rounded-md shadow-lg"
            alt="Branches"
          />
        </div>
      </div>
    </div>
  );
}
