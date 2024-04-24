import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { ITodo } from "../../types";

// Define the initial state using that type
const initialState: ITodo[] = [];

export const todosSlice = createSlice({
  name: "todos",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<ITodo>) => {
      const date = Date.now();
      const newTodo = {
        date,
        id: date.toString(),
        completed: false,

        header: action.payload.header,
        description: action.payload.description,
      };

      state.push(newTodo);
    },
    toggleTodo: (state, action: PayloadAction<Pick<ITodo, "id">>) => {
      const todo = state.find((todo) => todo.id === action.payload.id);
      if (todo) todo.completed = !todo.completed;
    },
    removeTodo: (state, action: PayloadAction<Pick<ITodo, "id">>) => {
      const todoIndex = state.findIndex(
        (todo) => todo.id === action.payload.id
      );
      if (todoIndex !== -1) state.splice(todoIndex, 1);
    },
    setHeader: (state, action: PayloadAction<Pick<ITodo, "id" | "header">>) => {
      const todo = state.find((todo) => todo.id === action.payload.id);
      if (todo) todo.header = action.payload.header;
    },
    setDescription: (
      state,
      action: PayloadAction<Pick<ITodo, "id" | "description">>
    ) => {
      const todo = state.find((todo) => todo.id === action.payload.id);
      if (todo) todo.description = action.payload.description;
    },
  },
});

export const { addTodo, toggleTodo, removeTodo, setHeader, setDescription } =
  todosSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const getTodos = (state: RootState) => state.todos;

export default todosSlice.reducer;
