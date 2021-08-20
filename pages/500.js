import ThemedTypography from '../components/UI/ThemedTypography';
import Head from 'next/head';
import PageTitle from '../components/UI/PageTitle';
import { Button } from '@material-ui/core';
import { useRouter } from 'next/dist/client/router';
import { makeStyles } from '@material-ui/core';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import { useCallback, useEffect, useState } from 'react';

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

  const goHome = useCallback(() => {
    router.replace('/')
  }, [router])
  
  useEffect(() => {
    if (counter === 0)
      goHome()
  }, [counter, goHome])


  return (
    <>
      <Head>
        <title>AndrejGround | Bad Request</title>
        <meta name='description' content="AndrejGround bad request page" />
      </Head>
      <div className={classes.bgOverlay}>
        <div className={classes.root}>
          <PageTitle pageTitle='Bad Request!' />
          <div className={classes.content}>

            <div className='animateBorder'>
              <ThemedTypography variant='h1' component='h2' className='cyan' style={{ textAlign: 'center' }}>
                500
              </ThemedTypography>
            </div>
            <ThemedTypography variant='h2' component='h2' style={{ textAlign: 'center' }}>
              The thing you are looking for might not exist...
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
              Back To Homepage {counter}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;