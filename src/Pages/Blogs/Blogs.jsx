import Subscribe from '../../ShareCompnt/Subscribe'
import BlogCard from './BlogCard'
import blog from '../../Assets/blog.png'
import AddBlog from './AddBlog';

export default function Blogs() {
  return (
    <div>
      <div data-aos="fade-right" data-aos-easing="ease-in-sine" className="flex justify-around mb-4 text-[#523d03]">
        <div className="flex ml-4 p-4">
          <div className="h-16 sm:ml-8 sm:h-20 w-2 bg-[#ffca3d]"></div>
          <div className="ml-2 my-auto">
            <p className="text-left text-xs sm:text-lg font-bold">OUR</p>
            <p className="md:text-3xl sm:text-2xl text-lg font-extrabold">
              BLOGS
            </p>
          </div>
        </div>
        <div className="h-30 w-12 my-auto">
          <img src={blog} alt="student" data-aos-easing="ease-out-cubic" data-aos="fade-left" />
        </div>
      </div>
      <BlogCard />
      <AddBlog/>
      <Subscribe />
    </div>
  );
}
