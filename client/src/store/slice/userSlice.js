import { createSlice } from '@reduxjs/toolkit'
import { loginUserThunk, registerUserThunk } from './user/userThunk.js';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isAuthenticated: false
  },
  reducers: {
    Login: () => {
      console.log("Login action dispatched");
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUserThunk.pending, (state) => {
        console.log("Fetching user by ID...");
      })
      .addCase(loginUserThunk.fulfilled, (state, action) => {
        console.log("User fetched successfully:", action.payload);
      })
      .addCase(loginUserThunk.rejected, (state, action) => {
        console.error("Failed to fetch user:", action.error);
      })
      .addCase(registerUserThunk.pending, (state) => {
        console.log("Fetching user by ID...");
      })
      .addCase(registerUserThunk.fulfilled, (state, action) => {
        console.log("User fetched successfully:", action.payload);
      })
      .addCase(registerUserThunk.rejected, (state, action) => {
        console.error("Failed to fetch user:", action.error);
      });
  }
});

export const { Login } = userSlice.actions

export default userSlice.reducer