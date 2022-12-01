import { useEffect, useState } from "react";

export function useCountDown(initialCounter: number, cb: Function) {
  const [counter, setCounter] = useState(initialCounter);

  useEffect(() => {
    const interval = setInterval(() => setCounter(prevCounter => --prevCounter), 1000);
    return () => clearInterval(interval);
  }, []);
  
  useEffect(() =>  {(counter === 0) && cb()}, [counter, cb]);

  return counter;
}