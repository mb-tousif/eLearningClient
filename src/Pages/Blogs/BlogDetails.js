import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { useGetBlogByIdQuery } from '../../RTK/features/api/blogApi';
import Loader from '../../ShareCompnt/Loader';

export default function BlogDetails() {
    const { id } = useParams();
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {setIsReadMore(!isReadMore)};
    const { data, isLoading } = useGetBlogByIdQuery(id);
    if (isLoading === true) {
      return <Loader />;
    }

  return (
   <div className="block bg-gradient-to-r from-[#D0DAE3] to-[#ADCDED] rounded-lg shadow-lg text-center">
        <img
          className="w-full sm:h-80 h-52 p-2 sm:p-6 rounded-t-lg md:rounded-none md:rounded-l-lg"
          src={data.data.imageUrl}
          alt="title"
        />
        <div className="p-6">
          <h5 className="text-gray-900 text-xl font-medium mb-2">
            {data.data.title}
          </h5>
          <p className="text-gray-700 text-justify text-base mb-4">
            {isReadMore ? data.data.description.slice(0, 150) + " ...": data.data.description }
            { isReadMore ? <button className='hover:bg-[#2f3a8b] mt-3 float-right p-2 block hover:text-gray-50 transition ease-in-out duration-500 text-[#523d03] rounded bg-amber-400' onClick={toggleReadMore}> Read More</button> : <button className='hover:bg-[#2f3a8b] block float-right mt-3 p-2 hover:text-gray-50 transition ease-in-out duration-500 text-[#523d03] rounded bg-amber-400' onClick={toggleReadMore}> Read less</button>}
         </p>
        </div>
        <div className="py-3 px-6 text-right border-gray-300 text-gray-600">
            {data.data.createdAt}
        </div>
      </div>
  );
}
