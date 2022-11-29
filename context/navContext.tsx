import React, { useCallback } from "react";
import { createContext, useState } from "react";

export type NavContextType = {
  isExpanded: boolean;
  toggleExpanded: () => void;
  setExpanded: (exp: boolean) => void;
  isScrolled: boolean;
  setIsScrolled: (scrolled: boolean) => void;
};

const NavContext = createContext<NavContextType>({
  isExpanded: false,
  toggleExpanded: () => {},
  setExpanded: (exp: boolean) => {},
  isScrolled: false,
  setIsScrolled: (scrolled: boolean) => {},
});

export const menuItems = [
  {
    id: 1,
    text: "HOME",
    path: "/",
    exact: true,
  },
  {
    id: 2,
    text: "PORTFOLIO",
    path: "/portfolio",
    exact: false,
  },
  {
    id: 3,
    text: "BLOG",
    path: "/blog",
    exact: false,
  },
  {
    id: 4,
    text: "ABOUT",
    path: "/about",
    exact: false,
  },
  {
    id: 5,
    text: "CONTACT",
    path: "/contact",
    exact: false,
  },
];

type Props = {
  children: React.ReactNode;
};

export const NavContextProvider = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleExpandedHandler = useCallback(() => {
    setExpanded((prevExpanded) => !prevExpanded);
  }, []);

  const setExpandedHandler = useCallback((exp: boolean) => {
    setExpanded(exp);
  }, []);

  const setIsScrolledHandler = useCallback((scrolled: boolean) => {
    setScrolled(scrolled);
  }, []);

  const context = {
    isExpanded: expanded,
    toggleExpanded: toggleExpandedHandler,
    setExpanded: setExpandedHandler,
    isScrolled: scrolled,
    setIsScrolled: setIsScrolledHandler,
  };

  return <NavContext.Provider value={context}>{children}</NavContext.Provider>;
};

export default NavContext;
