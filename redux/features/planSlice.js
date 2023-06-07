import { getAllPlans, subscribeToPlan } from "@/axios/axios";

const { createSlice } = require("@reduxjs/toolkit");

const planSlice = createSlice({
  name: 'plan',
  initialState: {
    plans: null,
    subscribedPlan: null,
    loading: false,
    planLoading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllPlans.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getAllPlans.fulfilled, (state, action) => {
      state.loading = false;
      state.plans = action.payload;
    });
    builder.addCase(getAllPlans.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    //handle subscribe to plan
    builder.addCase(subscribeToPlan.pending, (state, action) => {
      state.planLoading = true;
      state.error = null;
    }
    );
    builder.addCase(subscribeToPlan.fulfilled, (state, action) => {
      state.planLoading = false;
      state.subscribedPlan = action.payload;
    }
    );
  }
});
export default planSlice.reducer;