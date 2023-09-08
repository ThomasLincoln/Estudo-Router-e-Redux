import { createSlice } from "@reduxjs/toolkit";

const userState = {
  loggedIn: false,
  user: { id: 0, username: "" },
};

const firstState = {
  user: { id: 0, username: "" },
};

const loginSlice = createSlice({
    name: 'Login',
    initialState: userState, 
    reducers:{
        loggIn: (state, action) => {
            state.user = action.payload;
            state.loggedIn = true;
        },
        loggOut: (state) =>{
            state.user = firstState.user;
            state.loggedIn = false;
        }
    }
})

export const {loggIn, loggOut} = loginSlice.actions;

export default loginSlice.reducer;
