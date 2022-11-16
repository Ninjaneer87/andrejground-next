import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    color: inverse => inverse === true ? '#fff' : theme.palette.custom.textColor,
    position: 'relative',
    textAlign: 'center',
    margin: '50px 0 80px 0',
    [theme.breakpoints.down(768)]: {
      // fontSize: '35px',
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      top: '120%',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '100px',
      maxWidth: '100%',
      height: '.25rem',
      backgroundColor: theme.palette.custom.accent
    }
  }
}))
const Heading = (props) => {
  const classes = useStyles(props.inverse);
  
  return (
    <Typography className={`${classes.root} ${props.className}`}  variant='h2'>
      {props.text}
    </Typography>
  );
};

export default React.memo(Heading);