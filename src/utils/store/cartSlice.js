import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        addedCart: [],

    },
    reducers: {
        addToCart: (state, action) => {
            state.addedCart.push(action.payload)
        },
        removeCart: (state, action) => {
             state.addedCart = state.addedCart.filter(item => item.id !== action.payload)
        },
        clearCart: (state) => {
            state.addedCart = []
        }
    }
})

export const { addToCart, removeCart, clearCart } = cartSlice.actions
export default cartSlice.reducer