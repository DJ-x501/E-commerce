import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slice/cartSlice";
import userSlice from "./slice/userSlice";

const userFromStorage = localStorage.getItem("token")
  ? JSON.parse(localStorage.getItem("token"))
  : null;

const store = configureStore({
  reducer: {
    cart: cartSlice,
    user: userSlice,
  },
  preloadedState: {
    user: {
      isLoading: false,
      data: userFromStorage,
      isError: false,
    },
  },
});

export default store;
