const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const { STATUS } = require("utils/status");

const initialState = {
    products: [],
    productsStatus: STATUS.IDLE,
    productDetail: [],
    productDetailStatus: STATUS.IDLE
}

export const getProducts = createAsyncThunk('getProducts', async() => {
    const response = await fetch(`${process.env.REACT_APP_BASE_ENDPOINT}/product`)
    const data = await response.json();
    return data;
})

export const getDetailProduct = createAsyncThunk('getProduct', async(id) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`)
    const data = await response.json();
    return data;
})

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers:{},
    extraReducers: (builder) =>{
        builder
        .addCase(getProducts.pending, (state, action) => {
            state.productsStatus = STATUS.LOADING;
        })
        .addCase(getProducts.fulfilled, (state, action) => {
            state.productsStatus = STATUS.SUCCESS;
            state.products = action.payload;
        })
        .addCase(getProducts.rejected, (state, action) => {
            state.productsStatus = STATUS.FAIL;
        })
        .addCase(getDetailProduct.pending, (state, action) => {
            state.productDetailStatus = STATUS.LOADING;
        })
        .addCase(getDetailProduct.fulfilled, (state, action) => {
            state.productDetailStatus = STATUS.SUCCESS;
            state.productDetail = action.payload;
        })
        .addCase(getDetailProduct.rejected, (state, action) => {
            state.productDetailStatus = STATUS.FAIL;
        })

    }
})

export default productSlice.reducer