import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core';
import { useMediaQuery } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'start',
    margin: '0 auto',
    transition: `all 200ms ease-in-out`,
    position: 'relative',
    boxShadow: theme.palette.custom.cardBoxShadow,
    [theme.breakpoints.up(600)]: {
      padding: '2rem',
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      boxShadow: `10px 10px 40px rgba(0, 0, 0, 0.08)`,
      opacity: 0,
      transition: `all 200ms linear`,
      pointerEvents: 'none',
    },
    '&:hover': {
      [theme.breakpoints.up(992)]: {
        '&::after': {
          opacity: 1
        },
      },
    },
  },
  content: {
    padding: '1.5rem 0',
    width: '100%'
  }
}))
const DefaultCard = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down(600));

  return (
    <div
      className={`${classes.root}`}
      style={{ 
        maxWidth: props.maxWidth || '100%', 
        height: props.height || '100%',
        width: props.width || 'auto',
        padding: props.padding,
        // padding: props.padding || `${isSmallScreen ? '1rem .5rem' : '2rem'}`,
      }}
    >
      <div className={classes.content}>
        {props.children}
      </div>
    </div>
  );
};

export default React.memo(DefaultCard);