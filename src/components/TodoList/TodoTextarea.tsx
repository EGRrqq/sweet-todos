import { Input } from "antd";
import { ChangeEvent } from "react";

interface ITodoTextarea {
  name: string;
  placeholder: string;

  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

export const TodoTextarea = ({
  name,
  placeholder,
  value,
  onChange,
}: ITodoTextarea) => {
  return (
    <Input.TextArea
      name={name}
      placeholder={placeholder}
      value={value}
      minLength={1}
      autoSize={{ minRows: 1, maxRows: 10 }}
      onChange={onChange}
    />
  );
};
