import { useEffect, useState } from "react";

type ThemeConfig = {
  className: string;
  element: HTMLElement;
  storageKey: string;
}

let config: ThemeConfig;
export let initialDark: boolean;

if (typeof window !== 'undefined') {
  config = {
    className: 'dark',
    element: document.body,
    storageKey: 'theme'
  }
  initialDark = localStorage.getItem("theme") === "dark";
}

export function useDarkMode(isDark: boolean | null): [boolean | null, (val: boolean) => void] {
  const [dark, setDark] = useState(isDark);

  useEffect(() => {
    setDark(initialDark);

    const storageHandler = (e: StorageEvent) => (e.key === config.storageKey && e.oldValue !== e.newValue) && setDark(e.newValue === 'dark')
    window.addEventListener('storage', storageHandler);
    
    return () => { window.removeEventListener('storage', storageHandler); }
  }, []);

  useEffect(() => {
    const { className, element, storageKey } = config;
    if (dark === true) {
      element.classList.add(className);
      localStorage.setItem(storageKey, 'dark');
    } else if(dark === false) {
      element.classList.remove(className);
      localStorage.setItem(storageKey, '');
    }
  }, [dark]);

  return [dark, setDark];
}