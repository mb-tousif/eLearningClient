import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import login from "../../Assets/login1.svg";
import { MdOutlineVisibilityOff, MdOutlineVisibility } from "react-icons/md";
import { useForm } from "react-hook-form";

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const onSubmit = (data) => {
    // signInWithEmailAndPassword(data.email, data.password);
    console.log(data);
    if(data!=null){
      navigate("/login")
    }
  };
  return (
    <div>
      <div className="container mx-auto">
        <div className="flex justify-center px-6 my-12">
          <div className="w-full xl:w-3/4 lg:w-11/12 flex">
            <div className="w-full h-auto bg-[#868d05] hidden sm:block lg:w-1/2 bg-cover rounded">
              <img src={login} className="p-2" alt="Login" />
            </div>
            <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
              <h3 className="pt-4 mb-2 text-center text-2xl font-medium">
                Register Here
              </h3>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group mb-6">
                  <label className="form-label inline-block mb-2 text-gray-700">
                    Enter Your Name
                  </label>
                  <input
                    type="text"
                    {...register("name", { required: true })}
                    name="name"
                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-50 bg-[#868d05] bg-clip-padding rounded-xl transition ease-in-out m-0 focus:outline-none"
                    placeholder="Name"
                  />
                  {errors.name && (
                    <p className="text-rose-600 text-center">
                      Name is required.
                    </p>
                  )}
                </div>
                <div className="form-group mb-6">
                  <label className="form-label inline-block mb-2 mr-2 text-gray-700">
                    User Type
                  </label>
                  <select
                    className={`w-full h-8 text-center bg-[#868d05] text-gray-50 rounded-lg text-xl ${
                      errors.user &&
                      " focus:border-red-500 focus:ring-red-500 border-red-500"
                    }`}
                    {...register("user", { required: true })}
                  >
                    <option value="">--Select User--</option>
                    <option value="Guest">Guest</option>
                    <option value="Student">Student</option>
                    <option value="Teacher">Teacher</option>
                    <option value="Administration">Administration</option>
                  </select>
                  {errors.user && (
                    <p className="text-rose-600 text-center">
                      User type is required.
                    </p>
                  )}
                </div>
                <div className="form-group mb-6">
                  <label className="form-label inline-block mb-2 text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    {...register("email", {
                      pattern: {
                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                        message: "Provide a valid Email",
                      },
                      required: {
                        value: true,
                        message: "Email is required",
                      },
                    })}
                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-50 bg-[#868d05] bg-clip-padding rounded-xl transition ease-in-out m-0 focus:outline-none"
                    placeholder="Enter email"
                  />
                  {errors.email?.type === "pattern" && (
                    <p className="text-rose-600 text-center">
                      {errors.email.message}
                    </p>
                  )}
                  {errors.email?.type === "required" && (
                    <p className="text-rose-600 text-center">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                {showPassword ? (
                  <div className="relative form-group mb-6">
                    <label className="form-label inline-block mb-2 text-gray-700">
                      Password
                    </label>
                    <input
                      type="text"
                      name="password"
                      {...register("password", {
                        minLength: {
                          value: 6,
                          message: "Password min-length six characters",
                        },
                        required: {
                          value: true,
                          message: "Password is required",
                        },
                      })}
                      className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-50 bg-[#868d05] bg-clip-padding rounded-xl transition ease-in-out m-0 focus:outline-none"
                      placeholder="Password"
                    />
                    {errors.password?.type === "minLength" && (
                      <p className="text-rose-600 text-center">
                        {errors.password.message}
                      </p>
                    )}
                    {errors.password?.type === "required" && (
                      <p className="text-rose-600 text-center">
                        {errors.password.message}
                      </p>
                    )}
                    <MdOutlineVisibility
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute text-slate-700 right-0 top-[37px] mr-4 cursor-pointer"
                      size={28}
                    />
                  </div>
                ) : (
                  <div className="relative form-group mb-6">
                    <label className="form-label inline-block mb-2 text-gray-700">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      {...register("password", {
                        minLength: {
                          value: 6,
                          message: "Password min-length six characters",
                        },
                        required: {
                          value: true,
                          message: "Password is required",
                        },
                      })}
                      className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-50 bg-[#868d05] bg-clip-padding rounded-xl transition ease-in-out m-0 focus:outline-none"
                      placeholder="Password"
                    />
                    {errors.password?.type === "minLength" && (
                      <p className="text-rose-600 text-center">
                        {errors.password.message}
                      </p>
                    )}
                    {errors.password?.type === "required" && (
                      <p className="text-rose-600 text-center">
                        {errors.password.message}
                      </p>
                    )}
                    <MdOutlineVisibilityOff
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute text-slate-700 right-0 top-[37px] mr-4 cursor-pointer"
                      size={28}
                    />
                  </div>
                )}
                <button
                  type="submit"
                  className="w-full bg-[#868d05] hover:bg-[#dba309] text-gray-50 px-6 py-2.5 font-medium text-xl rounded"
                >
                  Sign Up
                </button>
                <p className="text-gray-800 mt-6 font-medium text-center">
                  Already have an Account ?
                  <Link to="/login" className="ml-2">
                    Login
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
