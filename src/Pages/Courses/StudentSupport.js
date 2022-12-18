import React from 'react'
import { useForm } from "@formspree/react";
import { MdOutgoingMail } from "react-icons/md";

export default function StudentSupport() {
  const [state, handleSubmit] = useForm("mgedqyov");

  return (
    <div className="mx-auto">
      <p className="text-lg mt-4 font-bold">Student Support Page.</p>
      <div className="container mt-4 mx-auto my-auto bg-neutral shadow-xl">
        <form onSubmit={handleSubmit} className="md:m-6 m-2">
          <h2 className="md:text-2xl text-xl text-center text-primary m-3">
            Let us know your Problem
          </h2>
          <div className="mx-auto">
            <label htmlFor="name">User Name</label>
            <input
              id="name"
              type="text"
              name="name"
              className="block w-full px-3 py-1.5 text-base font-normal text-gray-50 bg-[#868d05] bg-clip-padding rounded-xl transition ease-in-out m-0 focus:outline-none"
            />
          </div>
          <div className="mx-auto">
            <label htmlFor="course">Course Name</label>
            <input
              id="course"
              type="text"
              name="course"
              className="block w-full px-3 py-1.5 text-base font-normal text-gray-50 bg-[#868d05] bg-clip-padding rounded-xl transition ease-in-out m-0 focus:outline-none"
            />
          </div>
          <div className="mx-auto mt-2">
            <textarea
              id="message"
              name="message"
              placeholder="Describe your problems"
              className="textarea form-control block w-full px-3 py-1.5 text-center font-normal text-gray-700 bg-[#e8d779] bg-clip-padding rounded-xl transition ease-in-out m-0 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="mt-2 flex mx-auto my-auto"
            disabled={state.submitting}
          >
            SEND <MdOutgoingMail className="w-5 h-5 ml-2" />
          </button>
        </form>
        {state.succeeded ? (
          <p className="text-xl font-semiBold text-center m-3">
            Thanks for your Feedback!
          </p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
