import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast'

// Base URL
const baseURL = 'https://api.syscomatic.com/api/v1';
const token = localStorage.getItem('accessToken');
//stringify the token
const tokenString = JSON.stringify(token);
// Authenticated config with Authorization header
const config = {
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token}`,
  },
};

const configMT = {
  headers: {
    //multipart/form-data
    "Content-Type": "multipart/form-data",
    Authorization: `Bearer ${token}`,
  },
};
// Config with Content-Type header
const configCT = {
  headers: {
    "Content-Type": "application/json",
  },
};

// Async thunk action to handle registration
export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${baseURL}/auth/register`, userData, configCT);
      toast.success(response?.data?.message || "Registered Successfully!")
      return response?.data;
    } catch (error) {
      toast.error(error?.response?.data?.message)
      return rejectWithValue(error?.response?.data || error?.message || "Something went wrong!");
    }
  }
);

// Async thunk action to handle login
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${baseURL}/auth/login`, userData, configCT);
      toast.success("Logged In Successfully!");
      localStorage.setItem('accessToken', response.data.accessToken);
      return response.data;
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something went wrong!");
      return rejectWithValue(error.response.data);
    }
  }
);

// Async thunk action to handle forget Password
export const forgetPassword = createAsyncThunk(
  'auth/forgetPassword',
  async (email, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${baseURL}/auth/forgot-password`, email, configCT);
      toast.success(response?.data?.message || "Password reset link sent to your email!");
      return response.data;
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something went wrong!");
      return rejectWithValue(error.response.data);
    }
  }
);

// Async thunk action to handle get user details
export const getProfile = createAsyncThunk(
  'user/fetchUserData',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${baseURL}/auth/me`, config);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Async thunk action to handle update user details
export const updateProfile = createAsyncThunk(
  'user/updateUserData',
  async (userData, thunkAPI) => {
    try {
      const response = await axios.put(`${baseURL}/user/profile`, userData, config);
      toast.success(response?.data?.message || "Profile Updated Successfully!");
      return response.data;
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something went wrong!");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Axios instance for creating voice
export const createVoice = (voiceData) => {
  return axios.post(`${baseURL}/voice`, voiceData, config);
};

// Axios instance for getting all voices
export const getAllVoices = createAsyncThunk(
  'voice/getAllVoices',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${baseURL}/voice`, config);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//get allPlans
export const getAllPlans = createAsyncThunk(
  'plan/getAllPlans',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${baseURL}/plan`, config);
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
      const response = await axios.post(`${baseURL}/plan/price/${priceId}/checkout`, config);
      console.log('subscribeToPlan', response);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// fetchUserMusic
export const fetchUserMusic = createAsyncThunk('userMusic/fetchUserMusic', async () => {
  const response = await axios.get(`${baseURL}/music/user`, configMT);
  return response.data;
});

// createMusic
export const convertMusic = createAsyncThunk('musicConversion/convertMusic', async (formData) => {
  const response = await axios.post(`${baseURL}/music/convert`, formData, configMT);
  console.log('response', response.data);
  return response.data;
});

// downloadMusic
export const downloadMusic = createAsyncThunk('musicDownload/downloadMusic', async (musicId) => {
  const response = await axios.get(`${baseURL}/music/${musicId}/download`, configMT);
  return response.data;
});

// streamMusic
export const streamMusic = createAsyncThunk('musicStream/streamMusic', async (musicId) => {
  const response = await axios.get(`${baseURL}/music/${musicId}/stream`, configMT);
  return response.data;
});

// verifyEmail
export const verifyEmail = createAsyncThunk('emailVerification/verifyEmail', async (token) => {
  try {
    const response = await axios.post(`${baseURL}/auth/verify-email`, { token }, configCT);
    toast.success(response?.data?.message || "Email verified successfully!");
    return response.data;
  } catch (error) {
    toast.error(error?.response?.data?.message || "Something went wrong!");
    return error.response.data;
  }
});

// authentication with google
export const authenticateWithGoogle = createAsyncThunk('auth/authenticateWithGoogle', async () => {
  try {
    const response = await axios.get(`${baseURL}/auth/google`, configCT);
    toast.success(response?.data?.message || "Logged In Successfully!");
    return response.data;
  } catch (error) {
    toast.error(error?.response?.data?.message || "Something went wrong!");
    return error.response.data;
  }
});

// resetPassword
export const resetPassword = createAsyncThunk('auth/resetPassword', async (data) => {
  try {
    const response = await axios.post(`${baseURL}/auth/reset-password`, data, configCT);
    toast.success(response?.data?.message || "Password reset successfully!");
    return response.data;
  } catch (error) {
    toast.error(error?.response?.data?.message || "Something went wrong!");
    return error.response.data;
  }
});
