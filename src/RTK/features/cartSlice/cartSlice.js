import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItem: [],
  quantity: null,
  totalPrice: null,
  discount: null,
  finalPrice: null,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItem: (state, action) => {
      const cartIndex =  state.cartItem.findIndex(item=> item._id === action.payload._id)
      if( cartIndex >=0 ){
          state.quantity +=1;
          state.totalPrice += action.payload.price;
          state.discount += action.payload.discount;
          state.finalPrice = state.totalPrice - state.discount;
          toast.info(`${state.cartItem[0].title} is added to your cart with ${state.quantity} times`);
      }else{
          state.cartItem.push(action.payload);
          state.quantity += 1;
          state.totalPrice += action.payload.price;
          state.discount += action.payload.discount;
          state.finalPrice = state.totalPrice - state.discount;
          toast.success(`${state.cartItem[0].title} is added to your cart!`);
      }
    },
  },
});

export const { addCartItem } = cartSlice.actions;

export default cartSlice.reducer;
