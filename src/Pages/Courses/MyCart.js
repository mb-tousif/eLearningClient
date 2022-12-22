import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BiMinus, BiPlus } from "react-icons/bi";
import { addCartItem, clearCart, decreaseQuantity } from '../../RTK/features/cartSlice/cartSlice';

export default function MyCart() {
  const shoppingCart = useSelector(state=>state.cart);
  const dispatch = useDispatch();
   const handleDecreaseCart = (course) => {
     dispatch(decreaseQuantity(course));
   };
   const handleIncreaseQuantity = (course) => {
     dispatch(addCartItem(course));
   };
   const handleClearCart = () => {
     dispatch(clearCart());
   };
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
            >Buy Course
            </Link>
          </div>
        </div>
      ) : (
        <div className="bg-gradient-to-l sm:w-[450px] from-[#165e9c] to-[#ADCDED] rounded-lg text-center p-5 mx-auto my-auto font-medium shadow-lg">
          {shoppingCart.cartItem.map((course) => (
            <div key={course._id} className="py-2 sm:text-xl text-2xl">
              {course.category}
              <div className="font-bold sm:text-xl text-2xl mt-3">
                {course.title}
              </div>
              <hr />
              <div className="font-bold text-lg my-3">
                Price: $ {shoppingCart.totalPrice}
              </div>
              <hr />
              <div className="font-bold flex justify-evenly text-lg my-3">
                <button>
                  <BiMinus onClick={()=> handleDecreaseCart(course)} />
                </button>
                Quantity: {shoppingCart.quantity}
                <button>
                  <BiPlus onClick={ ()=> handleIncreaseQuantity(course)} />
                </button>
              </div>
              <hr />
              <div className="font-bold text-lg my-3">
                Discount AMT: $ {shoppingCart.discount}
              </div>
              <hr />
              <div className="font-bold text-lg my-3">
                Payable AMT: $ {shoppingCart.finalPrice}
              </div>
              <hr />
              <div className="font-bold mb-2 flex justify-around text-lg">
                <button onClick={()=>handleClearCart()} className="text-rose-600 hover:bg-rose-600 hover:text-gray-50 mt-2 px-3 py-1.5 rounded-xl bg-[#ecedf7]">
                  Cancel
                </button>
                <button className="text-[#165e9c] hover:bg-amber-400 hover:text-[#523d03] mt-2 px-3 py-1.5 rounded-xl bg-[#ecedf7]">
                  Enroll
                </button>
              </div>
              <hr />
              <div className="mb-4 py-6">
                <Link
                  to="/courses"
                  className="hover:bg-[#2f3a8b] p-2.5 hover:text-gray-50 transition ease-in-out duration-500 text-[#523d03] rounded-xl h-10 bg-amber-400"
                >
                  <span>Continue Shopping</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
