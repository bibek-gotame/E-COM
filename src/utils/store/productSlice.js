import { createSlice } from "@reduxjs/toolkit";


const productSlice = createSlice({
    name:'products',
    initialState:{
        productList:null,
        productRender:null,
        productDetails:null,
        searchResult:null
        // error:'Loading'
    },
    reducers:{
        addProductList:(state,action)=>{

            state.productList = action.payload
            // state.renderingData = action.payload
        },
        addProductRender:(state,action)=>{
            
            state.productRender = action.payload
            // state.error = action.payload
        },
        addProductDetails:(state,action)=>{
            state.productDetails = action.payload
        },
        addsearchResult:(state,action)=>{
            state.searchResult = action.payload
        }
    }
})

export const { addProductList,addProductRender,addProductDetails,addsearchResult} = productSlice.actions
export default productSlice.reducer