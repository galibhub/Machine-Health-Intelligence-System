import { create } from "zustand";

const usePredictionStore = create((set) => ({
  result: null,

  status: "idle",

  error: null,

  setResult: (result) =>
    set({
      result,
      status: "success",
      error: null,
    }),

  setStatus: (status) =>
    set({
      status,
    }),

  setError: (error) =>
    set({
      error,
      status: "error",
    }),

  clearResult: () =>
    set({
      result: null,
      status: "idle",
      error: null,
    }),
}));

export default usePredictionStore;