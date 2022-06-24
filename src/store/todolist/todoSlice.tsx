import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./../store";

export interface TodoItem {
  id: number;
  text: string;
  status: boolean;
}

interface TodoState {
  value: TodoItem[];
}

const initialState: TodoState = {
  value: [],
};

export const todoSlice = createSlice({
  name: "todolist",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TodoItem>) => {
      state.value.push(action.payload);
    },
    clearTodos: (state) => {
      state.value = [];
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.value = state.value.filter((el) => el.id !== action.payload);
    },
  },
});

export const { addTodo, clearTodos, deleteTodo } = todoSlice.actions;

export const selectTodos = (state: RootState) => state.todos.value;

export default todoSlice.reducer;
