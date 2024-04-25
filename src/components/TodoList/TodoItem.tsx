import "./TodoItem.css";
import { List, Button } from "antd";

import { useAppDispatch } from "../../redux/hooks";
import { removeTodo, setHeader } from "../../redux/features/todosSlice";
import { useEffect, useState } from "react";
import { ITodo } from "../../types";
import { TodoTextArea } from "./TodoTextarea";

interface ITodoItems {
  todo: ITodo;
}

export const TodoItem = ({ todo }: ITodoItems) => {
  const [isFocused, setIsFocused] = useState(false);
  const [initialFocusState, setInitialFocusState] = useState(false);

  const dispatch = useAppDispatch();
  console.log(isFocused);

  useEffect(() => {
    setInitialFocusState(isFocused);
  }, [isFocused]);

  useEffect(() => {
    if (!isFocused && !todo.header && !initialFocusState) {
      dispatch(removeTodo({ id: todo.id }));
    }
  }, [isFocused, dispatch, todo.header, todo.id, initialFocusState]);

  return (
    <List.Item
      style={{
        // rgb(24 149 0)
        // #ff8888
        boxShadow: "0.05rem 0.05rem black",
        border: "solid 0.05rem black",
        alignItems: "start",
      }}
      actions={[
        <Button
          style={{
            minWidth: "2rem",
          }}
          onClick={() => dispatch(removeTodo(todo))}
        >
          -
        </Button>,
      ]}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    >
      <List.Item.Meta
        style={{ alignItems: "center", padding: 0 }}
        title={
          <TodoTextArea
            name="header text area"
            placeholder="Task name"
            value={todo.header}
            onChange={(e) => {
              dispatch(
                setHeader({
                  id: todo.id,
                  header: e.target.value,
                })
              );
            }}
          />
        }
      />
    </List.Item>
  );
};
