//Importing require files
import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";


//Api calling

export const createUser  =  createAsyncThunk("createUser",async function(loginData){
  const response = await axios.post("http://localhost:4000/user/userLogin",loginData);
  return response.data

});

const userSlice = createSlice({
  name:"user",
  initialState:{
    isLoading:false,
    data:null,
    isError:false
  },
  extraReducers:function(builder){
    builder
        .addCase(createUser.fulfilled, (state,action)=>{
          state.isloading = false;
          state.data = action.payload;
          console.log("data ==> ", state.data);
          localStorage.setItem("token",JSON.stringify(action.payload.auth_token));
          
        });
        builder
        .addCase(createUser.pending, (state,action)=>{
          state.loading = true;
          state.data = null;
        });
        builder
        .addCase(createUser.rejected , (state,action)=>{
          console.log("error",action.payload);
          state.isError = true;
        })
  }
});

export default userSlice.reducer;