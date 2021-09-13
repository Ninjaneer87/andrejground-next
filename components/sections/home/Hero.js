import React from 'react';
import { Button, Container, Grid, Box } from '@material-ui/core';
// import { Parallax } from 'react-parallax';
import Link from 'next/link';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { makeStyles } from '@material-ui/core';

const heroImage = '/img/bg.webp';

const useStyles = makeStyles(theme => ({
  hero: {
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    overflow: 'hidden',
    position: 'relative',
    zIndex: 1,
  },
  bgOverlay: {
    overflow: 'hidden',
    position: 'relative',
    '&::after': {
      content: '""',
      backgroundImage: `url('${heroImage}')`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'left',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      [theme.breakpoints.up(992)]: {
        transform: 'scale(1.2)',
        backgroundAttachment: 'fixed',
      },
      [theme.breakpoints.up(2000)]: {
        backgroundSize: 'cover',
      },
    },
  },
  welcomeIntro: {
    fontSize: '5.2vw',
    fontWeight: '100',
    lineHeight: '1.5',
    // maxWidth: '80vw',
    color: '#fff',
    textAlign: 'center',
    marginBottom: '30px',
    [theme.breakpoints.up(768)]: {
      fontSize: '3vw',
      marginBottom: '50px',
    },
    [theme.breakpoints.up(992)]: {
      fontSize: '2.5vw',
    },
    [theme.breakpoints.up(1400)]: {
      textAlign: 'start',
      width: '20vw',
      fontSize: '1.7vw',
    },
    [theme.breakpoints.up(2000)]: {
      textAlign: 'start',
      width: 500,
      fontSize: 40,
    },
  },
  welcomeTitle: {
    color: '#fff',
    fontWeight: 100,
    fontSize: '9vw',
    textAlign: 'center',
    textTransform: 'uppercase',
    lineHeight: .9,
    position: 'relative',
    marginBottom: '30px',
    [theme.breakpoints.up(768)]: {
      fontSize: '6vw',
    },
    [theme.breakpoints.up(960)]: {
    },
    [theme.breakpoints.up(1400)]: {
      textAlign: 'start',
      width: '65vw',
      fontSize: '4.2vw',
    },
    [theme.breakpoints.up(2000)]: {
      textAlign: 'start',
      width: 800,
      fontSize: 80,
    },
    '&::after': {
      content: 'attr(data-text)',
      width: 'inherit',
      position: 'absolute',
      left: 0,
      right: 0,
      top: '95%',
      color: 'hsla(0,0%,100%,.244)',
      transform: 'scaleY(-1)',
      lineHeight: '.85em',
      background: 'linear-gradient(0deg,hsla(0,0%,100%,.721),transparent 50%)',
      backgroundClip: 'text',
      '-webkit-background-clip': 'text',
      filter: 'blur(1.5px)',
      [theme.breakpoints.up(600)]: {
        color: 'hsla(0,0%,100%,.144)',
      },
      [theme.breakpoints.up(960)]: {
        color: 'hsla(0,0%,100%,.034)',
      }
    }
  }
}));
const Hero = ({ setActiveSection, setRefs }) => {
  const classes = useStyles();

  const { ref: scrollRef, inView: scrollInView, entry } = useInView({
    rootMargin: '-50%'
  });

  useEffect(() => {
    if (scrollInView)
      setActiveSection('home');
  }, [scrollInView, setActiveSection])

  useEffect(() => {
    if (entry)
      setRefs('home', entry.target)
  }, [entry, setRefs])

  return (
    <div className={classes.bgOverlay}>
      <section className={classes.hero} ref={scrollRef}>
        <Container maxWidth='lg' className='fadeIn'>
          <Grid container spacing={3} >
            <Grid item lg={8}>
              <div className={classes.welcomeIntro}>
                One stop for awesome front-end solutions.
              </div>
              <div className={classes.welcomeTitle} data-text='WELCOME TO THE ANDREJGROUND'>
                Welcome to the <span className='cyan'>Andrej</span>Ground
              </div>
            </Grid>
            <Grid item xs={12} lg={4}>
              <Box display='flex' alignItems='center' justifyContent='center' flexDirection='column' height='100%'>
                <Link
                  href='/portfolio'
                  passHref
                >
                  <Button
                    fullWidth
                    variant='outlined'
                    color='secondary'
                    style={{ marginBottom: '20px', maxWidth: '500px' }}
                    component='a'
                    endIcon={<ArrowRightAltIcon />}
                  // onClick={scrollTopClick}
                  >
                    PROJECTS
                  </Button>
                </Link>
                <Link
                  href='/contact'
                  passHref
                >
                  <Button
                    fullWidth
                    variant='contained'
                    color='secondary'
                    style={{ maxWidth: '500px' }}
                    component='a'
                    endIcon={<ArrowRightAltIcon />}
                  // onClick={scrollTopClick}
                  >
                    Let&apos;s build
                  </Button>
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </section></div>
  );
};

export default React.memo(Hero);