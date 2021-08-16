import React from 'react';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import ThemedTypography from './ThemedTypography';
import { makeStyles, Button } from '@material-ui/core';
import { useTheme } from '@material-ui/core';
import { hideModal } from './Modal';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';

const useStyles = makeStyles(theme => ({
  root: {
    margin: '0 auto',
    color: theme.palette.custom.textColor
  },
  message: {
    color: theme.palette.custom.textColor,
    textAlign: 'center',
    margin: '30px 0'
  }
}))
const MessageSuccess = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.root}>
      <div className='animateBorder'>
        <MailOutlineIcon style={{ color: theme.palette.custom.textColor, fontSize: '4rem' }} fontSize='large' />
      </div>
      <ThemedTypography variant='h6' className={classes.message}>Message has been sent!</ThemedTypography>
      <Button
        fullWidth
        variant='contained'
        color='secondary'
        onClick={() => hideModal()}
        endIcon={<DoneOutlineIcon />}
      >
        Ok
      </Button>
    </div>
  );
};

export default MessageSuccess;