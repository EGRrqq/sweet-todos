import { FormEvent } from "react";

import { TodoButton } from "./TodoButton";
import { TodoHeader } from "./TodoHeader";
import { addTodo } from "../../redux/features/todosSlice";
import { useAppDispatch } from "../../redux/hooks";
import { useForm } from "react-hook-form";
import { ITodo } from "../../types";
import { TodoInput } from "./TodoInput";

export default function TodoForm() {
  const { register, handleSubmit } = useForm<ITodo>();
  const dispatch = useAppDispatch();

  const onSubmit = (data: ITodo) => dispatch(addTodo(data));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
        <legend>
          <TodoHeader as="h1">add todo</TodoHeader>
        </legend>
        <section>
          <TodoInput
            placeholder="Header"
            required={true}
            {...register("header")}
          />
          <TodoInput placeholder="Description" {...register("description")} />
        </section>

        <footer>
          <TodoButton type="reset">cancel</TodoButton>
          <TodoButton type="submit">submit</TodoButton>
        </footer>
      </fieldset>
    </form>
  );
}
