import { create } from "zustand";

// Exercise: Build a counter store with Zustand
//
// Your store needs:
//   - count: number
//   - increment: () => void
//   - decrement: () => void
//
// Step 1: Define the TypeScript type for the store shape
// Step 2: Pass it to create() and implement the actions using `set`

interface CounterStore {
  count: number;
  increment: () => void;
  decrement: () => void;
}

// YOUR CODE HERE
export const useCounterStore = create<CounterStore>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));

const Counter = () => {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);

  return (
    <>
      <p>{count}</p>
      <div>
        <button onClick={increment}>Add</button>
        <button onClick={decrement}>Subtract</button>
      </div>
    </>
  );
};
