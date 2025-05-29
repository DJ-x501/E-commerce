import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../api/axios";

export const register = createAsyncThunk(
  "user/registerUser",
  async (data, thunkAPI) => {
    try {
      const res = await axios.post("/registerUser",data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || "Fetch failed");
    }
  }
);
export const getProfile = createAsyncThunk(
  "user/getProfile",
  async (data, thunkAPI) => {
    try {
      const res = await axios.post("/getProfile",data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || "Fetch failed");
    }
  }
);


const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(getProfile.pending,(state)=>{
        state.loading = true;
        state.error = null;
    })
    .addCase(getProfile.fulfilled,(state,action)=>{
        state.loading = false;
        state.user = action.payload;
    })
    .addCase(getProfile.rejected,(state,action)=>{
        state.loading = false;
        state.error = action.payload;
    })
  },
});


export default userSlice;