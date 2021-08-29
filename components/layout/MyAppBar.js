import React, { useEffect, useState, useRef, useCallback } from 'react';
import { AppBar, useMediaQuery, useTheme } from "@material-ui/core";
// import makeStyles from '@material-ui/styles/makeStyles';
import { makeStyles } from '@material-ui/core';
import Logo from "../UI/Logo";
import { useInView } from "react-intersection-observer";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Link from 'next/link';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import NavContext, { menuItems } from "../../context/navContext";
import { useContext } from "react";
import { grey } from "@material-ui/core/colors";
import { useRouter } from 'next/dist/client/router';
import useDarkMode from 'use-dark-mode';
import ThemeContext from '../../context/themeContext';

const useStyles = makeStyles(theme => ({
  appBar: ({ isScrolled }) => {
    const styles = {
      transition: `all 250ms ease-in-out`,
      minHeight: 90,
      flexFlow: 'row',
      justifyContent: 'space-between',
      color: theme.palette.custom.textColor,
      alignItems: 'center',
      background: 'transparent',
      borderBottom: `1px solid transparent`,
      left: 0,
      right: 0,
      width: '100vw',
      zIndex: 5,
      boxSizing: 'border-box',
      [theme.breakpoints.up(1400)]: {
        paddingRight: theme.spacing(10)
      }
    };
    const scrolled = {
      color: theme.palette.custom.textColor,
      minHeight: 60,
      borderBottom: `1px solid ${theme.palette.custom.appbarBorderColor}`,
      background: grey[900],
      boxShadow: `0px 0px 20px rgba(0, 0, 0, 0.38)`,
    };
    return isScrolled ? { ...styles, ...scrolled } : styles;
  },
  logo: {
    transition: `all 250ms ease-in-out`,
    transform: ({ isScrolled }) => isScrolled ? 'translateX(30%)' : 'translateX(60%)',
    width: 'fit-content'
  },
  navbar: {
    width: 'fit-content',
    display: 'flex',
    flexFlow: 'row',
    marginRight: 8,
  },
  navbarInner: ({ darkMode }) => {
    return {
      width: 'fit-content',
      display: 'flex',
      flexFlow: 'row',
      marginRight: 8,
      [theme.breakpoints.up(600)]: {
        marginRight: theme.spacing(5),
      },
      '&::after': {
        content: '""',
        position: 'absolute',
        border: `1px solid ${darkMode ? theme.palette.custom.accent : 'transparent'} `,
        width: 'var(--width)',
        left: 0,
        bottom: 10,
        // height: 'var(--height)',
        height: 4,
        backgroundColor: `${darkMode ? 'transparent' : theme.palette.custom.accent} `,
        zIndex: -1,
        borderRadius: '6px',
        transition: `all ${theme.transitions.duration.short}ms ease 0s`,
        transform: 'translateX(var(--left))'
      }
    }
  },
  listItem: ({ isScrolled, darkMode }) => {
    const styles = {
      width: 'fit-content',
      paddingLeft: theme.spacing(5),
      paddingRight: theme.spacing(5),
      transition: `color ${theme.transitions.duration.short}ms ease-in-out`,
      color: '#fff',
      '&:hover': {
        color: theme.palette.custom.accent,
        backgroundColor: 'unset'
      }
    }
    const scrolled = {
      // color: theme.palette.custom.textColor,
    }
    return isScrolled ? { ...styles, ...scrolled } : styles;
  },
  active: {
    color: `${theme.palette.custom.accent} !important`
  },
  navIcon: {
    color: '#fff',
    transition: `color ${theme.transitions.duration.short}ms ease-in-out`,
    '&:hover': {
      color: theme.palette.custom.accent,
      // backgroundColor: 'unset'
    }
  }
}));

const initialBox = {
  width: 0,
  left: 0,
  top: 0,
  height: 0,
}

const MyAppBar = (props) => {
  const { toggleExpanded, setIsScrolled } = useContext(NavContext);
  const { asPath } = useRouter();
  const { darkMode } = useContext(ThemeContext)
  const { toggle } = useDarkMode();

  const activeRef = useRef(null);
  const [mounting, setMounting] = useState(true);
  const [box, setBox] = useState(initialBox);

  const setBoxToActiveRef = useCallback(() => {
    const newBox = {
      width: activeRef.current?.offsetWidth,
      left: activeRef.current?.offsetLeft,
      top: activeRef.current?.offsetTop,
      height: activeRef.current?.offsetHeight,
    };
    setBox(newBox);
  }, [])

  useEffect(() => {
    if (activeRef.current && mounting) {
      setBoxToActiveRef();
      setMounting(false);
    }
  }, [box, mounting, setBoxToActiveRef]);

  useEffect(() => {
    setBoxToActiveRef();
  }, [asPath, setBoxToActiveRef]);

  const { ref: toolbarScrollRef, inView: toolbarInView } = useInView({
    threshold: 1
  });
  const isScrolled = !toolbarInView;

  const classes = useStyles({ isScrolled, darkMode });
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    setIsScrolled(isScrolled);
  }, [isScrolled, setIsScrolled]);

  return (
    <div>
      <div ref={toolbarScrollRef}>
        <div />
      </div>
      <AppBar className={classes.appBar} elevation={0}>
        <div className={classes.logo}>
          <Logo header />
        </div>
        <List
          component='nav'
          className={classes.navbar}
        >
          {isSmallScreen ?
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={toggleExpanded}
              size="medium">
              <MenuIcon fontSize='large' className={classes.navIcon} />
            </IconButton>
            :
            <List
              component='nav'
              className={classes.navbarInner}
              style={{
                '--width': Math.round(box.width) - 4 + 'px',
                '--left': Math.round(box.left) + 2 + 'px',
                '--top': Math.round(box.top) + 2 + 'px',
                '--height': Math.round(box.height) - 8 + 'px',
              }}
            >
              {menuItems.map(item =>
                <Link
                  href={item.path}
                  passHref
                  key={item.id}
                >
                  <ListItem
                    ref={(
                      (asPath.startsWith(item.path) && item.path.length > 1) ||
                      (asPath === '/' && asPath === item.path)
                    ) ? activeRef : null}
                    className={`${(
                      (asPath.startsWith(item.path) && item.path.length > 1) ||
                      (asPath === '/' && asPath === item.path)
                    ) && classes.active} 
                 ${classes.listItem}`}
                    button
                    component='a'
                    onClick={setBoxToActiveRef}
                  >
                    <ListItemText primary={item.text} />
                  </ListItem>
                </Link>
              )}
            </List>
          }

          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggle}
            size="medium"
          >
            {darkMode ? <Brightness2Icon className={classes.navIcon} /> : <WbSunnyIcon className={classes.navIcon} />}
          </IconButton>
        </List>
      </AppBar>
    </div>
  );
};

export default React.memo(MyAppBar);