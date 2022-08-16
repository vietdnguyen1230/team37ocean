import { createSlice } from "@reduxjs/toolkit";

export const eventSlice = createSlice({
  name: "event",
  initialState: {
    events: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //GET ALL
    getEventStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getEventSuccess: (state, action) => {
      state.isFetching = false;
      state.events = action.payload;
    },
    getEventFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //UPDATE
    updateEventStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateEventSuccess: (state, action) => {
      state.isFetching = false;
      state.events[
        state.events.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.events;
    },
    updateEventFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

// The actions
export const {
  getEventStart,
  getEventSuccess,
  getEventFailure,
  updateEventStart,
  updateEventSuccess,
  updateEventFailure,
} = eventSlice.actions;

// The reducer
export default eventSlice.reducer;
