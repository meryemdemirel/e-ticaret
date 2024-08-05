import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// import taskReducer from "./reducers/taskReducer";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import categorySlice from "./slices/categorySlice";
import productSlice from "./slices/productSlice";
import cartSlice from "./slices/cartSlice";
import authSlice from "./slices/authSlice";
import orderSlice from "./slices/orderSlice";

import { authApi } from "services/auth/authService";

const store = configureStore({
  reducer:{
    categories: categorySlice,
    products: productSlice,
    carts: cartSlice,
    auth: authSlice,
    order: orderSlice,
    [authApi.reducerPath]: authApi.reducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

export default store;