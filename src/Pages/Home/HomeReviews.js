import React from 'react'
import { reviews } from '../../Constant/Data';

export default function HomeReviews() {
  return (
    <div>
      <h1 className="text-[#523d03] font-semibold sm:font-extrabold text-3xl mt-12 mb-8">
        What our Students say
      </h1>
      <div className="w-2/3 mx-auto mt-4 mb-4 h-2 bg-[#2c1668] rounded-3xl"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
        {reviews.map((review) => (
          <div class="max-w-sm mx-auto w-full key={review.id} lg:flex">
            <div
              class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
              style={{ backgroundImage: `url(${review.imageUrl})`, backgroundSize: "cover",backgroundPosition: "center"}}
              title="Our Ex-Student"
            ></div>
            <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <div class="mb-8">
                <div class="text-gray-900 font-bold text-xl mb-2">
                  Ex-Student Review
                </div>
                <p class="text-gray-700 text-base lg:text-justify">{review.review}</p>
              </div>
              <div class="flex items-center">
                <div class="text-sm">
                  <p class="text-gray-900 leading-none">{review.name}</p>
                  <p class="text-gray-600">{review.position}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

