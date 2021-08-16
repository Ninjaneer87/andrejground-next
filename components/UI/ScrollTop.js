import React, { useCallback, useContext } from 'react';
import { IconButton } from '@material-ui/core';
import {makeStyles} from '@material-ui/core';
import NavContext from './../../context/navContext';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import ClientOnlyPortal from '../helpers/ClientOnlyPortal';

const useStyles = makeStyles(theme => ({
  scrolltopRoot: {
    position: 'fixed',
    bottom: 10,
    right: 10,
    padding: 3,
    transform: 'translateX(200%)',
    transition: `all ${theme.transitions.duration.short}ms ease-in-out`,
    border: `2px solid ${theme.palette.custom.accent}`,
    // backgroundColor: 'rgba(0, 0, 0, .1)',
    [theme.breakpoints.down(undefined)]: {
      transform: 'translateX(200%)',
    },
  },
  show: {
    transform: 'translateX(0)',
  }
}))


const ScrollTop = () => {
  const classes = useStyles();
  const { isScrolled } = useContext(NavContext);

  const scrollToTop = useCallback(() => {
    document.body.scrollIntoView({ behavior: 'smooth' })
  }, [])

  return (
    <ClientOnlyPortal>
      <IconButton
        edge="start"
        color="secondary"
        aria-label="scroll-top"
        onClick={scrollToTop}
        className={`${classes.scrolltopRoot} ${isScrolled && classes.show}`}
        size="medium">
        <KeyboardArrowUpIcon className={classes.navIcon} />
      </IconButton>
    </ClientOnlyPortal>
  );
};

export default ScrollTop;