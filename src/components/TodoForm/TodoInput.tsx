import { FormEvent, useState } from "react";

interface ITodoInput {
  placeholder: string;
  name: string;
  required?: boolean;
}

export function TodoInput({ placeholder, name, required = false }: ITodoInput) {
  const [value, setValue] = useState("");

  function handleInput(e: FormEvent<HTMLInputElement>) {
    setValue((e.target as HTMLInputElement).value);
  }

  return (
    <input
      type="text"
      onInput={handleInput}
      placeholder={placeholder}
      name={name}
      required={required}
      value={value}
    />
  );
}
