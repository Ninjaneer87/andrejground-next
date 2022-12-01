import { FontType } from "@/types/font.type";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
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
  const fontLoaded = useFontLoaded<FontType>("16px Montserrat");
  const activeBoxRef = useRef<T>(null);

  const setBoxToActiveRef = useCallback(() => {
    if (!activeBoxRef.current) return;

    const newBoxPosition = {
      "--top": Math.round(activeBoxRef.current.offsetTop) + "px",
      "--left": Math.round(activeBoxRef.current.offsetLeft) + "px",
      "--width": Math.round(activeBoxRef.current.offsetWidth) + "px",
      "--height": Math.round(activeBoxRef.current.offsetHeight) + "px",
    };
    setBoxPosition(newBoxPosition);
  }, []);

  useEffect(setBoxToActiveRef, [changeTrigger, fontLoaded, mounted, setBoxToActiveRef]);

  useEffect(() => {
    window.addEventListener("resize", setBoxToActiveRef);
    return () => window.removeEventListener("resize", setBoxToActiveRef)
  }, [setBoxToActiveRef]);

  return { activeBoxRef, boxPosition: boxPosition as React.CSSProperties }
}