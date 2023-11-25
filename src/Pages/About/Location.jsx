import { Fragment } from "react";
import { GoLocation } from "react-icons/go";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { branches } from "../../Constant/Data";


export default function Location() {
  return (
    <Fragment>
      <h2 className="text-lg sm:text-2xl mt-4 text-[#523d03] font-bold mb-2">
        World Wide Our Branches
      </h2>
      <div className="w-2/3 mx-auto mt-6 mb-4 h-2 bg-[#2c1668] rounded-3xl"></div>
      {/* Our Branches */}
      <div className="grid lg:grid-cols-6 p-2 m-4 md:grid-cols-3 gap-4">
        {branches.map((branch) => (
          <div key={branch.id} className="lg:mb-0 mb-6">
            <img
              src={branch.img}
              className="w-full rounded-md shadow-lg"
              alt="Branches"
            />
          </div>
        ))}
      </div>
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
    </Fragment>
  );
}
