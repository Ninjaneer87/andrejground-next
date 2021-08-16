import React from 'react';
import {makeStyles} from '@material-ui/core';
import ClientOnlyPortal from '../helpers/ClientOnlyPortal';

const useStyles = makeStyles(theme => ({
  starfall: {
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: -1,
    background: theme.palette.custom.backgroundColor,
    transition: `background ${theme.transitions.duration.short}ms ease`,
  },
  lines: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    margin: 'auto',
    width: '100%',
    opacity: 0.5
  },
  line: {
    position: 'absolute',
    width: '1px',
    height: '100%',
    top: 0,
    left: '50%',
    // backgroundColor: 'rgba(255, 255, 255, 0.1)',
    overflow: 'hidden',
    '&::after': {
      content: '""',
      display: 'block',
      position: 'absolute',
      height: '15vh',
      width: '100%',
      // transition: `transform ${theme.transitions.duration.short}ms ease`,
      top: '-50%',
      left: 0,
      opacity: .4,
      background: `linear-gradient(to bottom, transparent 0%, #00e5ffad 75%, ${theme.palette.custom.textColor} 100%)`,
      animation: 'drop 7s 0s infinite',
      '-webkit-animation-fill-mode': 'forwards',
      'animation-fill-mode': 'forwards',
      '-webkit-animation-timing-function': 'cubic-bezier(0.4, 0.26, 0, 0.97)',
      animationTimingFunction: 'cubic-bezier(0.4, 0.26, 0, 0.97)',
      animationDelay: 'var(--delay)',
      '-webkit-animation-delay': 'var(--delay)'
    },
  }
}));

const stars = [
  {
    animationDelay: '3s',
    translateX: '-45vw'
  },
  {
    animationDelay: '5s',
    translateX: '-30vw'
  },
  {
    animationDelay: '0s',
    translateX: '-15vw'
  },
  {
    animationDelay: '2s',
    translateX: '0'
  },
  {
    animationDelay: '1s',
    translateX: '15vw'
  },
  {
    animationDelay: '4s',
    translateX: '30vw'
  },
  {
    animationDelay: '6s',
    translateX: '45vw'
  },
];

const Starfall = () => {
  const classes = useStyles();

  return (
    <ClientOnlyPortal>
      <div className={classes.starfall}>
        <div className={classes.lines}>
          {stars.map(star =>
            <div
              key={star.translateX}
              className={classes.line}
              style={{
                transform: `translateX(${star.translateX})`,
                '--delay': star.animationDelay
              }}
            />)}
        </div>
      </div>
    </ClientOnlyPortal>
  );
};
export default React.memo(Starfall);