import { TodoButton } from "./TodoButton";
import { TodoHeader } from "./TodoHeader";
import { TodoInput } from "./TodoInput";

export default function TodoForm() {
  return (
    <>
      <form>
        <fieldset>
          <legend>
            <TodoHeader as="h1">add todo</TodoHeader>
          </legend>
          <section>
            <TodoInput placeholder="Header" required={true} />
            <TodoInput placeholder="Description" />
          </section>

          <footer>
            <TodoButton type="submit">cancel</TodoButton>
            <TodoButton type="submit">submit</TodoButton>
          </footer>
        </fieldset>
      </form>
    </>
  );
}
