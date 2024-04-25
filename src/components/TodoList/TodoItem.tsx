import "./TodoItem.css";
import { List, Button } from "antd";

import { useAppDispatch } from "../../redux/hooks";
import { removeTodo, setHeader } from "../../redux/features/todosSlice";
import { useEffect } from "react";
import { ITodo } from "../../types";
import { TodoTextArea } from "./TodoTextarea";
import { useTodoFocus } from "../../hooks";

interface ITodoItems {
  todo: ITodo;
}

export const TodoItem = ({ todo }: ITodoItems) => {
  const { isFocused, handleFocus, handleBlur, isRemovable } = useTodoFocus();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isRemovable && !todo.header) {
      dispatch(removeTodo({ id: todo.id }));
    }
  }, [isRemovable, dispatch, todo.header, todo.id]);

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
      onFocus={handleFocus}
      onBlur={handleBlur}
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
