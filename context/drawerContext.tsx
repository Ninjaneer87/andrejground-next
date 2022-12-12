import { useMounted } from "hooks/useMounted";
import React, { useCallback, useEffect } from "react";
import { createContext, useState } from "react";

export type DrawerContextType = {
  expanded: boolean;
  mounted: boolean;
  toggleExpanded: () => void;
  setExpanded: (exp: boolean) => void;
};

const DrawerContext = createContext<DrawerContextType>({
  expanded: false,
  mounted: false,
  toggleExpanded: () => {},
  setExpanded: (exp: boolean) => {},
});

type Props = {
  children: React.ReactNode;
};

export const DrawerContextProvider = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const { mounted, mount, unmount } = useMounted(false);

  const handleChange = useCallback(
    (val: boolean) => {
      const isChrome = navigator.userAgent.indexOf("Chrome") > 0;
      const visibleOverflow = isChrome ? "overlay" : "auto";
      document.body.style.overflow = val ? "hidden" : visibleOverflow;

      val ? mount() : unmount(1000);
    },
    [mount, unmount]
  );

  const toggleExpandedHandler = useCallback(() => {
    const newExpanded = !expanded;
    handleChange(newExpanded);
    setExpanded(newExpanded);
  }, [handleChange, expanded]);

  const setExpandedHandler = useCallback((exp: boolean) => {
    handleChange(exp);
    setExpanded(exp);
  }, [handleChange]);

  const context = {
    expanded,
    mounted,
    toggleExpanded: toggleExpandedHandler,
    setExpanded: setExpandedHandler,
  };

  return (
    <DrawerContext.Provider value={context}>
      {children}
    </DrawerContext.Provider>
  );
};

export default DrawerContext;
