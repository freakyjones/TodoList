import { createSlice } from "@reduxjs/toolkit";

const initialState = { todoList: [], type: "All" };

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    createTodo: (state, action) => {
      state.todoList.push(action.payload);
    },
    editTodo: (state, action) => {
      const editableObject = action.payload;
      console.log("editableObject", editableObject);
      state.todoList = state.todoList.map((item) => {
        if (item.id === editableObject.id) {
          console.log(editableObject.description);
          return {
            ...item,
            description: editableObject.description,
          };
        } else {
          return item;
        }
      });
    },
    editStatus: (state, action) => {
      const id = action.payload;
      state.todoList = state.todoList.map((item) => {
        if (item.id === id) {
          return { ...item, isActive: !item.isActive };
        } else {
          return item;
        }
      });
    },
    deleteTodo: (state, action) => {
      const id = action.payload;
      state.todoList = state.todoList.filter((item) => item.id !== id);
      console.log("state", state);
    },
    filterType: (state, action) => {
      state.type = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { createTodo, editTodo, deleteTodo, filterType, editStatus } =
  todoSlice.actions;

export default todoSlice.reducer;
