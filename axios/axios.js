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
      toast.success("Logged In Successfully!");
      localStorage.setItem('accessToken', response.data.accessToken);
      return response.data;
    } catch (error) {
      toast.error(error?.response?.data?.message);
      return rejectWithValue(error.response.data);
    }
  }
);

// Async thunk action to handle forget Password
export const forgetPassword = createAsyncThunk(
  'auth/forgetPassword',
  async (email, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${baseURL}/auth/forgot-password`, email, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      toast.success(response?.data?.message);
      return response.data;
    } catch (error) {
      toast.error(error?.response?.data?.message);
      return rejectWithValue(error.response.data);
    }
  }
);

//get user details
export const getUserDetails = createAsyncThunk(
  'auth/getUserDetails',
  async (getUserDetails, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${baseURL}/auth/me`, { getUserDetails }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });
      console.log('user', response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);