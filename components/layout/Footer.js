import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import Logo from '../UI/Logo';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexFlow: 'column',
    minHeight: '30vh',
    position: 'relative',
    marginTop: 'auto',
    borderTop: `1px solid ${theme.palette.custom.boxShadowColor}`,
    [theme.breakpoints.up(600)]: {
      padding: theme.spacing(3),
    },
  },
  text: {
    fontWeight: 400,
    color: theme.palette.custom.textColor,
    padding: theme.spacing(3),
  },
}))
const year = new Date().getFullYear();

const Footer = () => {
  const classes = useStyles();


  return (
    <section className={`${classes.root} blurIn`}>
      <Typography className={classes.text}>
        Let&apos;s build some cool stuff!
      </Typography>
      <Logo />
      <Typography className={classes.text}>
        Copyright © {year} by <span className='cyan'>Andrej</span>Ground. All rights reserved.
      </Typography>
    </section>
  );
};

export default React.memo(Footer);