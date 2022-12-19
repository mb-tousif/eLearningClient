import React from 'react'
import { useForm } from "@formspree/react";
import { MdOutgoingMail } from "react-icons/md";
import helpAvatar from "../../Assets/blog.svg";


export default function StudentSupport() {
  const [state, handleSubmit] = useForm("mgedqyov");

  return (
    <div className="mx-auto pb-4 text-[#1b167b]">
      <p className="text-2xl text-[#868d05] mt-4 font-bold">Student Support Page.</p>
      <div className="container md:flex bg-[#d7b454] mt-4 pb-2 mx-auto my-auto bg-neutral rounded-xl shadow-xl">
        <img src={helpAvatar} className="sm:block bg-gradient-to-l from-[#D0DAE3] to-[#ADCDED] bg-clip-padding hidden m-2 shadow-xl p-2 rounded-xl  w-52" alt="Tell us your Problems" />
        <form onSubmit={handleSubmit} className="md:m-6 m-2">
          <h2 className="text-xl font-medium pt-4 text-center text-primary m-3">
            Let us know your Problem
          </h2>
          <div>
            <label htmlFor="name">User Email</label>
            <input
              id="email"
              type="email"
              name="email"
              className="block w-full px-3 py-1.5 text-base font-normal bg-[#868d05] bg-clip-padding rounded-xl transition ease-in-out m-0 focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="course">Course Name</label>
            <input
              id="course"
              type="text"
              name="course"
              className="block w-full px-3 py-1.5 text-base font-normal bg-[#868d05] bg-clip-padding rounded-xl transition ease-in-out m-0 focus:outline-none"
            />
          </div>
          <div className="mx-auto mt-2">
            <textarea
              id="message"
              name="message"
              placeholder="Describe your problems"
              className="textarea form-control block w-full px-3 py-1.5 text-center font-normal bg-gradient-to-l from-[#D0DAE3] to-[#ADCDED] bg-clip-padding rounded-xl transition ease-in-out m-0 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="mt-2 w-full h-10 rounded-xl flex justify-center py-2 bg-[#868d05] hover:bg-[#dba309] text-gray-50 my-auto"
            disabled={state.submitting}
          >
            SEND <MdOutgoingMail className="w-6 h-6 ml-2" />
          </button>
        </form>
        {state.succeeded ? (
          <p className="text-xl font-semiBold text-center m-3">
            Thanks for your message. We will join with you within Six Hours! 
          </p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
