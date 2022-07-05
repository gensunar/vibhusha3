import { configureStore } from "@reduxjs/toolkit";
import userReducer from './Slices/userSlice'
import cartReducer from './Slices/cartSlice'
import addressReducer from "./Slices/addressSlice"

export default configureStore({
    reducer : {
        user : userReducer,
        cart: cartReducer,
        address : addressReducer,
    },
})