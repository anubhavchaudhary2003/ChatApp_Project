import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../store/slice/userSlice.js'


export const store = configureStore({
  reducer: {
    user:userReducer
  },


})
