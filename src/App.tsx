import { Flex } from "antd";
import "./App.css";
import { TodoForm, TodoList } from "./components";

function App() {
  return (
    <Flex gap="middle" vertical>
      <TodoForm />
      <TodoList />
    </Flex>
  );
}

export default App;
