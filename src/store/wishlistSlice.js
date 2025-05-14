import {createSlice} from '@reduxjs/toolkit'

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState: [],
    reducers: {
        addWl: (state, action) => {
            state.push(action.payload)
        },

        removeWl: (state, action) => {
            return state.filter(product => product.id !== action.payload)
        }
    }
})

export const {addWl, removeWl} = wishlistSlice.actions
export default wishlistSlice.reducer