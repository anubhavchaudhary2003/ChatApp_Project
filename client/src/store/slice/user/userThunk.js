import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../../utilities/axiosInstance.js';
import { toast } from 'react-toastify';
export const loginUserThunk = createAsyncThunk(
  'users/fetchById',
  async ({username, password},{rejectWithValue}) => {
    try {
      const response = await axiosInstance.post('/login',{
        username,
        password
      });

      return response.data;
    }
    catch (error) {
      if (error.response && error.response.data) {
        toast.error(error.response.data.message || 'Login failed');
        return rejectWithValue(error.response.data);
      } else {
        toast.error('An unexpected error occurred');
        return rejectWithValue({ message: 'An unexpected error occurred' });
      }
    }
  }
);