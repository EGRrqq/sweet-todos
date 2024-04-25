import { List } from "antd";

import { useAppSelector } from "../../redux/hooks";
import { getTodos } from "../../redux/features/todosSlice";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {
  const todos = useAppSelector(getTodos);

  return (
    <List dataSource={todos} renderItem={(todo) => <TodoItem todo={todo} />} />
  );
};
