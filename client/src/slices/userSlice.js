import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'User',
    initialState: {
        loading: false,
        error: null,
        isLogin: false,
        user:{}
    },
    reducers:{
        registerRequest: (state)=>{
            state.loading = true
        },
        registerSuccess: (state)=>{
            state.loading = false
        },
        registerFail: (state, action)=>{
            state.loading = false;
            state.error = action.payload
        },

        loginRequest: (state)=>{
            state.loading = true
        },
        loginSuccess: (state)=>{
            state.loading = false
        },
        loginFail: (state, action)=>{
            state.loading = false;
            state.error = action.payload
        },

        verifyLoginRequest: (state)=>{
            // state.loading = true
        },
        verifyLoginSuccess: (state)=>{
            state.isLogin = action.payload
        },
        verifyLoginFail: (state, action)=>{
            state.isLogin = false;
            state.error = action.payload
        },

        getUserRequest: (state)=>{
            state.loading = true
        },
        getUserSuccess: (state)=>{
            state.loading = false
            state.user = action.payload
        },
        getUserFail: (state, action)=>{
            state.loading = false;
            state.error = action.payload
        },
    }
})

export const {registerRequest, registerSuccess,registerFail,loginRequest ,loginSuccess,loginFail, verifyLoginRequest, verifyLoginSuccess, verifyLoginFail, getUserRequest, getUserSuccess, getUserFail} = userSlice.actions 


export default userSlice.reducer