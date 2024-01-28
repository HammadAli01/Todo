import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import {
  addingTodo,
  getAllTodos,
  deleteTodo,
  updateTodo,
} from '../../firebase/services';
export const getTodos = createAsyncThunk('todos/getTodos', async () => {
  //to get all todos
  const response = await getAllTodos();
  return response;
});
export const addTodo = createAsyncThunk('todos/addTodo', async (todoToAdd) => {
  //to add a todo
  await addingTodo(todoToAdd);
});
export const deleteOneTodo = createAsyncThunk(
  //to delete a todo
  '/todos/deleteOneTodo',
  (todoId) => {
    deleteTodo(todoId);
    return todoId;
  }
);
export const updateOneTodo = createAsyncThunk(
  // to update the text of todo
  'todos/updateTodo',
  async (obj) => {
    await updateTodo(obj);
  }
);
export const toggleOneTodo = createAsyncThunk(
  // to toggle the todo
  'todos/toggleOneTodo',
  async (obj) => {
    await updateTodo(obj);
    return obj.documentId;
  }
);
const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
    todoToUpdate: null,
  },
  reducers: {
    setTodoToUpdate: (state, action) => {
      // to set the todo that is to be updated
      state.todoToUpdate = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTodos.fulfilled, (state, action) => {
        return { ...state, todos: action.payload };
      })
      .addCase(deleteOneTodo.fulfilled, (state, action) => {
        const updatedTodos = state.todos.filter(
          (todo) => todo.docId !== action.payload
        );
        return { ...state, todos: updatedTodos }; // for immutability
      })
      .addCase(toggleOneTodo.fulfilled, (state, action) => {
        console.log('befre updating', state.todos);
        const updatedTodos = state.todos.map((todo) =>
          todo.docId === action.payload
            ? { ...todo, isCompleted: !todo.isCompleted }
            : todo
        );
        console.log('updated todos', updatedTodos);
        return {
          ...state,
          todos: updatedTodos,
        };
      });
  },
});
export const { setTodoToUpdate } = todoSlice.actions;
export default todoSlice.reducer;
