import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type CounterState = {
  count: number;
};

const initialState: CounterState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
    },
    incrementByValue: (state, action) => {
      state.count = state.count + action.payload;
    },
    decrement: (state) => {
      state.count = state.count - 1;
    },
  },
});

export const { increment, incrementByValue, decrement } = counterSlice.actions;

export const selectCount = (state: RootState) => state.counter.count;

export default counterSlice.reducer;
