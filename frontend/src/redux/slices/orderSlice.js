import axios from "axios";
import { useSelector } from "react-redux";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
// const { userInfo } = useSelector(state => state.auth)


const userToken = localStorage.getItem('tokennn')
    ? localStorage.getItem('tokennn')
    : null


const initialState = {
    loading: false,
    userInfo: {},
    address: '',
    paymentType: false,
    card: '',
    userToken: null, // for storing the JWT
    error: null,
    success: false,
    orders:{} // for monitoring the registration process.
}


export const order = createAsyncThunk("order", async (cartItems, { rejectWithValue }) => {
    try {
        let token = localStorage.getItem('tokennn')
        const config = {
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`
            },
        }
        await axios.post(
            `${process.env.REACT_APP_BASE_ENDPOINT}/order`,
            cartItems,
            config
        )

    } catch (error) {
        // return custom error message from backend if present
        if (error.response && error.response.data.message) {
            return rejectWithValue(error.response.data.message)
        } else {
            return rejectWithValue(error.message)
        }
    }
})

export const getOrder = createAsyncThunk("getOrder", async () => {
    try {
        let token = localStorage.getItem('tokennn')
        console.log('neden getirmiyon');
        const config = {
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`
            },
        }
        let data = await axios.get(
            `${process.env.REACT_APP_BASE_ENDPOINT}/order`,
            config
        )

        return data

    } catch (error) {
        // return custom error message from backend if present
        console.log('burdamisinkiiiiiii');
        
    }
})

export const addAddress = createAsyncThunk("addAddress", async ({city,county,neighbourhood,addressTitle,text,user}, { rejectWithValue }) => {
    try {
        let token = localStorage.getItem('tokennn')
        console.log('token',city,county);
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        }
        await axios.post(
            `${process.env.REACT_APP_BASE_ENDPOINT}/address`,
            {city,county,neighbourhood,addressTitle,text,user},
            config
        )

    } catch (error) {
        // return custom error message from backend if present
        if (error.response && error.response.data.message) {
            return rejectWithValue(error.response.data.message)
        } else {
            return rejectWithValue(error.message)
        }
    }
})

export const getAddress = createAsyncThunk("getAddress", async (userId, { rejectWithValue }) => {
    try {
        let token = localStorage.getItem('tokennn')

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        }
        console.log('userneymisya',userId);
        const {data} = await axios.get(
            `${process.env.REACT_APP_BASE_ENDPOINT}/address`,
            config
        )

        console.log('addressessssss,',data);

        return data;

    } catch (error) {
        // return custom error message from backend if present
        if (error.response && error.response.data.message) {
            return rejectWithValue(error.response.data.message)
        } else {
            return rejectWithValue(error.message)
        }
    }
})

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        setCredentials: (state, { payload }) => {
            state.userInfo = payload
        },
        chooseAddress: (state, action) => {
            state.address = action.payload.address
        },
        addCard: (state, action) => {
            state.card = action.payload.card
        },
        addPaymentType: (state, action) => {
            state.paymentType = action.payload.paymentType
        },
    },
    extraReducers: {
        [order.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [order.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.success = true // registration successful
        },
        [order.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },
        [addAddress.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [addAddress.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.success = true // registration successful
        },
        [addAddress.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },
        [getAddress.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [getAddress.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.addresses = payload.adresler;
            state.success = true // registration successful
        },
        [getAddress.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },
        [getOrder.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [getOrder.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.orders = payload;
            state.success = true // registration successful
        },
        [getOrder.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        }
    },
})

export const { chooseAddress, addCard, addPaymentType } = orderSlice.actions
export default orderSlice.reducer