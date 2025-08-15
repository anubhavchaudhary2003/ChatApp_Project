import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../../utilities/axiosInstance.js';
import  toast from 'react-hot-toast';
export const loginUser = createAsyncThunk(
  'users/login',
  async ({username, password},{rejectWithValue}) => {
    try {
      const response = await axiosInstance.post('/user/login',{
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
export const registerUser = createAsyncThunk(
  'users/signup',
  async ({fullName,username, password},{rejectWithValue}) => {
    try {
      const response = await axiosInstance.post('/user/register',{
        fullName,
        username,
        password
      });
      toast.success('Registration successful!')
      return response.data;
    }
    catch (error) {
      if (error.response && error.response.data) {
        toast.error(error.response.data.message || 'Registration failed');
        return rejectWithValue(error.response.data);
      } else {
        toast.error('An unexpected error occurred');
        return rejectWithValue({ message: 'An unexpected error occurred' });
      }
    }
  }
);



