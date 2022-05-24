import { configureStore } from "@reduxjs/toolkit";
import userReducer from './Slices/userSlice'
import cartReducer from './Slices/cartSlice'

export default configureStore({
    reducer : {
        user : userReducer,
        cart: cartReducer,
    },
})