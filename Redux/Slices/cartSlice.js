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
      const itemExist = state.products.find(
        (item) => item.productId === action.payload.productId
      );
      if (!itemExist) {
        // state.products.push(action.payload);
        const newProduct = { ...action.payload, cartQuantity: 1 };
        state.products.push(newProduct);
        state.quantity += 1;
        // state.total += action.payload.price;
      }
      // const itemCount = state.products.findIndex((item) => item.productId === action.payload.productId)
      // if (itemCount >= 0){
      //   state.products[itemCount].cartQuantity += 1;
      // }else{
      //   const newProduct = {...action.payload, cartQuantity: 1}
      //   state.products.push(newProduct)
      // }
    },
    increase: (state, { payload }) => {
      const cartItem = state.products.find(
        (item) => item.productId === payload.id
      );
      cartItem.cartQuantity = cartItem.cartQuantity + 1;
      console.log(cartItem)
    },
    decrease: (state, { payload }) => {
      const cartItem = state.products.find((item) => item.productId === payload.id);
      cartItem.cartQuantity = cartItem.cartQuantity - 1
    },
    remove: (state, action) => {
      state.products = state.products.filter((item) => item.productId != action.payload)
    },
    totalPrice: (state, action) => {
      let {cartItemTotal} = state.products.reduce((cartTotal, product)=> {
        const {price, cartQuantity} = product
        const itemTotal = price * cartQuantity

        cartTotal.cartItemTotal += itemTotal

        return cartTotal
      }, {
        cartItemTotal: 0,
      })
      state.total = cartItemTotal
    }
  },
});

export const { addProduct, increase, decrease, remove, totalPrice } = cartSlice.actions;
export default cartSlice.reducer;
