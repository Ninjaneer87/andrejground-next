import React from 'react';
import { createContext, useState } from "react";

const ThemeContext = createContext({
  darkMode: true,
  setDarkTheme: isDark => {},
});

export const ThemeContextProvider = (props) => {
  const [darkTheme, setDarkTheme] = useState(true);

  const setThemeHandler = isDarkTheme => {
    setDarkTheme(isDarkTheme)
  }

  const context = {
    darkMode: darkTheme,
    setDarkTheme: setThemeHandler,
  };

  return <ThemeContext.Provider value={context}>
    {props.children}
  </ThemeContext.Provider>
}

export default ThemeContext;