import React from 'react'
import { SiNodedotjs } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";

export default function NoticeBoard() {
  return (
    <div className="mx-auto text-[#1b167b]">
      <h1 className="text-xl mt-4 font-bold">Welcome to Notice Board</h1>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/2 md:w-full">
              <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                  <RiReactjsLine className="text-[#868d05] w-8 h-8" />
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                    React.js
                  </h2>
                  <p className="leading-relaxed text-base">
                    React is one of the most popular front-end JavaScript
                    libraries for building user interfaces. After completing
                    this course, you will be able to build web apps in modern
                    React, using patterns like functional components and hooks.
                  </p>
                  <a
                    href="#!"
                    className="mt-3 text-indigo-500 inline-flex items-center"
                  >
                    Coming Soon
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/2 md:w-full">
              <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                  <SiNodedotjs className="text-[#868d05] w-8 h-8" />
                </div>
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                    Node.js
                  </h2>
                  <p className="leading-relaxed text-base">
                    Learn how to use Node and Express in this comprehensive
                    course. First, you will learn the fundamentals of Node and
                    Express. Then, you will learn to build a complex Rest API.
                    Finally, you will build a MERN app and other Node projects.
                  </p>
                  <a
                    href="#!"
                    className="mt-3 text-indigo-500 inline-flex items-center"
                  >
                    Coming Soon
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}