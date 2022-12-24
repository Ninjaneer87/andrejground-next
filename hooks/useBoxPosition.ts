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
  const [mounted] = useMounted();
  const fontLoaded = useFontLoaded();
  const boxRef = useRef<T>(null);

  const setPosition = useCallback(() => {
    if (!boxRef.current) return;

    const { offsetTop, offsetLeft, offsetWidth, offsetHeight } = boxRef.current;
    const newBoxPosition = {
      "--top": `${Math.round(offsetTop)}px`,
      "--left": `${Math.round(offsetLeft)}px`,
      "--width": `${Math.round(offsetWidth)}px`,
      "--height": `${Math.round(offsetHeight)}px`,
    };
    setBoxPosition(newBoxPosition);
  }, []);

  useEffect(setPosition, [changeTrigger, fontLoaded, mounted, setPosition]);

  useEffect(() => {
    window.addEventListener("resize", setPosition);
    return () => window.removeEventListener("resize", setPosition)
  }, [setPosition]);

  return { boxRef, boxPosition: boxPosition as CSSProperties }
}