import { useEffect, useState } from "react";

export function useTodoFocus() {
  const [isFocused, setIsFocused] = useState(false);
  const [initialFocusState, setInitialFocusState] = useState(false);

  useEffect(() => {
    setInitialFocusState(isFocused);
  }, [isFocused]);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);
  const isRemovable = !isFocused && !initialFocusState;

  return { isFocused, handleFocus, handleBlur, isRemovable };
}
