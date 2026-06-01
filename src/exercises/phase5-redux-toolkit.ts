import { createSlice, configureStore } from "@reduxjs/toolkit";

// Exercise: Build a counter with Redux Toolkit
//
// Step 1: Create a slice with createSlice()
//   - name: 'counter'
//   - initialState: { count: 0 }
//   - reducers: increment and decrement
//
// Step 2: Wire it into a store with configureStore()
//
// Step 3: Export the store, the actions, and the RootState type

// YOUR CODE HERE

interface CounterState {
  count: number;
}

const initialState: CounterState = { count: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
  },
});

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
export type RootState = ReturnType<typeof store.getState>;
