import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: 'Product',
    initialState: {
        loading: false,
        error: null,
        product:{},
        products:[]
    },
    reducers:{
        createProductRequest: (state)=>{
            state.loading = true
        },
        createProductSuccess: (state)=>{
            state.loading = false
        },
        createProductFail: (state, action)=>{
            state.loading = false;
            state.error = action.payload
        },

      
    }
})

export const {createProductRequest, createProductSuccess, createProductFail} = productSlice.actions 


export default productSlice.reducer