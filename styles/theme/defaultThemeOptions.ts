import { blueGrey, cyan } from '@mui/material/colors';
import { ThemeOptions } from '@mui/material/styles';

const defaultThemeOptions: ThemeOptions  = {
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
    primary: {
      main: cyan['A400'],
      light: cyan['A400'],
      dark: cyan['A400'],
    },
    success: {
      main: cyan['A400'],
      light: cyan['A400'],
      dark: cyan['A400'],
    },
    secondary: blueGrey,
    action: {
      disabled: "#bdbdbd",
    },
  },
  typography: {
    fontFamily: "Montserrat",
    fontWeightLight: 200,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
}

export default defaultThemeOptions;