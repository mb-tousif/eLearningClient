import React, { Fragment } from 'react'
import { FaServicestack } from "react-icons/fa";
import avatar from "../../Assets/femaleStudent.png"
import tutor from "../../Assets/tutor.png"
import updated from "../../Assets/updated.png";
import lifetime from "../../Assets/life.png";
import weekly from "../../Assets/weekly.png";

export default function Facilities() {
  return (
    <Fragment>
      <h1 className="text-[#523d03] font-semibold sm:font-extrabold text-3xl mt-12 mb-8">
        Students Facilities <FaServicestack className="inline" />
      </h1>
      <p className="sm:text-xl w-2/3 text-justify mx-auto sm:font-semibold mb-12 text-[#523d03]">
        <span className="text-[#020c53] p-2 bg-gradient-to-r from-[#D0DAE3] to-[#ADCDED] hover:from-[#3A8678] rounded-2xl">
          Study With Scholar
        </span>
        is all about project-based learning. We create short highly-focused
        videos that make learning to level up your programming skills.
      </p>
      <div className="container grid sm:grid-cols-2 grid-cols-1">
        <div className="grid sm:grid-cols-2 grid-cols-1">
          <div className="p-3">
            <img src={tutor} alt="mentor" className="mx-auto h-20 w-24" />
            <p className="text-[#044d07] p-2 font-medium sm:font-semibold text-xl">
              Expert Tutor
            </p>
            <p className="text-[#032d61] text-justify">
              Expert All of our tutors have met or exceeded our minimum
              requirements to become a tutor with wide experience. We set an
              extremely high bar for our tutor applicants, ensuring that we only
              put our students in the most-qualified hands.
            </p>
          </div>
          <div className="p-3">
            <img src={lifetime} alt="mentor" className="mx-auto h-20 w-24" />
            <p className="text-[#044d07] p-2 font-medium sm:font-semibold text-xl">
              Lifetime Access
            </p>
            <p className="text-[#032d61] text-justify">
              We take our classes in online. After class we provide our lecture
              for our student in their courses page. If any student miss the
              class they can complete it in online and We also provide our
              student lifetime access.
            </p>
          </div>
          <div className="p-3">
            <img src={updated} alt="mentor" className="mx-auto h-20 w-24" />
            <p className="text-[#044d07] p-2 font-medium sm:font-semibold text-xl">
              Updated Technology
            </p>
            <p className="text-[#032d61] text-justify">
              We take class Four days in week. Every week we kept some event for
              our students like Quiz, Projects, Exams, Jobs Interviews and so
              on. We believe that with proper education Students can succeed in
              their life.
            </p>
          </div>
          <div className="p-3">
            <img src={weekly} alt="mentor" className="mx-auto h-20 w-24" />
            <p className="text-[#044d07] p-2 font-medium sm:font-semibold text-xl">
              Weekly Events
            </p>
            <p className="text-[#032d61] text-justify">
              Expert All of our tutors have met or exceeded our minimum
              requirements to become a tutor with wide experience. We set an
              extremely high bar for our tutor applicants, ensuring that we only
              put our students in the most-qualified hands.
            </p>
          </div>
        </div>
        <div className="mx-auto my-auto">
          <h1 className="text-[#032d61] text-justify font-semibold sm:font-extrabold text-2xl mt-4 p-2">
            Making Your Learning <br /> More Enjoyable
          </h1>
          <p className="text-[#044d07] text-justify p-2 font-normal sm:font-medium text-lg mb-8">
            We try to teach our students with the Best Technology and
            Effectively that will take them towards their goal.
          </p>
          <div className="p-4">
            <div className="rounded-xl bg-gradient-to-r from-[#D0DAE3] to-[#ADCDED]">
              <img src={avatar} alt="Avatar" className="w-56 mx-auto h-60" />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
