import { InputHTMLAttributes, forwardRef } from "react";

interface ITodoInput extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
}

export const TodoInput = forwardRef<HTMLInputElement, ITodoInput>(
  ({ placeholder, ...props }, ref) => {
    return <input {...props} placeholder={placeholder} ref={ref} />;
  }
);
