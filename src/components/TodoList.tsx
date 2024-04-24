import { List, Checkbox, Button } from "antd";

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
              <textarea
                value={todo.header}
                onInput={(e) => {
                  dispatch(
                    setHeader({
                      id: todo.id,
                      header: (e.target as HTMLTextAreaElement).value,
                    })
                  );
                }}
              />
            }
            description={
              todo.description && (
                <textarea
                  value={todo.description}
                  onInput={(e) => {
                    dispatch(
                      setDescription({
                        id: todo.id,
                        description: (e.target as HTMLTextAreaElement).value,
                      })
                    );
                  }}
                />
              )
            }
          />
        </List.Item>
      )}
    />
  );
};
