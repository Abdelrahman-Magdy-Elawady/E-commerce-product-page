import { createSlice } from "@reduxjs/toolkit";

const caretSlice = createSlice({
  name: "caret",
  initialState: [],
  reducers: {
    addToCaret(state, action) {
      const index = state.findIndex(
        (product) => action.payload.id === product.id
      );
      if (index === -1) {
        state.push(action.payload);
      } else {
        state.splice(index, 1, action.payload);
      }
    },
    removeFromCaret(state, action) {
      return state.filter((product) => product.id !== action.payload.id);
    },
    resetCaret(state, action) {
      return [];
    },
  },
});

export const caretReducer = caretSlice.reducer;
export const { addToCaret, removeFromCaret, resetCaret } = caretSlice.actions;
