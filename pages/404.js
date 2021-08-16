import ThemedTypography from './../components/UI/ThemedTypography';
import Head from 'next/head';
import Starfall from '../components/UI/Starfall';
import PageTitle from '../components/UI/PageTitle';
import { Button } from '@material-ui/core';
import { useRouter } from 'next/dist/client/router';
import { makeStyles } from '@material-ui/core';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import { useEffect, useState } from 'react';

const patternImage2 = '/img/pattern2.png';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexFlow: 'column',
    minHeight: '80vh',
    // alignItems: 'center',
    // justifyContent: 'center',
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
  content: {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    width: 600,
    maxWidth: '90vw',
    margin: '50px auto'
  },
}));

const NotFound = () => {
  const classes = useStyles();
  const router = useRouter();
  const [counter, setCounter] = useState(10);

  useEffect(() => {
    setInterval(() => {
      setCounter((prevCounter) => prevCounter - 1)
    }, 1000);
  }, [])

  useEffect(() => {
    if (counter === 0)
      goHome()
  }, [counter])

  const goHome = () => {
    router.replace('/')
  }
  return (
    <>
      <Head>
        <title>AndrejGround | Wrong Turn</title>
        <meta name='description' content="AndrejGround page not found" />
      </Head>
      <div className={classes.bgOverlay}>
        <div className={classes.root}>
          <Starfall />
          <PageTitle pageTitle='Wrong Turn!' />
          <div className={classes.content}>

            <div className='animateBorder'>
              <ThemedTypography variant='h1' component='h2' className='cyan' style={{ textAlign: 'center' }}>
                404
              </ThemedTypography>
            </div>
            <ThemedTypography variant='h2' component='h2' style={{ textAlign: 'center' }}>
              Back to safety before it&apos;s too late!
            </ThemedTypography>
            <br />
            <Button
              variant='contained'
              color='secondary'
              // fullWidth
              style={{margin: '20px auto', width: '100%', maxWidth: '400px'}}
              onClick={goHome}
              endIcon={<ErrorOutlineIcon />}
              startIcon={<ErrorOutlineIcon />}
            >
              {counter}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;