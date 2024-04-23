import { ReactNode } from "react";

export default function TodoForm() {
  return (
    <>
      <form>
        <fieldset>
          <legend>
            <TodoHeader as="h1">add todo</TodoHeader>
          </legend>
          <section>
            <TodoInput placeholder="Header" required={true} />
            <TodoInput placeholder="Description" />
          </section>

          <footer>
            <TodoButton type="submit">cancel</TodoButton>
            <TodoButton type="submit">submit</TodoButton>
          </footer>
        </fieldset>
      </form>
    </>
  );
}

interface ITodoInput {
  placeholder: string;
  required?: boolean;
}

function TodoInput({ placeholder, required = false }: ITodoInput) {
  return <input type="text" placeholder={placeholder} required={required} />;
}

interface ITodoButton {
  type: "submit" | "reset";
  "aria-label"?: string;

  children: ReactNode;
}

function TodoButton({ children, type, "aria-label": ariaLabel }: ITodoButton) {
  return (
    <button type={type} aria-label={ariaLabel}>
      {children}
    </button>
  );
}

interface ITodoHeader {
  children: ReactNode;

  as: "h1" | "h2" | "h3";
}

function TodoHeader({ children, as = "h1" }: ITodoHeader) {
  const HeaderTag = as;

  return <HeaderTag>{children}</HeaderTag>;
}
