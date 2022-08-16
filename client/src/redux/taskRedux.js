import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "task",
  initialState: {
    tasks: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
      state.quantity += 1;
      state.total += action.payload.rewards * action.payload.quantity;
    },
    reset: (state) => {
      state.tasks = [];
      state.quantity = 0;
      state.total = 0;
    },
  },
});

export const { addTask, reset } = taskSlice.actions;
export default taskSlice.reducer;
