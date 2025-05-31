import { configureStore, createReducer } from "@reduxjs/toolkit";
import cartSlice from './slice/cartSlice';



const store = configureStore({
    reducers:{
        cart : cartSlice,
    }
});

