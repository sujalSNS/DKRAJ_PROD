import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'User',
    initialState: {
        loading: false,
        authLoading: false,
        error: null,
        isLogin: false,
        user:{
            firstName: "",
            lastName: "",
            username: "",
            email: "",
            dob: "",
            isAdmin: false,
        }
    },
    reducers:{
        registerRequest: (state)=>{
            state.authLoading = true
        },
        registerSuccess: (state)=>{
            state.authLoading = false
        },
        registerFail: (state, action)=>{
            state.authLoading = false;
            state.error = action.payload
        },

        loginRequest: (state)=>{
            state.authLoading = true
        },
        loginSuccess: (state)=>{
            state.authLoading = false
        },
        loginFail: (state, action)=>{
            state.authLoading = false;
            state.error = action.payload
        },

        verifyLoginRequest: (state)=>{
            // state.loading = true
        },
        verifyLoginSuccess: (state, action)=>{
            state.isLogin = action.payload.isLogin
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