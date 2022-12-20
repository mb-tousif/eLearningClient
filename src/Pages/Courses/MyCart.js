import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function MyCart() {
  const shoppingCart = useSelector(state=>state.cart)
  return (
    <div className="mx-auto mb-4">
      <p className="text-lg mt-4 mb-4 font-bold">Course Cart</p>
      {shoppingCart.cartItem.length === 0 ? (
        <div className="mx-auto my-auto p-6">
          <h1 className="text-2xl text-rose-600 font-semibold">
            You did not add any course for Purchase
          </h1>
          <div className="m-2 mb-2 mt-20">
            <Link
              to="/courses"
              className="hover:bg-[#2f3a8b] mb-2 p-2.5 hover:text-gray-50 transition ease-in-out duration-500 text-[#523d03] rounded-xl h-10 bg-amber-400"
            >
              <span>Buy Course</span>
            </Link>
          </div>
        </div>
      ) : (
        <div class="bg-gradient-to-l sm:w-[450px] from-[#165e9c] to-[#ADCDED] rounded-lg text-center p-5 mx-auto my-auto font-medium shadow-lg">
          <div class="py-2 text-2xl">
            Web Development
            <div class="font-bold text-2xl mt-3">Next.js Tutorial</div>
            <hr />
            <div class="font-bold text-lg my-3">Price: 120</div>
            <hr />
            <div class="font-bold text-lg my-3">Quantity: 1</div>
            <hr />
            <div class="font-bold text-lg my-3">Discount AMT: $10</div>
            <hr />
            <div class="font-bold text-lg my-3">Payable AMT: $110</div>
            <hr />
            <div class="font-bold flex justify-around text-lg">
              <button className="text-rose-600 mt-2 px-3 py-1.5 rounded-xl bg-[#ecedf7]">
                Cancel
              </button>
              <button className="text-[#FFD422] mt-2 px-3 py-1.5 rounded-xl bg-[#010979]">
                Enroll
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
