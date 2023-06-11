import { createSlice } from '@reduxjs/toolkit';
import { streamMusic } from '@/axios/axios';

const musicStreamSlice = createSlice({
  name: 'musicStream',
  initialState: {
    streamingMusic: {},
    loading: false,
    error: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(streamMusic.pending, (state) => {
        state.loading = true;
      })
      .addCase(streamMusic.fulfilled, (state, action) => {
        state.loading = false;
        state.streamingMusic = action.payload;
      })
      .addCase(streamMusic.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const selectStreamingMusic = (state) => state.musicStream.streamingMusic;
export const selectStreamLoading = (state) => state.musicStream.loading;
export const selectStreamError = (state) => state.musicStream.error;

export default musicStreamSlice.reducer;