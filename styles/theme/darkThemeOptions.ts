import { ThemeOptions } from "@mui/material/styles";
import defaultThemeOptions from "./defaultThemeOptions";

const darkThemeOptions: ThemeOptions = {
  ...defaultThemeOptions,
  palette: {
    ...defaultThemeOptions.palette,
    background: {
      paper: "#212121",
      default: "#212121",
    },
    mode: "dark",
  },
};

export default darkThemeOptions;