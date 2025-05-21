import { mountStoreDevtool } from 'simple-zustand-devtools';
import { create } from 'zustand';

interface CounterStore {
  counter: number;
  max: number;
  increment: () => void;
  reset: () => void;
}

const useCounterStore = create<CounterStore>((set) => ({
  counter: 0,
  max: 5,
  increment: () => set((store) => ({ counter: store.counter + 1 })),
  reset: () => set(() => ({ max: 10 })),
}));

// process is an node global variable
// process.env.NODE_ENV is set to 'development' or 'production' based on the environment
if (process.env.NODE_ENV === 'development') {
  mountStoreDevtool('Counter Store', useCounterStore);
}

export default useCounterStore;
