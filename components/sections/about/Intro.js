import React from 'react';
import { Box, Container, List, ListItem, ListItemIcon, ListItemText, makeStyles, Typography, Button } from '@material-ui/core';
import Heading from '../../UI/Heading';
// import MenuBookIcon from '@material-ui/icons/MenuBook';
import LocalLibraryOutlinedIcon from '@material-ui/icons/LocalLibraryOutlined';
import ImportantDevicesOutlinedIcon from '@material-ui/icons/ImportantDevicesOutlined';
import VideoLibraryOutlinedIcon from '@material-ui/icons/VideoLibraryOutlined';
import { useCallback } from 'react';

const logoImg = '/img/logo.png';

const useStyles = makeStyles(theme => ({
  intro: {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    minHeight: '100vh',
  },
  subTitle: {
    maxWidth: 600,
    color: theme.palette.custom.textColor,
    fontWeight: 500
  },
  logoImage: {
    backgroundImage: `url(${logoImg})`,
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    width: 100,
    height: 100,
    padding: 30,
    margin: '80px 0',
    boxSizing: 'border-box',
    borderRadius: '100vh',
    position: 'relative',
    filter: 'drop-shadow(0px 0px 5px #000)',
    '&::after': {
      content: '""',
      position: 'absolute',
      top: -40,
      bottom: -40,
      left: -40,
      right: -40,
      borderLeft: `2px solid ${theme.palette.custom.accent}`,
      borderRight: `2px solid #fff`,
      borderRadius: '100vh',
    }
  },
  list: {
    display: 'flex',
    alignItems: 'flex-start',
    [theme.breakpoints.down(600)]: {
      flexWrap: 'wrap',
    },
  },
  listItem: {
    textAlign: 'center',
    color: theme.palette.custom.textColor,
    // padding: 0,
    padding: '30px 0',
    '&:nth-child(2)': {
      '&::before': {
        content: '""',
        position: 'absolute',
        right: 0,
        top: '50%',
        transform: 'translateY(-50%)',
        width: 1,
        height: '50%',
        backgroundColor: theme.palette.custom.accent,
        [theme.breakpoints.down(600)]: {
          right: '50%',
          top: 'unset',
          bottom: 0,
          transform: 'translateX(50%)',
          width: '50%',
          height: 1,
        },
      },
      '&::after': {
        content: '""',
        position: 'absolute',
        left: 0,
        top: '50%',
        transform: 'translateY(-50%)',
        width: 1,
        height: '50%',
        backgroundColor: theme.palette.custom.accent,
        [theme.breakpoints.down(600)]: {
          right: '50%',
          top: 0,
          transform: 'translateX(50%)',
          width: '50%',
          height: 1,
        },
      }
    }
  },
  icon: {
    justifyContent: 'center',
    color: theme.palette.custom.accent,
    marginBottom: 30,
    '& svg': {
      fontSize: '3rem',
    }
  }
}));

const stats = [
  {
    icon: <LocalLibraryOutlinedIcon fontSize='large' />,
    number: '2+',
    desc: 'years into frontend development'
  },
  {
    icon: <ImportantDevicesOutlinedIcon fontSize='large' />,
    number: '1+',
    desc: 'years of building projects'
  },
  {
    icon: <VideoLibraryOutlinedIcon fontSize='large' />,
    number: '300+',
    desc: 'hours of online courses and tutorials'
  },
]
const Intro = React.forwardRef((props, ref) => {
  const classes = useStyles();
  
  const goToAndrej = useCallback(() => {
    if (ref.current)
      ref.current.scrollIntoView({ behavior: 'smooth' });
  }, [ref])

  return (
    <Container maxWidth='xl' className={`${classes.intro} fadeIn`}>
      <Heading text="What is AndrejGround?" />
      <Typography variant='h6' className={classes.subTitle}>
        AndrejGround is <span className='cyan' style={{ cursor: 'pointer' }} onClick={goToAndrej}>Andrej</span>&apos;s playground for some UI & UX ideas, features and functionalities
      </Typography>
      <Box className={classes.logoImage} />
      <List className={classes.list}>
        {stats.map(stat => (
          <ListItem className={classes.listItem} key={stat.number}>
            <ListItemText>
              <ListItemIcon classes={{ root: classes.icon }}>
                {stat.icon}
              </ListItemIcon>
              <Typography variant='h4'>
                {stat.number}
              </Typography>
              <Typography>
                {stat.desc}
              </Typography>
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </Container>
  );
});
Intro.displayName = 'Intro';

export default Intro;