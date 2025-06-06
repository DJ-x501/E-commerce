import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  total: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
      state.total += parseInt(action.payload.price);
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
