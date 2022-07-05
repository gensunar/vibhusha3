import { createSlice } from "@reduxjs/toolkit";
import { addressState } from "../../components/Utils/User State/addressState"

const addressInfo = addressState()

const initialState = {
    address : addressInfo || null
}

export const addressSlice = createSlice({
    name: "address",
    initialState,

    reducers: {
        add: (state, action) => {
            state.address = action.payload.addId
        },
        remove: (state) => {
            state.address = null
        }
    }
})

export const { add } =
  addressSlice.actions;
export default addressSlice.reducer;