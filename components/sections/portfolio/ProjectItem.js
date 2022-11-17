import React from 'react';
import { Box, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { Divider } from '@material-ui/core';
import Link from 'next/link';
import CodeIcon from '@material-ui/icons/Code';
import LinkIcon from '@material-ui/icons/Link';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import ThemeContext from '../../../context/themeContext';
import { useContext } from 'react';
import Button3D from '../../UI/Button3D';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    margin: '0 auto',
  },
  image: {
    backgroundImage: ({ image }) => image && `url("/thumbs/${image}")`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    margin: '20px 0',
    minHeight: 300,
    width: '100%',
    maxHeight: '90vw',
    filter: theme.palette.custom.imageDropShadow,
  },
  subtitle: {
    color: theme.palette.custom.textColor,
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
    backgroundColor: theme.palette.custom.accent,
    boxShadow: '0px 10px 20px #000000be',
    margin: '20px 0',
    width: '100%'
  },
  text: {
    color: theme.palette.custom.textColor,
    margin: '20px 0',
    textAlign: 'start',
    lineHeight: 1.7
  },
  type: {
    // position: 'absolute',
    // top: 10,
    // right: 10,
    color: theme.palette.custom.textColor,
    color: '#999',
    width: 'fit-content',
    margin: 'auto',
    // backgroundColor: theme.palette.custom.accent,
    padding: '.5rem 1.5rem',
    fontSize: 12,
    textTransform: 'uppercase',
    boxShadow: theme.palette.custom.button3DShadow,
  },
}));


const ProjectItem = ({ image, title, siteLink, codeLink, slug, projectType }) => {
  const classes = useStyles({ image });
  const { darkMode } = useContext(ThemeContext);

  return (
    <Box
      // maxWidth={600}
      className={classes.root}
      width='90%'
      height='fit-content'
    >
      <Typography component='h3' variant='h5' className={classes.subtitle}>
        {title}
      </Typography>
      <Typography className={classes.type}>{projectType}</Typography>
      <div className={classes.image} />
      <ButtonGroup
        aria-label="outlined primary button group"
        fullWidth
        style={{gap: 20, marginTop: 20}}
      >
        <Button3D
          variant='text'
          component='a'
          target='_blank'
          rel="noopener noreferrer"
          href={siteLink}
          disabled={!siteLink}
          endIcon={<LinkIcon />}
          color={`${darkMode ? 'secondary' : 'primary'}`}
        >
          Live site
        </Button3D>
        <Button3D
          variant='text'
          component='a'
          target='_blank'
          rel="noopener noreferrer"
          href={codeLink}
          disabled={!codeLink}
          endIcon={<CodeIcon />}
          color={`${darkMode ? 'secondary' : 'primary'}`}
        >
          Code
        </Button3D>
      </ButtonGroup>

      <Divider classes={{ root: classes.divider }} />

      <Link
        href={`/portfolio/${slug}`}
        passHref
      >
        <Button3D
          variant='text'
          fullWidth
          component='a'
          size="large"
          color={`${darkMode ? 'secondary' : 'primary'}`}
          endIcon={<ArrowRightAltIcon />}
          href={`/portfolio/${slug}`}
        >
          More details
        </Button3D>
      </Link>
    </Box>
  );
};

export default ProjectItem;