import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import { ThemeProvider } from '@material-ui/core/styles';
import { NavContextProvider } from '../context/navContext';
import { darkTheme, lightTheme, defaultTheme } from '../themes';
import useDarkMode from 'use-dark-mode';
import '@fortawesome/fontawesome-free/js/all';
import '../styles/globals.css'
import { useState, useContext } from 'react';
import ThemeContext, { ThemeContextProvider } from '../context/themeContext';

export default function MyApp(props) {
  const { Component, pageProps } = props;
  const { value: isDark } = useDarkMode(true);
  const [theme, setTheme] = useState(defaultTheme);
  const {setDarkTheme} = useContext(ThemeContext)

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
    document.body.classList.add('visible')
  }, []);

  React.useEffect(() => {
    setTheme(isDark ? darkTheme : lightTheme)
  }, [isDark])

  return (
    <React.Fragment>
      <Head>
        <title>AndrejGround</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeContextProvider>
        <NavContextProvider>
          <ThemeProvider theme={theme}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
        </NavContextProvider>
      </ThemeContextProvider>
    </React.Fragment>
  );
}
