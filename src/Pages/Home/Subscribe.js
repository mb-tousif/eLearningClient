import React from 'react'
import QR from '../../Assets/QR.png'

export default function Subscribe() {
  return (
    <div className="container flex flex-col justify-center items-center mx-auto my-8 py-10">
      <div
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dW5pdmVyc2l0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60)",
        }}
        className="max-w-5xl bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-center"
      ></div>
      <div className="bg-white -mt-24 shadow-md rounded-lg overflow-hidden">
        <div
          style={{
            background:
              "linear-gradient(90deg, rgb(208, 218, 227), rgb(173, 205, 237))",
          }}
          className="items-center justify-between py-10 px-5 shadow-2xl rounded-lg mx-auto text-center"
        >
          <div className="px-2 -mt-6">
            <div className="text-center">
              <img
                src={QR}
                alt="QR-code"
                className="h-36 sm:h-48 sm:w-48 w-36"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
