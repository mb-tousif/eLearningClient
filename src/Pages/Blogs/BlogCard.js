import React, { useState } from 'react'
import { blogs } from '../../Constant/BlogsData';

export default function BlogCard() {
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {setIsReadMore(!isReadMore)};
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {blogs.map((blog) => (
        <div key={blog.id} className="p-2 sm:p-4">
          <div className="block bg-gradient-to-r from-[#D0DAE3] to-[#ADCDED] rounded-lg shadow-lg text-center">
            <img
              className="w-full sm:h-80 h-60 rounded-t-lg md:rounded-none md:rounded-l-lg"
              src={blog.imgUrl}
              alt="title"
            />
            <div className="p-6">
              <h5 className="text-gray-900 text-xl font-medium mb-2">
                {blog.title}
              </h5>
              <p className="text-gray-700 text-justify text-base mb-4">
                {isReadMore ? blog.description.slice(0, 150) + " ...": blog.description }
                { isReadMore ? <button className='hover:bg-[#2f3a8b] mt-3 float-right p-2 block hover:text-gray-50 transition ease-in-out duration-500 text-[#523d03] rounded bg-amber-400' onClick={toggleReadMore}> Read More</button> : <button className='hover:bg-[#2f3a8b] block float-right mt-3 p-2 hover:text-gray-50 transition ease-in-out duration-500 text-[#523d03] rounded bg-amber-400' onClick={toggleReadMore}> Read less</button>}
              </p>
            </div>
            <div className="py-3 px-6 text-right border-gray-300 text-gray-600">
              2 days ago
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
