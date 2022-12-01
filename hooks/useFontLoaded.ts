import { useEffect, useState } from "react";

export function useFontLoaded<T extends string>(font: T) {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const loaded = document.fonts.check(font);
      if (loaded) {
        setFontLoaded(true);
        clearInterval(interval);
      };
    }, 200);

    setTimeout(() => {
      setFontLoaded(true);
      clearInterval(interval);
    }, 10000)

    return () => clearInterval(interval);
  }, [font, fontLoaded])

  return fontLoaded;
}