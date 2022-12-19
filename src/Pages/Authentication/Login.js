import React, { useState } from "react";
import login from "../../Assets/login.png";
import { MdOutlineVisibilityOff, MdOutlineVisibility } from "react-icons/md";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useGetLoginUserMutation } from "../../RTK/features/api/postUser";
import Loader from "../../ShareCompnt/Loader";
import { toast } from "react-toastify";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false);
  const [ createLogin, res ] = useGetLoginUserMutation();

  const onSubmit = (data) => {
    createLogin(data)
  };
  console.log(res);
  
  if(res.isLoading === true){
    return <Loader/>
  }
  
  if (res.isSuccess === true) {
    // localStorage.setItem("token", res.data.token);
    toast.success("Login Success");
    navigate("/");
  }


  return (
    <div>
      <div className="container mx-auto">
        <div className="flex justify-center px-6 my-12">
          <div className="w-full xl:w-3/4 lg:w-11/12 flex shadow-xl">
            <div className="w-full h-auto bg-[#868d05] hidden sm:block lg:w-1/2 bg-cover rounded">
              <img src={login} alt="Login" />
            </div>
            <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
              <h3 className="pt-4 mb-2 text-center text-2xl font-medium">
                Login
              </h3>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                  <label className="inline-block mb-2 text-gray-700">
                    Email address
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
                    className="block w-full px-3 py-1.5 text-base font-normal text-gray-50 bg-[#868d05] bg-clip-padding rounded-xl transition ease-in-out m-0 focus:outline-none"
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
                  <div className="relative mb-4">
                    <label className="inline-block mb-2 text-gray-700">
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
                      className="block w-full px-3 py-1.5 text-base font-normal text-gray-50 bg-[#868d05] bg-clip-padding rounded-xl transition ease-in-out m-0 focus:outline-none"
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
                  <div className="relative mb-6">
                    <label className="inline-block mb-2 text-gray-700">
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
                      className="block w-full px-3 py-1.5 text-base font-normal text-gray-50 bg-[#868d05] bg-clip-padding rounded-xl transition ease-in-out m-0 focus:outline-none"
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
                  Login
                </button>
                <p className="text-gray-800 mt-4 mb-4 font-medium text-center">
                  New to here ?
                  <Link to="/signUp" className="ml-2">
                    Create an Account!
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
