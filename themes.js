import { createTheme } from "@material-ui/core/styles";
import { blueGrey, cyan, grey } from "@material-ui/core/colors";
import { responsiveFontSizes } from "@material-ui/core/styles";

export const defaultTheme = responsiveFontSizes(
  createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
        sm2: 800,
      },
    },
    palette: {
      primary: blueGrey,
      secondary: cyan,
      custom: {
        textColor: "#fefefe",
        accent: cyan["A400"],
        backgroundColor: grey[900],
        boxShadowColor: "#00e5ff44",
        imageDropShadow: `drop-shadow(0px 0px 15px #ffffff55)`,
        borderColor: cyan[900],
        appbarBorderColor: cyan[900],
        appbarBackgroundColor: "#212121bb",
        logoBgColor: "transparent",
        cardBgColor: "#21212133",
        cardBoxShadow: "-8px -8px 15px 0 #ffffff10,8px 8px 15px 0 #00000077",
        button3DShadow: "-8px -8px 15px 0 #ffffff33,8px 8px 15px 0 #00000011",
        button3DShadowInset:
          "inset -2px -2px 2px 0 #ffffff99, inset 2px 2px 2px 0 #00000019",
        reflectionColor: "#e6e6e610",
      },
      action: {
        disabled: "#bdbdbd",
      },
      // type: 'dark'
    },
    typography: {
      fontFamily: "Montserrat",
      fontWeightLight: 200,
      fontWeightRegular: 500,
      fontWeightMedium: 600,
      fontWeightBold: 700,
    },
  })
);

export const lightTheme = responsiveFontSizes(
  createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
        sm2: 800,
      },
    },
    palette: {
      primary: blueGrey,
      secondary: cyan,
      custom: {
        textColor: grey[900],
        accent: cyan["A400"],
        backgroundColor: "#f0f0f3",
        boxShadowColor: "rgba(0, 0, 0, 0.1)",
        imageDropShadow: `drop-shadow(0px 0px 15px #00000088)`,
        borderColor: "transparent",
        appbarBorderColor: cyan[900],
        appbarBackgroundColor: "#f0f0f3cc",
        logoBgColor: "rgba(0, 0, 0, 0.5)",
        cardBgColor: "#f5f5f522",
        cardBoxShadow: "-12px -12px 25px 0 #ffffffee,12px 12px 25px 0 #00000020",
        cardBoxShadowReverse: "12px 12px 25px 0 #00000020, -12px -12px 25px 0 #ffffffee",
        button3DShadow: "-8px -8px 15px 0 #ffffffee,8px 8px 15px 0 #00000011",
        button3DShadowInset:
          "inset -2px -2px 2px 0 #ffffff99, inset 2px 2px 2px 0 #00000019",
        reflectionColor: "#b6b6b666",
      },
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
  })
);

export const darkTheme = responsiveFontSizes(
  createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
        sm2: 800,
      },
    },
    palette: {
      primary: blueGrey,
      secondary: cyan,
      custom: {
        textColor: "#fefefe",
        accent: cyan["A400"],
        backgroundColor: grey[900],
        boxShadowColor: "#00e5ff44",
        imageDropShadow: `drop-shadow(0px 0px 15px #ffffff55)`,
        borderColor: "transparent",
        appbarBorderColor: cyan[900],
        appbarBackgroundColor: "#212121bb",
        logoBgColor: "transparent",
        cardBgColor: "#21212133",
        cardBoxShadow: "-8px -8px 15px 0 #ffffff10,8px 8px 15px 0 #00000077",
        button3DShadow: "-8px -8px 15px 0 #ffffff10,8px 8px 15px 0 #00000055",
        button3DShadowInset:
          "inset -2px -2px 2px 0 #ffffff15, inset 2px 2px 2px 0 #00000055",
        reflectionColor: "#e6e6e610",
      },
      action: {
        disabled: "#bdbdbd",
      },
      // type: 'dark'
    },
    typography: {
      fontFamily: "Montserrat",
      fontWeightLight: 200,
      fontWeightRegular: 500,
      fontWeightMedium: 600,
      fontWeightBold: 700,
    },
  })
);
