interface ITodoInput {
  placeholder: string;
  required?: boolean;
}

export function TodoInput({ placeholder, required = false }: ITodoInput) {
  return <input type="text" placeholder={placeholder} required={required} />;
}
