import { Form, Input, Button } from "antd";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { ITodo } from "../types";
import { useAppDispatch } from "../redux/hooks";
import { addTodo } from "../redux/features/todosSlice";

export const TodoForm = () => {
  const { control, handleSubmit, watch, reset } = useForm<ITodo>();

  const dispatch = useAppDispatch();
  const onSubmit: SubmitHandler<ITodo> = (data) => {
    dispatch(addTodo(data));
    reset();
  };

  const headerValue = watch("header");

  return (
    <Form
      onFinish={handleSubmit(onSubmit)}
      layout="inline"
      style={{
        boxShadow: "0.05rem 0.05rem black",
        border: "solid 0.05rem black",
      }}
    >
      <Form.Item
        name="header"
        style={{
          flex: "1",
        }}
      >
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

      <Form.Item>
        <Button disabled={!headerValue} type="primary" htmlType="submit">
          Add Todo
        </Button>
      </Form.Item>
    </Form>
  );
};
