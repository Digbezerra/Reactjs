import { useState, useEffect } from "react";

export function useLocalStorageState(initialState, keyValue) {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(keyValue);
    return JSON.parse(storedValue);
  });

  useEffect(() => {
    localStorage.setItem(keyValue, JSON.stringify(value));
  }, [initialState, keyValue, value]);

  return [value, setValue, keyValue];
}
