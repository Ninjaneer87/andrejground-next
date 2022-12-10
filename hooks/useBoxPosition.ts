import {
  useCallback,
  useEffect,
  useRef,
  useState,
  CSSProperties
} from "react";
import { useFontLoaded } from "./useFontLoaded";
import { useMounted } from "./useMounted";

const initialBox = {
  "--top": '0px',
  "--left": '0px',
  "--width": '0px',
  "--height": '0px',
};

export default function useBoxPosition<T extends HTMLElement, C>(changeTrigger: C) {
  const [boxPosition, setBoxPosition] = useState(initialBox);
  const mounted = useMounted();
  const fontLoaded = useFontLoaded();
  const activeBoxRef = useRef<T>(null);

  const setBoxToActiveRef = useCallback(() => {
    if (!activeBoxRef.current) return;

    const { offsetTop, offsetLeft, offsetWidth, offsetHeight } = activeBoxRef.current;
    const newBoxPosition = {
      "--top": `${Math.round(offsetTop)}px`,
      "--left": `${Math.round(offsetLeft)}px`,
      "--width": `${Math.round(offsetWidth)}px`,
      "--height": `${Math.round(offsetHeight)}px`,
    };
    setBoxPosition(newBoxPosition);
  }, []);

  useEffect(setBoxToActiveRef, [changeTrigger, fontLoaded, mounted, setBoxToActiveRef]);

  useEffect(() => {
    window.addEventListener("resize", setBoxToActiveRef);
    return () => window.removeEventListener("resize", setBoxToActiveRef)
  }, [setBoxToActiveRef]);

  return { activeBoxRef, boxPosition: boxPosition as CSSProperties }
}