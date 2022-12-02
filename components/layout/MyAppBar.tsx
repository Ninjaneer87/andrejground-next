import React, { Dispatch, SetStateAction } from 'react';
import { AppBar, Container, useMediaQuery, useTheme } from "@mui/material";
import Logo from "@/components/UI/Logo";
import { useInView } from "react-intersection-observer";
import List from '@mui/material/List';
import TungstenOutlinedIcon from '@mui/icons-material/TungstenOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import { useContext } from "react";
import ThemeContext, { ThemeContextType } from 'context/themeContext';
import classes from './MyAppBar.module.scss';
import PageTop from '../UI/PageTop';
import NavItems from './NavItems';

type Props = { setExpanded: Dispatch<SetStateAction<boolean>> }

const MyAppBar = ({ setExpanded }: Props) => {
  const { setDark } = useContext(ThemeContext) as ThemeContextType;
  const { ref: pageTop, inView: pageTopInView } = useInView({ threshold: 1 });
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('lg'));

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
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={() => setExpanded(prev => !prev)}
                size="medium">
                <MenuIcon  className={classes.navIcon} />
              </IconButton>
              :
              <NavItems />
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
    </>
  );
};

export default React.memo(MyAppBar);