import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
};

export const counterSlice = createSlice({
  name: "counterSlice",
  initialState: initialState, // jika key valuenya sama sebenarnya bisa langsung menulis initialState
  reducers: {
    increment: (state) => {
      state.counter = state.counter + 1;
    },
    decrement: (state) => {
      state.counter = state.counter - 1;
    },
    addByAmount: (state, action) => {
      state.counter += action.payload;
    }, //kits bisa mengakses payload dari action.payload
  }, // reducers untuk menyimpan function untuk merubah data pada slice kita
});

export const { increment, decrement, addByAmount } = counterSlice.actions;
