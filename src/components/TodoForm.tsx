import { Form, Input, Button } from "antd";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { ITodo } from "../types";
import { useAppDispatch } from "../redux/hooks";
import { addTodo } from "../redux/features/todosSlice";

const TodoForm = () => {
  const { control, handleSubmit, watch } = useForm<ITodo>();

  const dispatch = useAppDispatch();
  const onSubmit: SubmitHandler<ITodo> = (data) => dispatch(addTodo(data));

  const headerValue = watch("header");

  return (
    <Form onFinish={handleSubmit(onSubmit)}>
      <h1>Todo Form</h1>

      <Form.Item name="header">
        <span>
          <Controller
            name="header"
            control={control}
            rules={{ required: true, minLength: 1 }}
            render={({ field }) => (
              <Input id="header" placeholder="Task name" {...field} />
            )}
          />
        </span>
      </Form.Item>

      <Form.Item name="description">
        <span>
          <Controller
            name="description"
            control={control}
            rules={{ minLength: 1 }}
            render={({ field }) => (
              <Input id="description" placeholder="Description" {...field} />
            )}
          />
        </span>
      </Form.Item>

      <Form.Item>
        <Button disabled={!headerValue} type="primary" htmlType="submit">
          Add Todo
        </Button>
      </Form.Item>
    </Form>
  );
};

export default TodoForm;
