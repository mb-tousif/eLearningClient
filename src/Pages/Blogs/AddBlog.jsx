import { useForm } from 'react-hook-form';
import { usePostBlogMutation } from '../../RTK/features/api/blogApi';
import Loader from '../../ShareCompnt/Loader';

export default function AddBlog() {
  const { register, handleSubmit, formState: { errors },} = useForm();
  const [postBlog, res] = usePostBlogMutation();
  const onSubmit = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    // const url =`https://api.imgbb.com/1/upload?key=${process.env.REACT_IBB_API_KEY}`;
    const url = `https://api.imgbb.com/1/upload?key=ae1d7490ab9268cd599c51b094ff6570`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const photoUrl = result.data.url;
          const blogData = {
            title: data.title,
            user: data.user,
            imageUrl: photoUrl,
            description: data.blogDescription
          };
          postBlog(blogData);
        }
      });
  };

  if (res.isLoading === true) {
    return <Loader />;
  }

  return (
    <div className="p-2">
      <h1 className="text-[#523d03] font-semibold sm:font-extrabold text-3xl mt-12 mb-8">
        Write Your Blog
      </h1>
      <div className="w-2/3 mx-auto mt-4 mb-4 h-2 bg-[#2c1668] rounded-3xl"></div>
      <div className="block p-6 rounded-lg shadow-lg bg-gradient-to-r from-[#D0DAE3] to-[#ADCDED] max-w-4xl mx-auto mt-6">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6">
            <input
              type="text"
              {...register("user", { required: true })}
              name="user"
              className="block w-full px-3 py-1.5 text-left text-gray-50 bg-[#535e68] bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out focus:outline-none"
              placeholder="Writer Name"
            />
            {errors.user && (
              <p className="text-rose-600 text-center">
                Writer name is required.
              </p>
            )}
          </div>
          <div className="mb-6">
            <input
              type="text"
              {...register("title", { required: true })}
              name="title"
              className="block w-full px-3 py-1.5 text-left text-gray-50 bg-[#535e68] bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out focus:outline-none"
              placeholder="Blog Title"
            />
            {errors.title && (
              <p className="text-rose-600 text-center">
                Blog Title is required.
              </p>
            )}
          </div>
          <div className="mb-6">
            <input
              type="file"
              {...register("image", { required: true })}
              name="image"
              className="block w-full px-3 py-1.5 text-left text-gray-50 bg-[#535e68] bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out focus:outline-none"
              placeholder="Blog Picture"
            />
            {errors.image && (
              <p className="text-rose-600 text-center">Upload Blog picture.</p>
            )}
          </div>
          <div className="mb-6">
            <textarea
              {...register("blogDescription", { required: true })}
              name="blogDescription"
              className=" block w-full px-3 py-1.5 text-left font-normal text-gray-50 bg-[#535e68] bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out focus:outline-none"
              placeholder="Blog Description"
            ></textarea>
            {errors.blogDescription && (
              <p className="text-rose-600 text-center">
                Blog Description is required.
              </p>
            )}
          </div>
          <button
            type="submit"
            className="w-2/3 sm:w-1/2 hover:bg-[#2f3a8b] bg-amber-400 hover:text-gray-50 px-6 py-2.5 text-[#523d03] font-medium uppercase rounded shadow-md transition duration-150 ease-in-out"
          >
            Post Blog
          </button>
        </form>
      </div>
    </div>
  );
}
