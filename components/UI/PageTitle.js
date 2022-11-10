import React from 'react';
import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const heroImage = '/img/bg.webp';

const useStyles = makeStyles(theme => ({
  pagetitleRoot: {
    display: 'flex',
    textAlign: 'start',
    alignItems: 'flex-end',
    minHeight: 200,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    position: 'relative',
    overflow: 'hidden',
    [theme.breakpoints.up(768)]: {
      minHeight: 250,
    },
    '&::after': {
      content: '""',
      backgroundImage: `url('${heroImage}')`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'left center',
      // backgroundAttachment: 'fixed',
      // transform: 'scale(1.3)',
      // opacity: .2,
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      zIndex: -1,
      // transform: 'scaleX(-1)'
      [theme.breakpoints.up(992)]: {
        transform: 'scale(1.2)',
        // backgroundAttachment: 'fixed',
      },
      [theme.breakpoints.up(2000)]: {
        backgroundSize: 'cover',
      },
    }
  },
  pageTitle: {
    color: '#fff',
    fontSize: '2rem',
    padding: '1rem',
    [theme.breakpoints.up(960)]: {
      fontSize: '2.5rem',
      padding: '2rem',
    },
    [theme.breakpoints.up(1400)]: {
      fontSize: '3rem',
      padding: '3rem',
    }
  }
}));

const PageTitle = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.pagetitleRoot}>
      <Container maxWidth='xl'>
        <Typography component='h1' variant='h2' className={`${classes.pageTitle} blurIn`}>
          {props.pageTitle}
        </Typography>
      </Container>
    </div>
  );
};

export default React.memo(PageTitle);