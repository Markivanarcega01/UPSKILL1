import { useEffect, useState } from "react";

export function useDebounce<T>(value: T, delay: number): T {
  const [inputValue, setInputValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setInputValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value]);
  return inputValue;
}
