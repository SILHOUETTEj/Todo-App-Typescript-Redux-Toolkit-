import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./../store";
import { fetchTodo } from "./asyncAddTodo";

export interface TodoItem {
  id: number;
  text: string;
  status: boolean;
}

interface TodoState {
  value: TodoItem[];
  isFetching: boolean;
}

const initialState: TodoState = {
  value: [],
  isFetching: false,
};

export const asyncAddTodo = createAsyncThunk(
  "todolist/fetchTodo",
  async (data: TodoItem) => {
    const response = await fetchTodo(data);
    return response;
  }
);

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
  extraReducers: (builder) => {
    builder.addCase(
      asyncAddTodo.fulfilled,
      (state, action: PayloadAction<TodoItem>) => {
        state.isFetching = false;
        state.value.push(action.payload);
      }
    );
    builder.addCase(asyncAddTodo.pending, (state) => {
      state.isFetching = true;
    });
  },
});

export const { addTodo, clearTodos, deleteTodo } = todoSlice.actions;

export const selectTodos = (state: RootState) => state.todos.value;

export default todoSlice.reducer;
