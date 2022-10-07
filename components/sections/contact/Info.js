import React, { useRef } from 'react';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
// import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
import { Avatar, Container, Grid, makeStyles, Box, IconButton, Tooltip } from '@material-ui/core';
import DefaultCard from '../../cards/DefaultCard';
import ThemedTypography from './../../UI/ThemedTypography';
import Heading from '../../UI/Heading';
import ClipboardCopy from '../../UI/ClipboardCopy';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';

const infoItems = [
  {
    id: 0,
    label: 'Located at',
    text: 'Serbia',
    icon: <LocationOnOutlinedIcon fontSize='large' />
  },
  {
    id: 1,
    label: 'Email',
    text: 'contact@andrejground.com',
    icon: <MailOutlineIcon fontSize='large' />
  },
  {
    id: 2,
    label: 'Current status',
    text: <span>Frontend Developer @ <a 
        href="https://careers.single.earth/people/1059582-andrej-forgac"
        target='_blank'
        rel="noreferrer"
        className='cyan'
      >
        Single.Earth
      </a>
    </span>,
    icon: <WorkOutlineIcon fontSize='large' />
  },
];

const useStyles = makeStyles(theme => ({
  root: {
    paddingBottom: 50,
  },
  itemContent: {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: '200px',
  },
  avatar: {
    padding: 30,
    marginBottom: 30,
    backgroundColor: 'transparent',
    border: `2px solid ${theme.palette.custom.accent}`,
    color: theme.palette.custom.accent
  },
  socials: {
    // backgroundColor: theme.palette.custom.cardBgColor,
    background: 'linear-gradient(135deg, rgba(33,33,33,0.05) 0%, rgba(255,255,255,0.05) 100%)',
    borderRadius: '2rem',
    // border: `1px solid ${theme.palette.custom.borderColor}`,
    transition: `all ${theme.transitions.duration.short}ms ease-in-out`,
    boxShadow: `10px 10px 10px rgba(0, 0, 0, 0.08)`,
    backdropFilter: 'blur(6px)',
    // '&:hover': {
    //   border: `1px solid ${theme.palette.custom.accent}`,
    // }
  },
  socialIcon: {
    width: 50,
    height: 50,
    padding: '20px',
    color: theme.palette.custom.textColor,
    transition: `color ${theme.transitions.duration.short}ms ease-in-out`,
    '&:hover': {
      color: theme.palette.custom.accent,
    }
  },
}))
const Info = () => {
  const classes = useStyles();
  const emailRef = useRef(null)

  const socials = [
    {
      name: 'Twitter',
      link: 'https://twitter.com/nindzenjer',
      icon: <TwitterIcon className={classes.socialIcon} />
    },
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/andrejforgac87/',
      icon: <LinkedInIcon className={classes.socialIcon} />
    },
    {
      name: 'GitHub',
      link: 'https://github.com/Ninjaneer87',
      icon: <GitHubIcon className={classes.socialIcon} />
    },
  ];

  return (
    <Container maxWidth='lg' className={`${classes.root} fadeIn`}>
      <Heading text="Let's connect" />
      <Grid container alignItems='center' justifyContent='center' spacing={5} style={{marginBottom: 20}}>
        {infoItems.map(item => (
          <Grid key={item.id} item xs={12} sm={6} md={4}>
            <DefaultCard height='100%'>
              <div className={classes.itemContent}>
                <ThemedTypography style={{ marginBottom: 40, fontWeight: 400 }} variant='h6'>
                  {item.label}
                </ThemedTypography>
                <Avatar className={classes.avatar}>{item.icon}</Avatar>
                {item.label === 'Email' ?

                  <ThemedTypography
                    ref={emailRef}
                    style={{ fontWeight: 400, textAlign: 'center' }}
                  >
                    <a className='link' style={{ marginRight: 6 }} href='mailto:contact@andrejground.com'>{item.text}</a>
                    <ClipboardCopy ref={emailRef} content={item.text} />
                  </ThemedTypography> :

                  <ThemedTypography
                    style={{ fontWeight: 400, textAlign: 'center' }}
                  >
                    {item.text}
                  </ThemedTypography>}
              </div>
            </DefaultCard>
          </Grid>
        ))}
      </Grid>
      <DefaultCard padding='0px'>
        <Box display='flex' justifyContent='center'>
          {socials.map(social =>
            <IconButton
              key={social.name}
              edge="start"
              aria-label="social"
              component='a'
              href={social.link}
              target='_blank'
              rel="noopener noreferrer"
              size='small'
            >
              <Tooltip title={social.name} arrow >
                {social.icon}
              </Tooltip>
            </IconButton>
          )}
        </Box>
      </DefaultCard>
    </Container>
  );
};

export default Info;