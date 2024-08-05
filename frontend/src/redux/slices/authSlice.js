import axios from "axios";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const userToken = localStorage.getItem('tokennn')
    ? localStorage.getItem('tokennn')
    : null

const initialState = {
    loading: false,
    userInfo: {},
    userToken: null, // for storing the JWT
    error: null,
    success: false, // for monitoring the registration process.
}




export const register = createAsyncThunk("register", async ({ email, name, password,phone }, { rejectWithValue }) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        }
        await axios.post(
            `${process.env.REACT_APP_BASE_ENDPOINT}/register`,
            { name, email, password, phone },
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

export const login = createAsyncThunk(
    'login',
    async ({ email, password }, { rejectWithValue }) => {
        try {
            // configure header's Content-Type as JSON
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
            const { data } = await axios.post(
                `${process.env.REACT_APP_BASE_ENDPOINT}/login`,
                { email, password },
                config
            )
            // store user's token in local storage
            localStorage.setItem('tokennn', data.token)
            return data
        } catch (error) {
            // return custom error message from API if any
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, { payload }) => {
            state.userInfo = payload
        },
        logout: (state) => {
            localStorage.removeItem('tokennn')
            localStorage.removeItem('cart') // deletes token from storage
             // deletes token from storage
            state.loading = false
            state.userInfo = {}
            state.userToken = null
            state.error = null
        },
    },
    extraReducers: {
        // register user
        [register.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [register.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.success = true // registration successful
        },
        [register.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },
        [login.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [login.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.userInfo = payload
            state.userToken = payload.token
        },
        [login.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },
    },
})

export const { setCredentials, logout } = authSlice.actions
export default authSlice.reducer