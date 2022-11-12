import React from 'react'

export default function AddBlog() {
  return (
    <div className="p-2">
      <h1 className="text-[#523d03] font-semibold sm:font-extrabold text-3xl mt-12 mb-8">
        Write Your Blog
      </h1>
      <div className="w-2/3 mx-auto mt-4 mb-4 h-2 bg-[#2c1668] rounded-3xl"></div>
      <div className="block p-6 rounded-lg shadow-lg bg-gradient-to-r from-[#D0DAE3] to-[#ADCDED] max-w-4xl mx-auto mt-6">
        <form>
          <div className="mb-6">
            <input
              type="text"
              className="block w-full px-3 py-1.5 text-left text-gray-50 bg-[#535e68] bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out focus:outline-none"
              placeholder="Writer Name"
            />
          </div>
          <div className="mb-6">
            <input
              type="text"
              className="block w-full px-3 py-1.5 text-left text-gray-50 bg-[#535e68] bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out focus:outline-none"
              placeholder="Blog Tittle"
            />
          </div>
          <div className="mb-6">
            <input
              type="file"
              className="block w-full px-3 py-1.5 text-left text-gray-50 bg-[#535e68] bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out focus:outline-none"
              placeholder="Blog Picture"
            />
          </div>
          <div className="mb-6">
            <textarea
              className=" block w-full px-3 py-1.5 text-left font-normal text-gray-50 bg-[#535e68] bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out focus:outline-none"
              placeholder="Message"
            ></textarea>
          </div>
          <button
            type="button"
            className="w-2/3 sm:w-1/2 hover:bg-[#2f3a8b] bg-amber-400 hover:text-gray-50 px-6 py-2.5 text-[#523d03] font-medium uppercase rounded shadow-md transition duration-150 ease-in-out"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
