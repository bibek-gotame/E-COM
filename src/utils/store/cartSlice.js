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
            return state.addedCart.filter((cart) => cart.id != action.payload)
        },
        clearCart: () => {
            return null
        }
    }
})

export const { addToCart, removeCart, clearCart} = cartSlice.actions
export default cartSlice.reducer