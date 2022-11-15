import React, { useCallback, useState, useEffect } from 'react';
import { Container, makeStyles, List, ListItem, Typography, ListItemIcon } from '@material-ui/core';
import Heading from '../../UI/Heading';
import patternImage2 from '../../../public/img/pattern2.webp';
// import Image from 'next/image';
import { hideModal, showModal } from './../../UI/Modal';
import ThemedTypography from '../../UI/ThemedTypography';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import ScheduleIcon from '@material-ui/icons/Schedule';
import { formatDate } from './../../helpers/utility';
import StickyInfo from './StickyInfo';
import { useInView } from 'react-intersection-observer';
import styles from './SingleBlogContent.module.css';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    // alignItems: 'center',
    maxWidth: 800,
    minHeight: '100vh',
    position: 'relative',
    paddingBottom: 50,
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(3),
    },
  },
  bgOverlay: {
    // overflow: 'hidden',
    position: 'relative',
    '&::after': {
      content: '""',
      // backgroundImage: `url('${patternImage2.src}')`,
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
  dateAndAuthor: {
    padding: '0px',
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: theme.palette.custom.cardBgColor,
    width: 'fit-content'
  },
  dateAndAuthorList: {
    color: theme.palette.custom.textColor,
    display: 'flex',
    // flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  image: {
    backgroundImage: ({ image }) => image && `url('/images/${image}')`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: 500,
    maxHeight: '50vw',
    // maxWidth: 800,
    width: '100%',
    boxSizing: 'border-box',
    filter: `drop-shadow(0px 10px 10px #0000004e)`,
    overflow: 'hidden',
    borderRadius: 10,
    cursor: 'zoom-in',
    marginBottom: 40,
  },
  stickyInfo: {
    position: 'sticky',
    top: '20%',
    height: 0,
    marginLeft: 20,
    display: 'none',
    opacity: 0,
    transition: 'opacity 150ms ease-in',
    pointerEvents: 'none',
    [theme.breakpoints.up(1200)]: {
      display: 'block',
    }
    // width: 200
  },
  show: {
    pointerEvents: 'all',
    opacity: 1
  },
  subtitle: {
    color: theme.palette.custom.textColor,
    fontWeight: 500,
    padding: theme.spacing(1),
    borderRadius: 10,
    width: 'fit-content',
    minWidth: 200,
    // margin: '0 auto',
    position: 'relative',
    marginBottom: '10px',
    textAlign: 'start',
    opacity: .85,
  },
  divider: {
    backgroundColor: theme.palette.custom.accent,
    boxShadow: '0px 10px 20px #000000be',
    margin: '20px 0',
    width: '100%'
  },
  content: {
    '& p': {
      fontSize: '16px',
      lineHeight: '32px',
      letterSpacing: '-0.005em',
      fontWeight: '400',
      [theme.breakpoints.up(800)]: {
        fontSize: '17px',
      },
      [theme.breakpoints.up(1200)]: {
        fontSize: '20px',
      },
    },
    '& div': {
      fontSize: '30px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 30,
    },
    '& h4': {
      fontSize: '23px',
      // marginBottom: 20,
      [theme.breakpoints.up(1200)]: {
        fontSize: '25px',
      },
    },
    '& a': {
      color: theme.palette.custom.accent
    }
  }
}))

const SingleBlogContent = (props) => {
  const classes = useStyles({ image: props.image });
  const [showSticky, setShowSticky] = useState(false);

  const { ref: scrollRef, inView: scrollInView, entry } = useInView({
    rootMargin: '-30%'
  });

  useEffect(() => {
    setShowSticky(scrollInView)
  }, [scrollInView])

  const openImage = () => {
    const imageContent = <div className={styles.zoomedImage} onClick={() => hideModal()}>
      {/* <Image src={`/images/${props.image}`} layout="fill" objectFit='contain' /> */}
      <div className={styles.zoomedImageBg} style={{backgroundImage: `url('/images/${props.image}')`}}/>
    </div>;

    showModal(imageContent);
  }

  return (
    <div className={classes.bgOverlay} >
      <div className={`${classes.stickyInfo} ${showSticky ? classes.show : ''}`}>
        <StickyInfo
          author={props.author}
          createdAt={props.createdAt}
          title={props.title}
        />
      </div>
      <Container maxWidth='xl' className={classes.root + ' blurIn'}>
        <Heading align='start' text={props.title} />
        <Typography
          className={classes.subtitle}
          component='h2'
          variant='h5'
        >
          {props.subtitle}
        </Typography>
        <ThemedTypography component='div' className={classes.dateAndAuthor}>
          <List disablePadding className={classes.dateAndAuthorList}>
            <ListItem style={{ width: 'fit-content' }}>
              <ListItemIcon style={{ minWidth: 32 }}>
                <PersonOutlineIcon color='secondary' />
              </ListItemIcon>
              <span className='grey'>{props.author}</span>
            </ListItem>
            <ListItem style={{ width: 'fit-content' }}>
              <ListItemIcon style={{ minWidth: 32 }}>
                <ScheduleIcon color='secondary' />
              </ListItemIcon>
              <span className='grey'>{formatDate(props.createdAt)}</span>
            </ListItem>
          </List>
        </ThemedTypography>
        <div className={classes.image} onClick={openImage} />
        <ThemedTypography
          component='div'
          className={classes.content}
          ref={scrollRef}
          dangerouslySetInnerHTML={{__html: props.content}}
        />
      </Container>
    </div>
  );
};

export default React.memo(SingleBlogContent);