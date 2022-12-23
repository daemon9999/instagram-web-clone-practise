import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: false
}

const auth = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        }
    }
})

export default auth.reducer
export const {setUser} = auth.actions