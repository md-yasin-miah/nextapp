const { createSlice } = require("@reduxjs/toolkit");

const planSlick = createSlice({
  name: 'plan',
  initialState: {
    plan: null,
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllPlan.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getAllPlan.fulfilled, (state, action) => {
      state.loading = false;
      state.plan = action.payload;
    });
    builder.addCase(getAllPlan.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  }
});
export default planSlick.reducer;