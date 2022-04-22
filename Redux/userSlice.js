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
    },
})

export const { login } = userSlice.actions
export default userSlice.reducer                                                        