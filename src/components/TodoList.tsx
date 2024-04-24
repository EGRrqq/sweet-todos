import { List, Checkbox, Button } from "antd";

import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { getTodos, toggleTodo, removeTodo } from "../redux/features/todosSlice";

export const TodoList = () => {
  const todos = useAppSelector(getTodos);
  const dispatch = useAppDispatch();

  return (
    <List
      dataSource={todos}
      style={{
        display: "grid",
        gap: "1rem",
      }}
      renderItem={(todo) => (
        <List.Item
          style={{
            background: "rgba(0,0,0,0.05)",
            padding: "0.25rem",
          }}
        >
          <Checkbox
            checked={todo.completed}
            onChange={() => dispatch(toggleTodo(todo))}
          />
          <span>{todo.header}</span>
          {todo.description && <p>{todo.description}</p>}
          <Button onClick={() => dispatch(removeTodo(todo))}>-</Button>
        </List.Item>
      )}
    />
  );
};
