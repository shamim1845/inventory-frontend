import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    isLoggedIn: false,
    name: ""
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        SET_LOGIN(state, action) {
            state.isLoggedIn = action.payload;
        },
        SET_NAME(state, action) {
            localStorage.setItem("name", JSON.stringify(action.payload));
            state.name = action.payload;
          },
    }
})

export const {SET_LOGIN, SET_NAME} = authSlice.actions;

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;


export default authSlice.reducer;