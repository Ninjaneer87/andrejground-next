import React from 'react';
import PageTitle from "../components/UI/PageTitle";
import { makeStyles } from '@material-ui/core';
import SendMessage from '../components/sections/contact/SendMessage';
import Info from '../components/sections/contact/Info';
import Head from 'next/head';

const patternImage2 = '/img/pattern2.png';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexFlow: 'column',
    minHeight: '100vh',
  },
  bgOverlay: {
    overflow: 'hidden',
    position: 'relative',
    '&::after': {
      content: '""',
      // backgroundImage: `url('${patternImage2}')`,
      backgroundPosition: 'center',
      opacity: .35,
      filter: 'drop-shadow(0px 0px 1px #fff)',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      transform: 'scaleX(-1)',
      zIndex: -1
    },
  },
}))

const Contact = () => {
  const classes = useStyles();

  return (
    <>
      <Head>
        <title>AndrejGround | Contact</title>
        <meta name='description' content="AndrejGround contact page" />
      </Head>
      <div className={classes.bgOverlay}>
        <div className={classes.root}>
          {/* <PageTitle pageTitle='Contact' /> */}
          <Info />
          <SendMessage />
        </div>
      </div>
    </>
  );
};

export default React.memo(Contact);