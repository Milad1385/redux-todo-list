import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAllTodos = createAsyncThunk("todo/getAllTodos", async (url) => {
  return fetch(url)
    .then((res) => res.json())
    .then((todos) => todos);
});
const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    removeTodo: (state, action) => {
      const prevTodos = JSON.stringify(state.todos);
      const parseTodo = JSON.parse(prevTodos);
      const filtredState = parseTodo.filter(
        (todo) => todo.id !== action.payload.id
      );
      state.todos = filtredState;
    },
    doneTodo: (state, action) => {
      const prevTodos = JSON.stringify(state.todos);
      const parseTodo = JSON.parse(prevTodos);
      parseTodo.some((todo) => {
        if (todo.id === action.payload.id) {
          todo.isDone = !todo.isDone;
          return true;
        }
      });
      state.todos = parseTodo;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllTodos.fulfilled, (state, action) => {
      state.todos.push(action.payload);
    });
  },
});

export const { addTodo, removeTodo, doneTodo } = todoSlice.actions;
export default todoSlice.reducer;
