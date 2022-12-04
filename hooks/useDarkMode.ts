import { useCallback, useEffect, useState } from "react";

type ThemeConfig = {
  className: string;
  element: HTMLElement;
  storageKey: string;
}

let config: ThemeConfig;
let initialDark: boolean;
let applyTheme: (val: boolean) => void;
let storageValueChanged: (e: StorageEvent) => boolean;

if (typeof window !== 'undefined') {
  config = {
    className: 'dark',
    element: document.body,
    storageKey: 'theme'
  }
  initialDark = localStorage.getItem("theme") === "dark";

  applyTheme = (val: boolean) => {
    const { className, element, storageKey } = config;
    if (val === true) {
      element.classList.add(className);
      localStorage.setItem(storageKey, 'dark');
    } else if (val === false) {
      element.classList.remove(className);
      localStorage.setItem(storageKey, '');
    }
  }
  storageValueChanged = (e: StorageEvent) => {
    return e.key === config.storageKey && e.oldValue !== e.newValue
  }
}

export function useDarkMode(isDark: boolean | null): [boolean | null, (val: boolean) => void] {
  const [dark, setDark] = useState(isDark);

  const setDarkMode = (val: boolean) => {
    applyTheme(val);
    setDark(val);
  }
  const storageHandler = useCallback((e: StorageEvent) => {
    if (storageValueChanged(e))
      setDarkMode(e.newValue === 'dark');
  }, []);

  useEffect(() => {
    setDarkMode(initialDark);
    window.addEventListener('storage', storageHandler);
    return () => { window.removeEventListener('storage', storageHandler); }
  }, [storageHandler]);

  const toggleDarkMode = () => { setDarkMode(!dark) }
  
  return [dark, toggleDarkMode];
}