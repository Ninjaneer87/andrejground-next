import React from 'react';
import { AppBar, Container, useMediaQuery, useTheme } from "@mui/material";
import Logo from "@/components/UI/Logo";
import { useInView } from "react-intersection-observer";
import List from '@mui/material/List';
import TungstenOutlinedIcon from '@mui/icons-material/TungstenOutlined';
import { useContext } from "react";
import ThemeContext, { ThemeContextType } from 'context/themeContext';
import classes from './Header.module.scss';
import PageTop from '@/components/UI/PageTop';
import NavContext from 'context/navContext';
import HamburgerButton from '@/components/UI/HamburgerButton';
import HeaderNavItems from './HeaderNavItems';

const Header = () => {
  const { expanded, toggleExpanded } = useContext(NavContext);
  const { toggleDarkMode } = useContext(ThemeContext) as ThemeContextType;
  const { ref: pageTop, inView: pageTopInView } = useInView({ threshold: 1 });
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down(1300));

  return (
    <>
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
              <HamburgerButton 
                expanded={expanded} 
                toggleExpanded={toggleExpanded} 
              /> : 
              <HeaderNavItems />}
            
            <button
              className="bg-themed-bg cursor-pointer text-themed-text transition-colors shrink-0 rounded-full w-[40px] h-[40px] flex items-center justify-center outline-none border-none ml-1 dark:shadow-3d-button shadow-3d-button-inset"
              color="inherit"
              onClick={toggleDarkMode}
              aria-label="toggle dark-mode"
            >
              <TungstenOutlinedIcon />
            </button>
          </List>
        </Container>
      </AppBar>
    </>
  );
};

export default React.memo(Header);