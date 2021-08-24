import React, { useCallback } from 'react';
import { createContext, useState } from "react";

const NavContext = createContext({
  isExpanded: false,
  toggleExpanded: () => {},
  setExpanded: exp => {},
  isScrolled: false,
  setIsScrolled: scrolled => {},
});

export const menuItems = [
  {
    id: 1,
    text: 'HOME',
    path: '/',
  },
  {
    id: 2,
    text: 'PORTFOLIO',
    path: '/portfolio',
  },
  {
    id: 3,
    text: 'BLOG',
    path: '/blog',
  },
  {
    id: 4,
    text: 'ABOUT',
    path: '/about',
  },
  {
    id: 5,
    text: 'CONTACT',
    path: '/contact',
  }
];

export const NavContextProvider = (props) => {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleExpandedHandler = useCallback(() => {
    setExpanded(prevExpanded => !prevExpanded)
  }, [])
  const setExpandedHandler = useCallback(exp => {
    setExpanded(exp)
  }, [])

  const setIsScrolledHandler = useCallback(scrolled => {
    setScrolled(scrolled);
  }, [])

  const context = {
    isExpanded: expanded,
    toggleExpanded: toggleExpandedHandler,
    setExpanded: setExpandedHandler,
    isScrolled: scrolled,
    setIsScrolled: setIsScrolledHandler,
  };

  return <NavContext.Provider value={context}>
    {props.children}
  </NavContext.Provider>
}

export default NavContext;