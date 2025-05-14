import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

export const fetchProducts = createAsyncThunk("fetchProducts", ()=> {
    return fetch("https://dummyjson.com/products")
            .then(response => response.json())
})

const productSlice = createSlice({
    name: 'product',
    initialState: {
        isLoading: false,
        isError: false,
        data : []
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload.products
        })

        builder.addCase(fetchProducts.rejected, (state) => {
            state.isLoading = false;
            state.isError = true
        })
    }
})

export default productSlice.reducer