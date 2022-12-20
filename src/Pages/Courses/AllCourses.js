import React from "react";
import Loader from "../../ShareCompnt/Loader";
import { useGetAllCoursesQuery } from "../../RTK/features/api/courseApi";
import { useDispatch } from "react-redux";
import { addCartItem } from "../../RTK/features/cartSlice/cartSlice";

export default function AllCourses() {
  
  const dispatch = useDispatch();

  const { data, isLoading} = useGetAllCoursesQuery();

  if (isLoading === true) {
    return <Loader />;
  }

  const handleAddToCart = ( course) =>{
    dispatch(addCartItem(course))
  }

  return (
    <section className="text-gray-600 grid pt-2 pb-4 mx-auto grid-cols-1">
      {data.data.map((course) => (
        <div key={course._id} className="p-2">
          <div className="border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <img
              className="md:h-96 mx-auto sm:80 h-64 w-fit p-2 object-cover"
              src={course.imageUrl}
              alt="course"
            />
            <div className="p-6">
              <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                {course.category}
              </h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                {course.title}
              </h1>
              <p className="leading-relaxed mb-3 md:w-96 mx-auto">
                {course.description}
              </p>
              <div className="flex justify-around mb-2">
                <p className="ml-4">Discount: $ {course.discount}</p>
                <p className="ml-4">Price: $ {course.price}</p>
              </div>
              <button
                onClick={() => handleAddToCart(course)}
                className="hover:bg-[#2f3a8b] mb-2 hover:text-gray-50 transition ease-in-out duration-500 w-1/2 sm:w-1/3 md:w-1/4 text-[#523d03] rounded-2xl h-10 bg-amber-400"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
