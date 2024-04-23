import { ReactNode } from "react";

interface ITodoHeader {
  children: ReactNode;

  as: "h1" | "h2" | "h3";
}

export function TodoHeader({ children, as = "h1" }: ITodoHeader) {
  const HeaderTag = as;

  return <HeaderTag>{children}</HeaderTag>;
}
