import TodoForm from "./components/TodoForm";
import { getTodos } from "./redux/features/todosSlice";
import { useAppSelector } from "./redux/hooks";

function App() {
  const todos = useAppSelector(getTodos);

  return (
    <>
      <TodoForm></TodoForm>
      <ul>
        {todos.map((i) => (
          <li key={i.date}>{i.header}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
