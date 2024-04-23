import { FormEvent } from "react";

import { TodoButton } from "./TodoButton";
import { TodoHeader } from "./TodoHeader";
import { TodoInput } from "./TodoInput";
import { addTodo } from "../../redux/features/todosSlice";
import { useAppDispatch } from "../../redux/hooks";

export default function TodoForm() {
  const dispatch = useAppDispatch();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    dispatch(
      addTodo({
        header: formData.get("header"),
        description: formData.get("description"),
      })
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>
          <TodoHeader as="h1">add todo</TodoHeader>
        </legend>
        <section>
          <TodoInput name="header" placeholder="Header" required={true} />
          <TodoInput name="description" placeholder="Description" />
        </section>

        <footer>
          <TodoButton type="reset">cancel</TodoButton>
          <TodoButton type="submit">submit</TodoButton>
        </footer>
      </fieldset>
    </form>
  );
}
