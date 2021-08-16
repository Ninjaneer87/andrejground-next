import React from 'react';
import Starfall from "../components/UI/Starfall"
import PageTitle from "../components/UI/PageTitle";
import { makeStyles } from '@material-ui/core';
import Intro from '../components/sections/about/Intro';
import AboutMe from '../components/sections/about/AboutMe';
import Values from '../components/sections/about/Values';
import { useRef } from 'react';
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
      backgroundImage: `url('${patternImage2}')`,
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
}));

const About = () => {
  const classes = useStyles();
  const ref = useRef(null);

  return (
    <>
      <Head>
        <title>AndrejGround | About</title>
        <meta name='description' content="AndrejGround about page" />
      </Head>
      <div className={classes.bgOverlay}>
        <div className={classes.root}>
          <Starfall />
          <PageTitle pageTitle='About' />
          <Intro ref={ref} />
          <AboutMe ref={ref} />
          <Values />
        </div>
      </div>
    </>
  );
};

export default React.memo(About);