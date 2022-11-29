import React, { useEffect } from 'react';
import { AppBar, Container, useMediaQuery, useTheme } from "@mui/material";
import Logo from "@/components/UI/Logo";
import { useInView } from "react-intersection-observer";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Link from 'next/link';
import Brightness2Icon from '@mui/icons-material/Brightness2';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import NavContext, { menuItems } from "context/navContext";
import { useContext } from "react";
import { useRouter } from 'next/dist/client/router';
import ThemeContext, { ThemeContextType } from 'context/themeContext';
import useBoxPosition from 'hooks/useBoxPosition';
import { isActive } from 'utils/utility';
import classes from './MyAppBar.module.scss';

const MyAppBar = () => {
  const { toggleExpanded, setIsScrolled } = useContext(NavContext);
  const { asPath: currentUrl } = useRouter();
  const { dark, setDark } = useContext(ThemeContext) as ThemeContextType;
  const { ref: toolbarScrollRef, inView: toolbarInView } = useInView({ threshold: 1 });
  const isScrolled = !toolbarInView;
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('lg'));
  const {activeBoxRef, boxPosition, setBoxPosition} = useBoxPosition<HTMLAnchorElement>();

  const boxCoordsStyles = {
    "--width": `${boxPosition.width - 4}px`,
    "--left": `${boxPosition.left + 2}px`,
    "--top": `${boxPosition.top + 2}px`,
    "--height": `${boxPosition.height - 8}px`,
  } as React.CSSProperties;

  useEffect(() => {
    setBoxPosition();
  }, [currentUrl, setBoxPosition]);

  useEffect(() => {
    setIsScrolled(isScrolled);
  }, [isScrolled, setIsScrolled]);

  return (
    <div>
      <div ref={toolbarScrollRef}>
        <div />
      </div>
      <AppBar className={`${classes.appBar} ${isScrolled ? classes['appBar--scrolled'] : ''}`} elevation={0}>
        <Container maxWidth='xl' className='flex justify-between'>
          <div className={`${classes.logo} ${isScrolled ? classes['logo--scrolled'] : ''}`}>
            <Logo header />
          </div>
          <List
            component='nav'
            className={classes.navbar}
            disablePadding
          >
            {isSmallScreen ?
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleExpanded}
                size="medium">
                <MenuIcon  className={classes.navIcon} />
              </IconButton>
              :
              <List
                disablePadding
                component='nav'
                className={classes.navbarInner}
                style={boxCoordsStyles}
              >
                {menuItems.map(({id, text, exact, path}) =>
                  <Link
                    href={path}
                    passHref
                    key={id}
                  >
                    <ListItem
                      {...(isActive(path, currentUrl, exact) && { ref: activeBoxRef })}
                      className={`${classes.listItem}`}
                      button
                      component='a'
                      onClick={setBoxPosition}
                      disableRipple
                    >
                      <ListItemText primary={text} />
                    </ListItem>
                  </Link>
                )}
              </List>
            }

            <IconButton
              edge="start"
              className="ml-1"
              color="inherit"
              aria-label="menu"
              onClick={() => setDark(prev => !prev)}
              size="medium"
            >
              {dark ? <Brightness2Icon className={classes.navIcon} /> : <WbSunnyIcon className={classes.navIcon} />}
            </IconButton>
          </List>
        </Container>
      </AppBar>
    </div>
  );
};

export default React.memo(MyAppBar);