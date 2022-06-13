import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface TodoState {
    value: string[]
  }
  
  const initialState: TodoState = {
    value: [],
  }
export const todoSlice = createSlice({
    name: 'todoList',
    [],
    reducers: {
      addTodo: (state) => {
        state.push(value)
      },
      clearTodos: (state) => {
        state = initialState.value
      },
      deleteTodo: (state, action: PayloadAction<number>) => {
        state.filter(item => item.id != action)
      },
    },
  })