import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        // addCartFlag: false,
        addedCart: [],

    },
    reducers: {
        // toggleAddCartFlag: (state) => {
        //     state.addCartFlag = !state.addCartFlag
        // },
        addToCart: (state, action) => {
            state.addedCart.push(action.payload)
        },
        removeCart: (state, action) => {
            //  return state.addedCart.filter((cart) => cart.id != action.payload)
             state.addedCart = state.addedCart.filter(item => item.id !== action.payload)
    
        },
        clearCart: (state) => {
            state.addedCart = []
            // return null
        }
    }
})

export const { addToCart, removeCart, clearCart } = cartSlice.actions
export default cartSlice.reducer