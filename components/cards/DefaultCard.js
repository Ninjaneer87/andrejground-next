import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core';
import { useMediaQuery } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    // boxShadow: '0px 0px 30px 0px #ffffff66',
    padding: '1rem',
    borderRadius: '2rem',
    // backgroundColor: theme.palette.custom.cardBgColor,
    background: 'linear-gradient(135deg, rgba(0,0,0,0.05) 0%, rgba(255,255,255,0.05) 100%)',
    // border: `1px solid ${theme.palette.custom.borderColor}`,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'start',
    margin: '0 auto',
    transition: `all 200ms ease-in-out`,
    zIndex: 1,
    position: 'relative',
    boxShadow: `10px 10px 10px rgba(0, 0, 0, 0.04)`,
    backdropFilter: 'blur(6px)',
    [theme.breakpoints.up(600)]: {
      padding: '2rem',
    },
    '&::after': {
      content: '""',
      borderRadius: '2rem',
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
        // border: `1px solid ${theme.palette.custom.accent}`,
        transform: 'translate(-1px, 4px)',
        
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
      className={`${classes.root} scaleIn`}
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