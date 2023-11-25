import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { MdOutlineVisibilityOff, MdOutlineVisibility } from "react-icons/md";
import { useForm } from "react-hook-form";
import Loader from '../../ShareCompnt/Loader';
import { useGetSignUpUserMutation } from '../../RTK/features/api/userApi';

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [createSignup, res] = useGetSignUpUserMutation();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    const image = data.image[0];
    const formData = new FormData()
    formData.append("image", image)
    const url = `https://api.imgbb.com/1/upload?key=da2f1e176fea3246b58bbffb26e211a6`;
    fetch( url, {
      method: "POST",
      body: formData
    })
    .then(res => res.json())
    .then(result => {
      if(result.success){
        const photoUrl= result.data.url;
        const signUpData = {
          fullName: data.fullName,
          email: data.email,
          password: data.password,
          role: data.role,
          contactNumber: data.contactNumber,
          image: photoUrl,
          gender: data.gender,
        };
        createSignup(signUpData)
      }
    })        
  };

  if (res.isLoading === true) {
    return <Loader />;
  }

  if (res.isSuccess === true ) {
    return navigate("/login");
  }

  return (
    <div>
      <div className="mx-auto mb-2 px-6">
        <div className="w-full xl:w-3/4 lg:w-11/12 mx-auto sm:p-4 p-2 my-auto">
          <div className="w-full mx-auto md:w-2/3 bg-white p-2 shadow-lg rounded-xl">
            <h3 className="pt-4 mb-2 text-center text-2xl font-medium">
              Register Here
            </h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-6">
                <label className="inline-block mb-2 text-gray-700">
                  Enter Your Name
                </label>
                <input
                  type="text"
                  {...register("fullName", { required: true })}
                  name="fullName"
                  className="block w-full px-3 py-1.5 text-base font-normal text-gray-50 bg-[#868d05] bg-clip-padding rounded-xl transition ease-in-out m-0 focus:outline-none"
                  placeholder="Enter your Full Name"
                />
                {errors.fullName && (
                  <p className="text-rose-600 text-center">
                    Full name is required.
                  </p>
                )}
              </div>
              <div className="mb-6">
                <label className="inline-block mb-2 text-gray-700">
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
              <div className="sm:flex sm:justify-evenly">
                {showPassword ? (
                  <div className="relative mb-6">
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
                      className="block min-w-full md:w-56 px-3 py-1.5 text-base font-normal text-gray-50 bg-[#868d05] bg-clip-padding rounded-xl transition ease-in-out m-0 focus:outline-none"
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
                      className="block h-10 w-full md:w-56 text-base font-normal text-gray-50 bg-[#868d05] bg-clip-padding rounded-xl transition ease-in-out m-0 focus:outline-none"
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
                <div className="mb-6">
                  <label className="inline-block mb-2 text-gray-700">
                    Contact Number
                  </label>
                  <input
                    type="number"
                    {...register("contactNumber", { required: true })}
                    name="contactNumber"
                    className="block w-full md:w-56 h-10 text-base font-normal text-gray-50 bg-[#868d05] bg-clip-padding rounded-xl transition ease-in-out m-0 focus:outline-none"
                    placeholder="Enter your Full Name"
                  />
                  {errors.contactNumber && (
                    <p className="text-rose-600 text-center">
                      Contact Number is required.
                    </p>
                  )}
                </div>
              </div>
              <div className="sm:flex sm:justify-evenly">
                <div className="mb-6">
                  <label className="inline-block mb-2 text-gray-700">
                    Profile Image
                  </label>
                  <input
                    type="file"
                    {...register("image", { required: true })}
                    name="image"
                    className="block w-full md:w-60 px-3 py-1.5 text-base font-normal text-gray-50 bg-[#868d05] bg-clip-padding rounded-xl transition ease-in-out m-0 focus:outline-none"
                    placeholder="Enter your Full Name"
                  />
                  {errors.image && (
                    <p className="text-rose-600 text-center">
                      Upload your profile picture.
                    </p>
                  )}
                </div>
                <div className="mb-6">
                  <label className="inline-block mb-2 mr-2 text-gray-700">
                    User Role
                  </label>
                  <select
                    className={`w-full h-10 text-center bg-[#868d05] text-gray-50 rounded-lg text-xl ${
                      errors.role &&
                      " focus:border-red-500 focus:ring-red-500 border-red-500"
                    }`}
                    {...register("role", { required: true })}
                  >
                    <option value="">--Select User--</option>
                    <option value="Student">Student</option>
                    <option value="Teacher">Teacher</option>
                  </select>
                  {errors.role && (
                    <p className="text-rose-600 text-center">
                      User role is required.
                    </p>
                  )}
                </div>
              </div>
              <div className="mb-6">
                <label className="inline-block mb-2 mr-2 text-gray-700">
                  Gender:
                </label>
                <input
                  id="male"
                  name="gender"
                  placeholder="Male"
                  {...register("gender", { required: true })}
                  type="radio"
                  value="Male"
                />
                <label
                  htmlFor="male"
                  className="inline-block mb-2 m-2 text-gray-700"
                >
                  Male
                </label>
                <input
                  id="female"
                  name="gender"
                  {...register("gender", { required: true })}
                  type="radio"
                  value="Female"
                />
                <label
                  htmlFor="female"
                  className="inline-block mb-2 m-2 text-gray-700"
                >
                  Female
                </label>
                <input
                  id="others"
                  name="gender"
                  {...register("gender", { required: true })}
                  type="radio"
                  value="Others"
                />
                <label
                  htmlFor="others"
                  className="inline-block mb-2 m-2 text-gray-700"
                >
                  Others
                </label>
                {errors.gender && (
                  <p className="text-rose-600 text-center">
                    Select your gender.
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="w-full bg-[#868d05] hover:bg-[#dba309] text-gray-50 px-6 py-2.5 font-medium text-xl rounded"
              >
                Sign Up
              </button>
              <p className="text-gray-800 mt-6 mb-4 font-medium text-center">
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
  );
}
