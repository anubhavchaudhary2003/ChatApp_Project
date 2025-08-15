import { createSlice } from '@reduxjs/toolkit'
import { loginUser, registerUser } from './user/userThunk.js';

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
      .addCase(loginUser.pending, (state) => {
        console.log("Fetching user by ID...");
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        console.log("User fetched successfully:", action.payload);
      })
      .addCase(loginUser.rejected, (state, action) => {
        console.error("Failed to fetch user:", action.error);
      })
      .addCase(registerUser.pending, (state) => {
        console.log("Fetching user by ID...");
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        console.log("User fetched successfully:", action.payload);
      })
      .addCase(registerUser.rejected, (state, action) => {
        console.error("Failed to fetch user:", action.error);
      });
  }
});

export const { Login } = userSlice.actions

export default userSlice.reducer