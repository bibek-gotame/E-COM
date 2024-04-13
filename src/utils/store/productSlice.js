import { createSlice } from "@reduxjs/toolkit";


const productSlice = createSlice({
    name:'products',
    initialState:{
        productList:null,
        productCategory:null,
    },
    reducers:{
        addProductList:(state,action)=>{
            state.productList = action.payload
        },
        addProductCategory:(state,action)=>{
            state.productCategory = action.payload
        }
    }
})

export const { addProductList,addProductCategory} = productSlice.actions
export default productSlice.reducer