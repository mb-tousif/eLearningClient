import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItem: localStorage.getItem("cartItem") ? JSON.parse(localStorage.getItem("cartItem")) : [],
  quantity: localStorage.getItem("quantity") ? JSON.parse(localStorage.getItem("quantity")) : null,
  totalPrice: localStorage.getItem("totalPrice") ? JSON.parse(localStorage.getItem("totalPrice")) : null,
  discount: localStorage.getItem("discount") ? JSON.parse(localStorage.getItem("discount")) : null,
  finalPrice: localStorage.getItem("finalPrice") ? JSON.parse(localStorage.getItem("finalPrice")) : null,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItem: (state, action) => {
      const cartIndex = state.cartItem.findIndex(
        (item) => item._id === action.payload._id
      );
      if (cartIndex >= 0) {
        state.quantity += 1;
        state.totalPrice += action.payload.price;
        state.discount += action.payload.discount;
        state.finalPrice = state.totalPrice - state.discount;
        toast.info(
          `${state.cartItem[0].title} was added to your cart with ${state.quantity} times`
        );
      } else {
        state.cartItem.push(action.payload);
        state.quantity = action.payload.quantity;
        state.totalPrice += action.payload.price;
        state.discount += action.payload.discount;
        state.finalPrice = state.totalPrice - state.discount;
        toast.success(`${state.cartItem[0].title} is added to your cart!`);
      }
      localStorage.setItem("cartItem", JSON.stringify(state.cartItem));
      localStorage.setItem("quantity", JSON.stringify(state.quantity));
      localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
      localStorage.setItem("discount", JSON.stringify(state.discount));
      localStorage.setItem("finalPrice", JSON.stringify(state.finalPrice));
    },
    decreaseQuantity(state, action) {
      if (state.quantity >= 2) {
        state.quantity -= 1;
        state.totalPrice -= action.payload.price;
        state.discount -= action.payload.discount;
        state.finalPrice -= action.payload.price - action.payload.discount;
        localStorage.setItem("quantity", JSON.stringify(state.quantity));
        localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
        localStorage.setItem("discount", JSON.stringify(state.discount));
        localStorage.setItem("finalPrice", JSON.stringify(state.finalPrice));
        toast.info("Decreased Course quantity");
      } else{
        state.quantity = action.payload.quantity;
        toast.error("Quantity is always Positive Integer");
      }

      localStorage.setItem("cartItem", JSON.stringify(state.cartItem));
    },
    clearCart(state, action) {
      state.cartItem = [];
      state.quantity = null;
      state.totalPrice = null;
      state.discount = null;
      state.finalPrice = null;
      localStorage.removeItem("cartItem");
      localStorage.removeItem("quantity");
      localStorage.removeItem("totalPrice");
      localStorage.removeItem("discount");
      localStorage.removeItem("finalPrice");
      toast.error("Cart cleared");
    },
  },
});

export const { addCartItem, decreaseQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
