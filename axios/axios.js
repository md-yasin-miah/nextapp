import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast'

// Base URL
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

// Async thunk action to handle get user details
export const getProfile = createAsyncThunk(
  'user/fetchUserData',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${baseURL}/auth/me`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      });
      console.log('response', response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Axios instance for creating voice
export const createVoice = (voiceData) => {
  return axios.post(`${baseURL}/voice`, voiceData, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
    }
  });
};

// Axios instance for getting all voices
export const getAllVoices = () => {
  return axios.get(`${baseURL}/voice`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
    }
  });
};
//get allPlans
export const getAllPlans = createAsyncThunk(
  'plan/getAllPlans',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${baseURL}/plan`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
//subscribe to plan
export const subscribeToPlan = createAsyncThunk(
  'plan/subscribeToPlan',
  async (priceId, thunkAPI) => {
    try {
      const response = await axios.post(`${baseURL}/plan/price/${priceId}/checkout`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      });
      console.log('response', response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);