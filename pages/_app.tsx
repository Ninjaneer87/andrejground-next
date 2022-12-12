import React, { useEffect } from "react";
import Head from "next/head";
import {
  ThemeProvider,
  CssBaseline,
  createTheme,
  responsiveFontSizes,
} from "@mui/material";
import "@/styles/globals.scss";
import ThemeContext from "context/themeContext";
import { AppProps } from "next/app";
import createEmotionCache from "utils/createEmotionCache";
import darkThemeOptions from "@/styles/theme/darkThemeOptions";
import lightThemeOptions from "@/styles/theme/lightThemeOptions";
import { useDarkMode } from "hooks/useDarkMode";
import { CacheProvider, EmotionCache } from "@emotion/react";
import MyLoader from "@/components/UI/MyLoader";
import { useMounted } from "hooks/useMounted";
import Layout from "@/components/layout/Layout";
import { DrawerContextProvider } from "context/drawerContext";

type MyAppProps = AppProps & {
  emotionCache?: EmotionCache;
};

const clientSideEmotionCache = createEmotionCache();
const darkTheme = responsiveFontSizes(createTheme(darkThemeOptions));
const lightTheme = responsiveFontSizes(createTheme(lightThemeOptions));

const MyApp: React.FC<MyAppProps> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const [dark, toggleDarkMode] = useDarkMode(null);
  const { mounted } = useMounted();
  const theme = dark ? darkTheme : lightTheme;

  useEffect(() => {
    if (mounted) document.body.style.visibility = "visible";
  }, [mounted]);

  return (
    <React.Fragment>
      <Head>
        <title>AndrejGround</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeContext.Provider value={{ dark, toggleDarkMode }}>
        <DrawerContextProvider>
          <CacheProvider value={emotionCache}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <MyLoader />
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </ThemeProvider>
          </CacheProvider>
        </DrawerContextProvider>
      </ThemeContext.Provider>
    </React.Fragment>
  );
};

export default MyApp;
