import { useEffect, useState } from "react";

export function useFontLoaded() {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    document.fonts.onloadingdone = () => setFontLoaded(true);
  }, [])

  return fontLoaded;
}