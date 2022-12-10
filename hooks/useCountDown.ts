import { useEffect, useState } from "react";

export function useCountDown(initialCounter: number, cb?: Function) {
  const [counter, setCounter] = useState(Math.abs(Math.round(initialCounter)));

  useEffect(() => {
    const interval: ReturnType<typeof setInterval> = setInterval(() => {
      if (counter < 1) {
        if (cb) cb()
        return clearInterval(interval)
      };
      setCounter(prevCounter => --prevCounter)
    }, 1000);

    return () => clearInterval(interval);
  }, [initialCounter, counter, cb]);

  return counter;
}