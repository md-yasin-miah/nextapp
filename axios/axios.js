import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = 'https://api.anydemo.ai/api/v1';

// Async thunk action to handle registration
export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${baseURL}/auth/register`, userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);