import { getAllVoices } from '@/axios/axios';
import { createSlice } from '@reduxjs/toolkit';

const voiceSlice = createSlice({
  name: 'voice',
  initialState: {
    voices: [],
    loading: false,
    error: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllVoices.pending, (state) => {
      state.loading = true;
      state.error = {};
    });

    builder.addCase(getAllVoices.fulfilled, (state, action) => {
      state.loading = false;
      state.voices = action.payload;
    });

    builder.addCase(getAllVoices.rejected, (state, action) => {
      state.loading = false;
      state.error = action;
    });
  }
});


export default voiceSlice.reducer;