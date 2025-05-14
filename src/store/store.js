import {configureStore} from '@reduxjs/toolkit'
import productReducer from './productSlice.js'
import wishlistReducer from './wishlistSlice.js'
import cartReducer from './cartSlice.js'

const store = configureStore({
    reducer: {
        product: productReducer,
        cart: cartReducer,
        wishlist: wishlistReducer
    }
})

export default store