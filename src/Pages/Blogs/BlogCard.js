import React from 'react'
import { useGetAllBlogsQuery } from '../../RTK/features/api/blogApi';
import Loader from '../../ShareCompnt/Loader';
import { HiCursorClick } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';

export default function BlogCard() {
    const navigate = useNavigate();
    const { data, isLoading } = useGetAllBlogsQuery();
    if (isLoading === true) {
      return <Loader />;
    }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {data.data.map((blog) => (
        <div key={blog._id} className="p-2 sm:p-4">
          <div className="block bg-gradient-to-r from-[#D0DAE3] to-[#ADCDED] rounded-lg shadow-lg text-center">
            <img
              className="w-full sm:h-60 h-52 rounded-t-lg md:rounded-none md:rounded-l-lg"
              src={blog.imageUrl}
              alt="title"
            />
            <div className="p-6">
              <h5 className="text-gray-900 text-xl font-medium mb-2">
                {blog.title}
              </h5>
              <div className="flex justify-end">
                <button
                  className="flex font-semibold"
                  onClick={() => navigate(`/blog/${blog._id}`)}
                >
                  Blog Details
                  <HiCursorClick className="w-7 text-[#523d03] ml-3 animate-pulse mt-2 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
