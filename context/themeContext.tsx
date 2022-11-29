import { createContext, Dispatch, SetStateAction } from "react";

export type ThemeContextType = { dark: boolean; setDark: Dispatch<SetStateAction<boolean | null>> };
const ThemeContext = createContext({});
export default ThemeContext;
