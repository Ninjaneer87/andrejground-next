import React, { useCallback, useEffect } from "react";
import { createContext, useState } from "react";

export type NavContextType = {
  expanded: boolean;
  toggleExpanded: () => void;
  setExpanded: (exp: boolean) => void;
};

const NavContext = createContext<NavContextType>({
  expanded: false,
  toggleExpanded: () => {},
  setExpanded: (exp: boolean) => {},
});

type Props = {
  children: React.ReactNode;
};

export const NavContextProvider = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpandedHandler = useCallback(() => {
    setExpanded((prevExpanded) => !prevExpanded);
  }, []);

  const setExpandedHandler = useCallback((exp: boolean) => {
    setExpanded(exp);
  }, []);

  useEffect(() => {
    document.body.style.overflow = expanded ? "hidden" : "overlay";
  }, [expanded]);

  const context = {
    expanded,
    toggleExpanded: toggleExpandedHandler,
    setExpanded: setExpandedHandler,
  };

  return <NavContext.Provider value={context}>{children}</NavContext.Provider>;
};

export default NavContext;
