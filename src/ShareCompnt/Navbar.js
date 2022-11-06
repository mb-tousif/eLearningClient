import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { MdOutlineMenuBook } from "react-icons/md";
import { FiBook } from "react-icons/fi";
import logo from "../Assets/log.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-[#020c53] text-[#ffca3d] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex flex-auto">
            <div className="mx-auto my-auto p-2">
              <img
                className="h-16 md:h-20 md:w-40 w-32"
                src={logo}
                alt="Logo"
              />
            </div>
            <div className="hidden mx-auto my-auto md:block">
              <div className="flex justify-end -mr-2 items-baseline">
                <Link
                  to="/"
                  className="px-3 py-2 justify-end rounded-md text-base md:text-lg font-medium"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="px-3 py-2 justify-end rounded-md text-base md:text-lg font-medium"
                >
                  About
                </Link>
                <Link
                  to="/courses"
                  className="px-3 py-2 justify-end rounded-md text-base md:text-lg font-medium"
                >
                  Courses
                </Link>
                <Link
                  to="/blogs"
                  className="px-3 py-2 justify-end rounded-md text-base md:text-lg font-medium"
                >
                  Blogs
                </Link>
                <Link
                  to="/login"
                  className="px-3 py-2 justify-end rounded-md text-base md:text-lg font-medium"
                >
                  Login
                </Link>
                <Link
                  to="/signUp"
                  className="px-3 py-2 justify-end rounded-md text-base md:text-lg font-medium"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
          <div onClick={() => setOpen(!open)} className="-mr-2 flex md:hidden">
            {open ? (
              <MdOutlineMenuBook className="w-8 h-8" />
            ) : (
              <FiBook className="w-8 h-8" />
            )}
          </div>
        </div>
      </div>
      <div
        className={`${
          open ? "block" : "hidden"
        } absolute z-20 bg-[#232274f9] w-full md:hidden opacity-90`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/"
            className="block px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block px-3 py-2 rounded-md text-base font-medium"
          >
            About
          </Link>
          <Link
            to="/courses"
            className="block px-3 py-2 rounded-md text-base font-medium"
          >
            Courses
          </Link>
          <Link
            to="/blogs"
            className="block px-3 py-2 rounded-md text-base font-medium"
          >
            Blogs
          </Link>
          <Link
            to="/dashboard"
            className="block px-3 py-2 rounded-md text-base font-medium"
          >
            Dashboard
          </Link>
          <Link
            to="/login"
            className="block px-3 py-2 rounded-md text-base font-medium"
          >
            Login
          </Link>
          <Link
            to="/signUp"
            className="block px-3 py-2 rounded-md text-base font-medium"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}
