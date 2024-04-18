import { createSlice } from "@reduxjs/toolkit";


const productSlice = createSlice({
    name:'products',
    initialState:{
        productList:null,
        productCategory:null,
        productDetails:null,

    },
    reducers:{
        addProductList:(state,action)=>{

            state.productList = action.payload
            // state.renderingData = action.payload
        },
        addProductCategory:(state,action)=>{
            state.productCategory = action.payload
        },
        addProductDetails:(state,action)=>{
            state.productDetails = action.payload
        }
    }
})

export const { addProductList,addProductCategory,addProductDetails} = productSlice.actions
export default productSlice.reducer