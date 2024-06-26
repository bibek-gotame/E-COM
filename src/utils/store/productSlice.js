import { createSlice } from "@reduxjs/toolkit";


const productSlice = createSlice({
    name:'products',
    initialState:{
        productList:null,
        productRender:null,
        productDetails:null,
        searchResult:null,
        productCategory:null
    },
    reducers:{
        addProductList:(state,action)=>{
            state.productList = action.payload
        },
        addProductRender:(state,action)=>{
            state.productRender = action.payload
        },
        addProductDetails:(state,action)=>{
            state.productDetails = action.payload
        },
        addsearchResult:(state,action)=>{
            state.searchResult = action.payload
        },
        addProductCategory:(state,action)=>{
            state.productCategory = action.payload
        }
    }
})

export const { addProductList,addProductRender,addProductDetails,addsearchResult,addProductCategory} = productSlice.actions
export default productSlice.reducer