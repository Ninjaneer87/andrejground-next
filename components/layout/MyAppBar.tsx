import React, { Dispatch, SetStateAction } from 'react';
import { AppBar, Container, useMediaQuery, useTheme } from "@mui/material";
import Logo from "@/components/UI/Logo";
import { useInView } from "react-intersection-observer";
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import Link from 'next/link';
import TungstenOutlinedIcon from '@mui/icons-material/TungstenOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import { useContext } from "react";
import { useRouter } from 'next/dist/client/router';
import ThemeContext, { ThemeContextType } from 'context/themeContext';
import useBoxPosition from 'hooks/useBoxPosition';
import { isActive } from 'utils/utility';
import classes from './MyAppBar.module.scss';
import PageTop from '../UI/PageTop';
import { navItems } from 'utils/constants';
import { ListItemButton } from '@mui/material';

type Props = { setExpanded: Dispatch<SetStateAction<boolean>> }

const MyAppBar = ({ setExpanded }: Props) => {
  const { asPath: currentUrl } = useRouter();
  const { setDark } = useContext(ThemeContext) as ThemeContextType;
  const { ref: pageTop, inView: pageTopInView } = useInView({ threshold: 1 });
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('lg'));
  const { activeBoxRef, boxPosition } = useBoxPosition<HTMLAnchorElement, string>(currentUrl);

  return (
    <div>
      <PageTop ref={pageTop} />
      <AppBar className={`${classes.appBar} ${!pageTopInView ? classes['appBar--scrolled'] : ''}`} elevation={0}>
        <Container maxWidth='xl' className='flex justify-between'>
          <div className={`${classes.logo} ${!pageTopInView ? classes['logo--scrolled'] : ''}`}>
            <Logo inHeader />
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
                onClick={() => setExpanded(prev => !prev)}
                size="medium">
                <MenuIcon  className={classes.navIcon} />
              </IconButton>
              :
              <List
                disablePadding
                component='nav'
                className={classes.navbarInner}
                style={boxPosition}
              >
                {navItems.map(({id, text, exact, path}) =>
                  <Link
                    href={path}
                    passHref
                    key={id}
                  >
                    <ListItemButton
                      {...(isActive(path, currentUrl, exact) && { ref: activeBoxRef })}
                      className={`${classes.listItem}`}
                      component='a'
                      disableRipple
                    >
                      <ListItemText primary={text} />
                    </ListItemButton>
                  </Link>
                )}
              </List>
            }
            
            <button
              className="bg-themed-bg cursor-pointer text-themed-text hover:text-primary transition-colors shrink-0 rounded-full w-[40px] h-[40px] flex items-center justify-center outline-none border-none ml-1 dark:shadow-3d-button shadow-3d-button-inset"
              color="inherit"
              onClick={() => setDark(prev => !prev)}
            >
              <TungstenOutlinedIcon />
            </button>
          </List>
        </Container>
      </AppBar>
    </div>
  );
};

export default React.memo(MyAppBar);