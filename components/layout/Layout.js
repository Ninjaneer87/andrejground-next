import React, { useContext, useEffect } from 'react';
import { makeStyles } from "@material-ui/core";
import MyAppBar from './MyAppBar';
import MyDrawer from './MyDrawer';
import MyLoader from './../UI/MyLoader';
import ScrollTop from './../UI/ScrollTop';
import Notification from '../UI/Notification';
import Modal from '../UI/Modal';
import Footer from './Footer';
import ThemeContext from '../../context/themeContext';
import useDarkMode from 'use-dark-mode';
import Starfall from '../UI/Starfall';


const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '100vh',
  },
  page: {
    // display: 'flex',
    // flexFlow: 'column',
    // paddingBottom: theme.spacing(3),
    '-ms-transform': 'translate3d(0, 0, 0)',
    '-webkit-transform': 'translate3d(0, 0, 0)',
    'transform': 'translate3d(0, 0, 0)',
  },
}));

const Layout = (props) => {
  const classes = useStyles();
  const { value: isDark } = useDarkMode();
  const { setDarkTheme } = useContext(ThemeContext);

  useEffect(() => {
    setDarkTheme(isDark)
  }, [isDark, setDarkTheme])

  return (
    <div className={classes.root}>
      <MyLoader />
      <MyAppBar />
      <MyDrawer />
      <Starfall />
      <div className={classes.page}>
        {props.children}
      </div>
      <ScrollTop />
      <Notification />
      <Modal />
      <Footer />
    </div>
  );
};

export default Layout;