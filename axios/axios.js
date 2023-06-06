import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast'

// Base URL
const baseURL = 'https://api.syscomatic.com/api/v1';
const config = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
  },
};
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
      const response = await axios.get(`${baseURL}/auth/me`, config);
      console.log('response', response.data);
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
      toast.success(response?.data?.message);
      return response.data;
    } catch (error) {
      toast.error(error?.response?.data?.message);
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
      console.log('response', response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// fetchUserMusic
export const fetchUserMusic = createAsyncThunk('userMusic/fetchUserMusic', async () => {
  const response = await axios.get(`${baseURL}/music/user`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
    }
  });
  return response.data;
});

// createMusic
export const convertMusic = createAsyncThunk('musicConversion/convertMusic', async (formData) => {
  const response = await axios.post(`${baseURL}//music/convert`, formData, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
    }
  });
  return response.data;
});

// downloadMusic
export const downloadMusic = createAsyncThunk('musicDownload/downloadMusic', async (musicId) => {
  const response = await axios.get(`${baseURL}/music/${musicId}/download`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
    }
  });
  return response.data;
});

// streamMusic
export const streamMusic = createAsyncThunk('musicStream/streamMusic', async (musicId) => {
  const response = await axios.get(`${baseURL}/music/${musicId}/stream`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
    }
  });
  return response.data;
});

// verifyEmail
export const verifyEmail = createAsyncThunk('emailVerification/verifyEmail', async (token) => {
  const response = await axios.post(`${baseURL}/auth/verify-email`, { token }, {
    headers: {
      'Content-Type': 'application/json',
    }
  });
  return response.data;
});

// authentication with google
export const authenticateWithGoogle = createAsyncThunk('auth/authenticateWithGoogle', async () => {
  try {
    const response = await axios.get(`${baseURL}/auth/google`, {
      headers: {
        'Content-Type': 'application/json',
      }
    });
    toast.success(response?.data?.message || "Logged In Successfully!");
    return response.data;
  } catch (error) {
    toast.error(error?.response?.data?.message || "Something went wrong!");
    return error.response.data;
  }
});