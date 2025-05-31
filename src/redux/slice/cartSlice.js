import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProduct = createAsyncThunk('fetchProduct',async function(){
  const response = await axios.get("http://localhost:8000/products");
  const data = await response.data;
})
const cartSlice = createSlice({
  name:cart,
  initialState:{
    isloading:false,
    data:null,
    isError:false,
  },
 
  extraReducers:(builder)=>{
    builder
    .addCase(fetchProduct.fulfilled, (state,action)=>{
      state.isloading = false;
      state.data = action.payload;
    });
    builder
    .addCase(fetchProduct.pending, (state,action)=>{
      state.loading = true;
      state.data = null;
    });
    builder
    .addCase(fetchProduct.rejected , (state,action)=>{
      console.log("error",action.payload);
      state.isError = true;
    })
  }
});

export default cartSlice.reducer;