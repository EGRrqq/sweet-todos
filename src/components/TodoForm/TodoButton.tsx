import { ReactNode } from "react";

interface ITodoButton {
  type: "submit" | "reset";
  "aria-label"?: string;

  children: ReactNode;
}

export function TodoButton({
  children,
  type,
  "aria-label": ariaLabel,
}: ITodoButton) {
  return (
    <button type={type} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
