import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

const initialBox = {
  width: 0,
  left: 0,
  top: 0,
  height: 0,
};

export default function useBoxPosition<T extends HTMLElement>() {
  const [boxPosition, setBoxPosition] = useState(initialBox);
  const [mounting, setMounting] = useState(true);
  const activeBoxRef = useRef<T>(null);

  const setBoxToActiveRef = useCallback(() => {
    if (!activeBoxRef.current) return;

    const newBoxPosition = {
      width: Math.round(activeBoxRef.current.offsetWidth),
      left: Math.round(activeBoxRef.current.offsetLeft),
      top: Math.round(activeBoxRef.current.offsetTop),
      height: Math.round(activeBoxRef.current.offsetHeight),
    };
    setBoxPosition(newBoxPosition);
  }, []);

  useEffect(() => {
    if (activeBoxRef.current && mounting) {
      setBoxToActiveRef();
      setMounting(false);
    }
  }, [mounting, setBoxToActiveRef]);
  
  useEffect(() => {
    window.addEventListener("resize", setBoxToActiveRef);
    return () => window.removeEventListener("resize", setBoxToActiveRef)
  }, [setBoxToActiveRef]);

  return { activeBoxRef, boxPosition, setBoxPosition: setBoxToActiveRef }
}