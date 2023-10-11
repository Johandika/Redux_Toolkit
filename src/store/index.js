import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./slices/counterSlice";

const store = configureStore({
  reducer: {
    counterSlice: counterSlice.reducer, // namanya bebas mau apa aja
  },
});

export default store;
