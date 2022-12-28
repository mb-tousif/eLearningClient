import React from 'react'
import { useGetAllReviewsQuery } from '../../RTK/features/api/reviewApi';
import Loader from '../../ShareCompnt/Loader';

export default function HomeReviews() {
  const { data, isLoading } = useGetAllReviewsQuery();
  if (isLoading === true) {
    return <Loader />;
  }
  return (
    <div>
      <h1 data-aos="fade-up-left" data-aos-easing="ease-out-quad" data-aos-duration="6000" className="text-[#523d03] font-semibold sm:font-extrabold text-3xl mt-12 mb-8">
        What our Students say
      </h1>
      <div className="w-2/3 mx-auto mt-4 mb-4 h-2 bg-[#2c1668] rounded-3xl"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
        {data.data.map((review) => (
          <div key={review._id} data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="max-w-sm mx-auto w-full lg:flex">
            <div
              className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
              style={{ backgroundImage: `url(${review.imageUrl})`, backgroundSize: "cover",backgroundPosition: "center"}}
              title="Our Ex-Student"
            ></div>
            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <div className="mb-8">
                <div className="text-gray-900 font-bold text-xl mb-2">
                  Ex-Student Review
                </div>
                <p className="text-gray-700 text-base lg:text-justify">{review.review}</p>
              </div>
              <div className="flex items-center">
                <div className="text-sm">
                  <p className="text-gray-900 leading-none">{review.name}</p>
                  <p className="text-gray-600">{review.position}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

