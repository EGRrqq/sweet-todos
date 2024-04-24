import "./App.css";
import TodoForm from "./components/TodoForm";
import { getTodos, toggleTodo, removeTodo } from "./redux/features/todosSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

function App() {
  const todos = useAppSelector(getTodos);
  const dispatch = useAppDispatch();

  return (
    <>
      <TodoForm></TodoForm>
      <ul style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {todos.map((i) => (
          <li key={i.id} style={{ border: "solid" }}>
            <input
              type="checkbox"
              name="task"
              id={i.id}
              onChange={() => dispatch(toggleTodo(i))}
              checked={i.completed}
            />
            <label htmlFor={i.id}>
              <span>{i.header}</span>

              {i.description ? (
                <>
                  <hr />
                  <p>{i.description}</p>
                </>
              ) : (
                <></>
              )}

              <button onClick={() => dispatch(removeTodo(i))}>-</button>
            </label>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
