import React from "react";
import Loader from "../../ShareCompnt/Loader";
import { useGetAllCoursesQuery } from "../../RTK/features/api/courseApi";
import { Link } from "react-router-dom";

export default function AllCourses() {
  const { data, isError, isLoading} = useGetAllCoursesQuery();
  if (isLoading === true) {
    return <Loader />;
  }
  if (isError){
    return <h1>An error occurred</h1>
  }
  return (
    <section className="text-gray-600 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {data.data.map((course) => (
        <div key={course._id} className="p-2">
          <div className="border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <img
              className="lg:h-48 md:h-36 w-full object-cover"
              src={course.imageUrl}
              alt="course"
            />
            <div className="p-6">
              <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                CATEGORY
              </h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                {course.tittle}
              </h1>
              <p className="leading-relaxed mb-3">{course.description}</p>
              <div className="flex justify-center flex-wrap">
                <Link
                  to="/courses/cart"
                  className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                >
                  Buy Now
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
                <p className="ml-4">Price: $ {course.price}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
