import React from 'react';
import { makeStyles } from '@material-ui/core';
import Intro from '../components/sections/about/Intro';
import AboutMe from '../components/sections/about/AboutMe';
import Values from '../components/sections/about/Values';
import Head from 'next/head';


const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 70,
    display: 'flex',
    flexFlow: 'column',
    minHeight: '100vh',
  },
  bgOverlay: {
    overflow: 'hidden',
    position: 'relative',
    '&::after': {
      content: '""',
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

const refs = {};
const setRefs = (sectionName, ref) => {
  refs[sectionName] = ref;
};

const About = () => {
  const classes = useStyles();

  return (
    <>
      <Head>
        <title>AndrejGround | About</title>
        <meta name='description' content="AndrejGround about page" />
      </Head>
      <div className={classes.bgOverlay}>
        <div className={classes.root}>
          <Intro 
            refs={refs} 
          />
          <AboutMe 
            setRefs={setRefs}
            refs={refs} 
          />
          <Values 
            setRefs={setRefs}
          />
        </div>
      </div>
    </>
  );
};

export default React.memo(About);