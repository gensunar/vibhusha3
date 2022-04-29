import { createSlice } from "@reduxjs/toolkit"
import { userState } from "../components/Utils/User State/userState"

const userInfo = userState()

const initialState = {
    user : userInfo || null,
}

export const userSlice = createSlice({
    name : "user",    //storename 
    initialState,

    reducers: {
        login : (state, action) => {
            state.user = action.payload
        },
        logout : (state) => {
            state.user = null
        }
    },
})

export const { login, logout } = userSlice.actions
export default userSlice.reducer                                                        