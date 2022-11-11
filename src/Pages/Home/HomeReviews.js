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
      {
        reviews.map( review => 
            <div key={review.id} className="flex mx-auto my-auto">
              <div className="mx-auto my-auto p-2">
                <img src={review.imageUrl} className="rounded-br-full" alt="Student" />
                <p className='mt-3 text-justify'>{review.name}</p>
                <p className='text-justify'>{review.position}</p>
              </div>
              <div className="p-2">
                <p className='text-justify'>{review.review}</p>
              </div>
            </div>
        )
      }
      </div>
    </div>
  );
}
