import { List, Checkbox, Button, Input } from "antd";

import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  getTodos,
  toggleTodo,
  removeTodo,
  setHeader,
  setDescription,
} from "../redux/features/todosSlice";

export const TodoList = () => {
  const todos = useAppSelector(getTodos);
  const dispatch = useAppDispatch();

  return (
    <List
      dataSource={todos}
      style={{
        display: "grid",
        gap: "1rem",
        outline: "solid",
      }}
      renderItem={(todo) => (
        <List.Item
          actions={[
            <Button onClick={() => dispatch(removeTodo(todo))}>-</Button>,
          ]}
          style={{
            background: "rgba(0,0,0,0.05)",
            alignItems: "start",
          }}
        >
          <List.Item.Meta
            avatar={
              <Checkbox
                checked={todo.completed}
                onChange={() => dispatch(toggleTodo(todo))}
              />
            }
            title={
              <Input.TextArea
                value={todo.header}
                minLength={1}
                autoSize={{ minRows: 1, maxRows: 10 }}
                placeholder="Task name"
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
            description={
              <Input.TextArea
                value={todo.description}
                placeholder="Description"
                autoSize={{ minRows: 1, maxRows: 10 }}
                onChange={(e) => {
                  dispatch(
                    setDescription({
                      id: todo.id,
                      description: e.target.value,
                    })
                  );
                }}
              />
            }
          />
        </List.Item>
      )}
    />
  );
};
