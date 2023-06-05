import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast'

const baseURL = 'https://api.syscomatic.com/api/v1';

// Async thunk action to handle registration
export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${baseURL}/auth/register`, userData, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      toast.success(response?.data?.message)
      return response?.data;
    } catch (error) {
      toast.error(error?.response?.data?.message)
      return rejectWithValue(error?.response?.data);
    }
  }
);

// Async thunk action to handle login
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${baseURL}/auth/login`, userData, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      toast.success("Logged In Successfully!")
      return response.data;
    } catch (error) {
      toast.error(error?.response?.data?.message);
      return rejectWithValue(error.response.data);
    }
  }
);