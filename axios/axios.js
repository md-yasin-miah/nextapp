import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk action to handle registration
export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post('https://api.anydemo.ai/api/v1/auth/register', userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);