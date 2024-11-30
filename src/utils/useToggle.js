import { useState } from 'react';

export function useToggle() {
  const [toggle, setToggle] = useState(false);

  function handleToggle() {
    setToggle((toggle) => !toggle);
  }

  return { toggle, handleToggle };
}
