import React from "react";
import Head from "next/head";
import Layout from "@/components/layout/Layout";
import {
  ThemeProvider,
  CssBaseline,
  createTheme,
  responsiveFontSizes,
} from "@mui/material";
import { NavContextProvider } from "context/navContext";
import "@/styles/globals.scss";
import ThemeContext from "context/themeContext";
import { AppProps } from "next/app";
import createEmotionCache from "utils/createEmotionCache";
import darkThemeOptions from "@/styles/theme/darkThemeOptions";
import lightThemeOptions from "@/styles/theme/lightThemeOptions";
import { useDarkMode } from "hooks/useDarkMode";
import { CacheProvider, EmotionCache } from "@emotion/react";
import MyLoader from "@/components/UI/MyLoader";

type MyAppProps = AppProps & {
  emotionCache?: EmotionCache;
};

const clientSideEmotionCache = createEmotionCache();
const darkTheme = responsiveFontSizes(createTheme(darkThemeOptions));
const lightTheme = responsiveFontSizes(createTheme(lightThemeOptions));

const MyApp: React.FC<MyAppProps> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const [dark, setDark] = useDarkMode(null);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
    document.body.classList.add("visible");

    setMounted(true);
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>AndrejGround</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeContext.Provider value={{ dark, setDark }}>
        <CacheProvider value={emotionCache}>
          <NavContextProvider>
            <ThemeProvider theme={dark ? darkTheme : lightTheme}>
              <CssBaseline />
              <MyLoader />
              {mounted ? <Layout>
                <Component {...pageProps} />
              </Layout> : null}
            </ThemeProvider>
          </NavContextProvider>
        </CacheProvider>
      </ThemeContext.Provider>
    </React.Fragment>
  );
};

export default MyApp;
