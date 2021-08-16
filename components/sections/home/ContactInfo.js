import React, { useRef } from 'react';
import { Box, List, ListItem, ListItemIcon, ListItemText, Typography, Divider, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
// import { Parallax } from 'react-parallax';
import Heading from './../../UI/Heading';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import IconButton from '@material-ui/core/IconButton';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import ClipboardCopy from '../../UI/ClipboardCopy';

const bgImage = '/img/bg4.jpg';

const useStyles = makeStyles(theme => ({
  contactInfo: {
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    position: 'relative',
    backgroundColor: 'rgba(0, 0, 0, .8)',
    overflow: 'hidden',
    zIndex: 1,
    [theme.breakpoints.up(600)]: {
      padding: theme.spacing(3),
    },
  },
  bgOverlay: {
    overflow: 'hidden',
    position: 'relative',
    '&::after': {
      content: '""',
      backgroundImage: `url('${bgImage}')`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      [theme.breakpoints.up(992)]: {
        transform: 'scale(1.3)',
        backgroundAttachment: 'fixed',
      },
    },
  },
  gridItem: {
    marginBottom: '1em',
  },
  icon: {
    color: '#fff',
    padding: 10,
    marginRight: 10,
    width: 25,
    height: 25,
    borderRadius: '100vh',
    border: `1px solid ${theme.palette.custom.accent}`,
    [theme.breakpoints.up(450)]: {
      marginRight: 20,
    },
    [theme.breakpoints.up(600)]: {
      width: 40,
      height: 40,
      padding: 20,
      marginRight: 30,
    },
    [theme.breakpoints.up(960)]: {
      marginRight: 50,
    },
  },
  socialIcon: {
    width: '50px !important',
    height: '50px !important',
    padding: '20px',
    color: '#fff',
    transition: `color ${theme.transitions.duration.short}ms ease-in-out`,
    '&:hover': {
      color: theme.palette.custom.accent,
    }
  },
  divider: {
    backgroundColor: theme.palette.custom.accent,
    boxShadow: '0px 10px 20px #000000be',
    margin: '20px 0',
    width: '100%'
  },
  emailLink: {
    transition: `color ${theme.transitions.duration.short}ms ease-in-out`,
    '&:hover': {
      color: theme.palette.custom.accent,
    }
  }
}));

const ContactInfo = ({ setActiveSection, setRefs }) => {
  const classes = useStyles();
  const emailRef = useRef(null);

  const { ref: scrollRef, inView: scrollInView, entry } = useInView({
    rootMargin: '-50%'
  });

  useEffect(() => {
    if (scrollInView)
      setActiveSection('contact');
  }, [scrollInView, setActiveSection])

  useEffect(() => {
    if (entry)
      setRefs('contact', entry.target)
  }, [entry, setRefs])

  const socials = [
    {
      link: 'https://twitter.com/nindzenjer',
      icon: <TwitterIcon className={classes.socialIcon} />
    },
    {
      link: 'https://www.linkedin.com/in/andrejforgac87/',
      icon: <LinkedInIcon className={classes.socialIcon} />
    },
    {
      link: 'https://github.com/Ninjaneer87',
      icon: <GitHubIcon className={classes.socialIcon} />
    },
  ];

  return (
    <div className={classes.bgOverlay}>
      <section className={classes.contactInfo} ref={scrollRef}>
        <Box maxWidth='90vw' width={450} padding='30px 0' margin='0 auto' className='fadeIn'>
          <Heading text="Contact info" inverse />
          <List>
            <ListItem disableGutters style={{ marginBottom: 20 }}>
              <ListItemIcon>
                <LocationOnOutlinedIcon classes={{ root: classes.icon }} fontSize='large' />
              </ListItemIcon>
              <ListItemText>
                <Typography style={{ fontWeight: 200, marginBottom: 10 }} className='white' variant='h4'>
                  Town, State
                </Typography>
                <Typography className='white' style={{ fontWeight: 400 }}>
                  Apatin, Serbia
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem disableGutters>
              <ListItemIcon>
                <MailOutlineIcon classes={{ root: classes.icon }} fontSize='large' />
              </ListItemIcon>
              <ListItemText>
                <Typography style={{ fontWeight: 200, marginBottom: 10 }} className='white' variant='h4'>
                  Email
                </Typography>
                <Typography
                  component='a'
                  href='mailto:contact@andrejground.com'
                  className={`white ${classes.emailLink}`}
                  style={{ fontWeight: 400, marginRight: 6 }}
                  ref={emailRef}
                >
                  contact@andrejground.com
                </Typography>
                <span className='white link'>
                  <ClipboardCopy
                    content='contact@andrejground.com'
                    ref={emailRef}
                  />
                </span>
              </ListItemText>
            </ListItem>
          </List>
          <Divider classes={{ root: classes.divider }} />
          <Box display='flex' justifyContent='center'>
            {socials.map(social =>
              <IconButton
                key={social.link}
                edge="start"
                aria-label="social"
                component='a'
                href={social.link}
                target='_blank'
                rel="noopener noreferrer"
              >
                {social.icon}
              </IconButton>
            )}
          </Box>
          <Link
            href='/contact'
            passHref
          >
            <Button
              fullWidth
              variant='outlined'
              color='secondary'
              endIcon={<SendOutlinedIcon />}
            >
              Send a message
            </Button>
          </Link>
        </Box>
      </section>
    </div>
  );
};

export default React.memo(ContactInfo);