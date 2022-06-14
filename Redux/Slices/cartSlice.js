import { createSlice } from "@reduxjs/toolkit";
import { cartState } from "../../components/Utils/User State/cartState";

const cartInfo = cartState();

const initialState = {
  products: cartInfo || [],
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
      // if (!itemExist) {
      //   // state.products.push(action.payload);
      //   const newProduct = { ...action.payload, cartQuantity: 1 };
      //   state.products.push(newProduct);
      //   state.quantity += 1;
      //   // state.total += action.payload.price;
      // }
      // const itemCount = state.products.findIndex((item) => item.productId === action.payload.productId)
      if (itemExist >= 0) {
        state.products[itemExist].cartQuantity += 1;
      } else {
        const newProduct = { ...action.payload, cartQuantity: 1 };
        state.products.push(newProduct);
        state.quantity += 1;
      }
      localStorage.setItem("cart", JSON.stringify(state.products));
    },
    increase: (state, action) => {
      const cartItem = state.products.find(
        (item) => item.productId === action.payload.id
      );
      cartItem.cartQuantity = cartItem.cartQuantity + 1;
      localStorage.setItem("cart", JSON.stringify(state.products));
      console.log(cartItem);
    },
    decrease: (state, action) => {
      const cartItem = state.products.find(
        (item) => item.productId === action.payload.id
      );
      if (cartItem.cartQuantity > 1) {
        cartItem.cartQuantity = cartItem.cartQuantity - 1;
        localStorage.setItem("cart", JSON.stringify(state.products));
      } else if (cartItem.cartQuantity === 1) {
        state.products = state.products.filter(
          (item) => item.productId != action.payload
        );
      }
    },
    remove: (state, action) => {
      state.products = state.products.filter(
        (item) => item.productId != action.payload
      );
      localStorage.setItem("cart", JSON.stringify(state.products))
    },
    totalPrice: (state, action) => {
      let { cartItemTotal } = state.products.reduce(
        (cartTotal, product) => {
          const { price, cartQuantity } = product;
          const itemTotal = price * cartQuantity;

          cartTotal.cartItemTotal += itemTotal;

          return cartTotal;
        },
        {
          cartItemTotal: 0,
        }
      );
      state.total = cartItemTotal;
    },
    clearCart: (state) => {
      state.products = []
      localStorage.setItem("cart", JSON.stringify(state.products))
    }
  },
});

export const { addProduct, increase, decrease, remove, totalPrice } =
  cartSlice.actions;
export default cartSlice.reducer;
