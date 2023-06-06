import { createSlice } from '@reduxjs/toolkit';

const voiceSlice = createSlice({
  name: 'voice',
  initialState: {},
  reducers: {
    setVoice: (state, action) => {
      return action.payload;
    },
    getVoice: (state) => {
      return state;
    }
  },
});

export const { setVoice, getVoice } = voiceSlice.actions;
export default voiceSlice.reducer;