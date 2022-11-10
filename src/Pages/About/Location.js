import React from "react";
import { GoLocation } from "react-icons/go";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillTelephoneFill } from "react-icons/bs";

export default function Location() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-6 text-[#523d03]">
      <div className="p-4 mx-auto">
        <h1 className="text-xl sm:text-2xl font-bold mb-4">Get In Touch</h1>
        <div className="flex justify-start mb-4">
          <GoLocation className="h-8 w-8 my-auto font-bold" />
          <div className="ml-2">
            <h1 className="text-left text-lg font-medium">Our Address</h1>
            <p className="text-sm text-left">
              Level-XX/4, AWL Centre <br /> Banani, Dhaka-1234
            </p>
          </div>
        </div>
        <div className="flex justify-start mb-4">
          <HiOutlineMail className="h-8 w-8 my-auto font-bold" />
          <div className="ml-2">
            <h1 className="text-left text-lg font-medium">Email Address</h1>
            <p className="text-sm text-left">studyWithScholar@info.com</p>
          </div>
        </div>
        <div className="flex justify-start mb-4">
          <BsFillTelephoneFill className="h-8 w-8 my-auto font-bold" />
          <div className="ml-2">
            <h1 className="text-left text-lg font-medium">Hot-Line</h1>
            <p className="text-sm text-left">09588-000000</p>
          </div>
        </div>
      </div>
      <div className="p-4 flex justify-center sm:justify-start">
        <div className="w-4/5">
          <iframe
            title="Location"
            className="border-4 rounded-2xl w-full h-80"
            src="https://maps.google.com/maps?q=dhaka,%20bangladesh&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
