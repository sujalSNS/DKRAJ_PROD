import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'User',
    initialState: {
        loading: false,
        authLoading: false,
        error: null,
        isLogin: false,
        showLoginModal: false,
        user:{
            userID: "",
            firstName: "",
            lastName: "",
            username: "",
            email: "",
            dob: "",
            isAdmin: false,
            isFirebaseAuth: false,
            createdAt: "",
            updatedAt: ""
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
        getUserSuccess: (state, action)=>{
            state.loading = false
            state.user = action.payload
        },
        getUserFail: (state, action)=>{
            state.loading = false;
            state.error = action.payload
        },

        setShowLoginModalTrue: (state)=>{
            state.showLoginModal = true 
        },
        setShowLoginModalFalse: (state)=>{
            state.showLoginModal = false 
        }
    }
})

export const {registerRequest, registerSuccess,registerFail,loginRequest ,loginSuccess,loginFail, verifyLoginRequest, verifyLoginSuccess, verifyLoginFail, getUserRequest, getUserSuccess, getUserFail, setShowLoginModalTrue, setShowLoginModalFalse} = userSlice.actions 


export default userSlice.reducer