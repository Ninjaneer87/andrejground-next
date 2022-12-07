import { createContext } from "react";

export type ThemeContextType = { dark: boolean; toggleDarkMode: () => void };
const ThemeContext = createContext({});
export default ThemeContext;
