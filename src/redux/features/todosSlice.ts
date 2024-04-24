import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { ITodo } from "../../types";

interface IPayloadAction {
  header: string;
  description?: string;
}

// Define the initial state using that type
const initialState: ITodo[] = [];

export const todosSlice = createSlice({
  name: "todos",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<IPayloadAction>) => {
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
    toggleTodo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload.id);
      if (todo) todo.completed = !todo.completed;
    },
    removeTodo: (state, action) => {
      const todoIndex = state.findIndex(
        (todo) => todo.id === action.payload.id
      );
      if (todoIndex !== -1) state.splice(todoIndex, 1);
    },
  },
});

export const { addTodo, toggleTodo, removeTodo } = todosSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const getTodos = (state: RootState) => state.todos;

export default todosSlice.reducer;
