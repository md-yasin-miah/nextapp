import { createSlice } from '@reduxjs/toolkit';
import { downloadMusic } from '@/axios/axios';

const musicDownloadSlice = createSlice({
  name: 'musicDownload',
  initialState: {
    downloadedMusic: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(downloadMusic.pending, (state) => {
        state.loading = true;
      })
      .addCase(downloadMusic.fulfilled, (state, action) => {
        state.loading = false;
        state.downloadedMusic = action.payload;
      })
      .addCase(downloadMusic.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const selectDownloadedMusic = (state) => state.musicDownload.downloadedMusic;
export const selectDownloadLoading = (state) => state.musicDownload.loading;
export const selectDownloadError = (state) => state.musicDownload.error;

export default musicDownloadSlice.reducer;