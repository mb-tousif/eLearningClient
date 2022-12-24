import React from 'react'
import { useGetAllCoursesQuery } from '../../RTK/features/api/courseApi';
import Loader from '../../ShareCompnt/Loader';

export default function MyCourses() {
  const { data, isLoading } = useGetAllCoursesQuery();
  if (isLoading === true) {
    return <Loader />;
  }

  return (
    <div className="mx-auto">
      <p className="text-lg text-center sm:p-4 font-bold">My Course Page</p>
      <div className="text-gray-600 gap-2 grid grid-cols-1 md:grid-cols-2">
        {data.data[0].courseVideo.map((course) => (
          <section key={course._id} className="m-2 p-2 mx-auto">
            <h1 className="text-lg font-medium">{course.playList}</h1>
            <iframe
              className="w-full sm:w-[450px] md:w-[400px] lg:w-[400] h-60 md:h-h80 my-auto"
              src={course.url}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </section>
        ))}
      </div>
    </div>
  );
}
