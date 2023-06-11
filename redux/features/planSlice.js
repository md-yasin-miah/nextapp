import { cancelSubscription, getAllPlans, subscribeToPlan } from "@/axios/axios";

const { createSlice } = require("@reduxjs/toolkit");

const planSlice = createSlice({
  name: 'plan',
  initialState: {
    plans: {},
    subscribedPlan: {},
    loading: false,
    planLoading: false,
    error: {}
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllPlans.pending, state => {
      state.loading = true;
      state.error = {};
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
      state.error = {};
    }
    );
    builder.addCase(subscribeToPlan.fulfilled, (state, action) => {
      state.planLoading = false;
      state.subscribedPlan = action.payload;
    }
    );
    builder.addCase(subscribeToPlan.rejected, (state, action) => {
      state.planLoading = false;
      state.error = action.payload;
    }
    );
    //handle unsubscribe from plan
    builder.addCase(cancelSubscription.pending, (state, action) => {
      state.planLoading = true;
      state.error = {};
    }
    );
    builder.addCase(cancelSubscription.fulfilled, (state, action) => {
      state.planLoading = false;
      state.subscribedPlan = action.payload;
    }
    );
    builder.addCase(cancelSubscription.rejected, (state, action) => {
      state.planLoading = false;
      state.error = action.payload;
    }
    );
  }
});
export default planSlice.reducer;