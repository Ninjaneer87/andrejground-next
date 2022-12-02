import { useEffect, useState } from "react";

export function useCountDown(initialCounter: number, cb: Function) {
  const [counter, setCounter] = useState(Math.abs(Math.round(initialCounter)));

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (initialCounter > 0) {
      interval = setInterval(() => setCounter(prevCounter => --prevCounter), 1000);
    }

    return () => clearInterval(interval);
  }, [initialCounter]);

  useEffect(() => { (counter < 1) && cb() }, [counter, cb]);

  return counter;
}