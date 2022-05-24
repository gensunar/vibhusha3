import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  quantity: 0, //number of items in cart
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addProduct: (state, action) => {
      const itemCount = state.products.findIndex((item) => item.productId === action.payload.productId)
      if (itemCount >= 0){
        state.products[itemCount].cartQuantity += 1;
      }else{
        const newProduct = {...action.payload, cartQuantity: 1}
        state.products.push(newProduct)
      }
      // state.products.push(action.payload);
      // state.total += action.payload.price;
      state.quantity += 1;
    },
    increase: (state, { payload }) => {
      const cartItem = state.products.find((item) => item.id === payload.id);
      // cartItem.quantity = cartItem.quantity + 1
      console.log(cartItem);
    },
    decrease: (state, { payload }) => {
      const cartItem = state.products.find((item) => item.id === payload.id);
      // cartItem.quantity = cartItem.quantity - 1
      console.log(cartItem);
    },
  },
});

export const { addProduct, increase, decrease } = cartSlice.actions;
export default cartSlice.reducer;
