import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { Divider } from '@material-ui/core';
import Link from 'next/link';
import ThemeContext from '../../../context/themeContext';
import { useContext } from 'react';
import { formatDate } from './../../helpers/utility';

const useStyles = makeStyles(theme => ({
  image: {
    backgroundImage: ({ image }) => image && `url("/thumbs/${image}")`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    margin: '20px 0',
    minHeight: '50vh',
    width: '90%',
    maxHeight: '90vw',
    filter: `drop-shadow(0px 10px 10px #0000004e)`,
    borderRadius: 20,
    overflow: 'hidden',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    boxSizing: 'border-box',
    position: 'relative',
    '&::after': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      borderRadius: 20,
      border: `1px solid ${theme.palette.custom.borderColor}`,
      transition: `all ${theme.transitions.duration.short}ms ease-in-out`,
    },
    '&:hover::after': {
      border: `1px solid ${theme.palette.custom.accent}`,
    }
  },
  content: {
    backgroundColor: 'rgba(0, 0, 0, .7)',
    paddingBottom: 20,
  },
  subtitle: {
    color: '#fff',
    fontWeight: 400,
    padding: theme.spacing(1),
    borderRadius: 10,
    width: 'fit-content',
    minWidth: 200,
    margin: '0 auto',
    position: 'relative',
    marginBottom: '20px',
    '&::after': {
      content: '""',
      position: 'absolute',
      top: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '50px',
      maxWidth: '100%',
      height: '2px',
      backgroundColor: theme.palette.custom.accent
    }
  },
  divider: {
    // backgroundColor: cyan[900],
    backgroundColor: theme.palette.custom.accent,
    // backgroundColor: theme.palette.custom.borderColor,
    boxShadow: '0px 10px 20px #000000be',
    width: '100%'
  },
  date: {
    color: '#fff',
    fontSize: 12,
    opacity: .7
  },
}));


const ProjectItem = ({ image, title, content, createdAt, slug, updatedAt }) => {
  const { darkMode } = useContext(ThemeContext);
  const classes = useStyles({ image, darkMode });

  return (
    <Link
      href={`/blog/${slug}`}
      passHref
    >
      <div className={classes.image}>
        <Divider classes={{ root: classes.divider }} />
        <div className={classes.content}>
          <Typography component='h3' variant='h5' className={classes.subtitle}>
            {title}
          </Typography>
          <Typography className={classes.date}>{formatDate(createdAt)}</Typography>
        </div>
      </div>
    </Link>
  );
};

export default ProjectItem;