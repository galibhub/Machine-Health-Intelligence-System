import { create } from "zustand";

const usePredictionStore = create((set) => ({
  result: null,

  setResult: (result) =>
    set({
      result,
    }),

  clearResult: () =>
    set({
      result: null,
    }),
}));

export default usePredictionStore;