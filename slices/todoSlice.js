import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    createTodo: (state) => {
      state.value += 1;
    },
    editTodo: (state) => {},
    deleteTodo: (state) => {},
  },
});

// Action creators are generated for each case reducer function
export const { createTodo, editTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
