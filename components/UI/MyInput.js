import { FormControl, TextField } from '@material-ui/core';
import {makeStyles} from '@material-ui/core';
import {withStyles} from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(theme => {
  return {
    field: {
      margin: theme.spacing(3, 0),
      display: 'block',
    },
  }
});

const StyledTextField = withStyles(theme => ({
  root: {
    '& label': {
      color: theme.palette.custom.textColor,
      opacity: 0.5,
    },
    // '&:hover label': {
    //   opacity: 1,
    // },
    '& label.Mui-focused ': {
      opacity: 1,
    },
    '& .MuiOutlinedInput-root': {
      transition: 'all 250ms ease-in',
      color: theme.palette.custom.textColor,
      boxShadow: theme.palette.custom.button3DShadow,
      '& fieldset': {
        transition: 'all 250ms ease-in',
        borderColor: theme.palette.custom.textColor,
        border: 'none',
        opacity: 0.5,
      },
      '&:hover fieldset': {
        boxShadow: theme.palette.custom.button3DShadowInset,
        borderColor: theme.palette.custom.textColor,
        border: 'none',
        opacity: 1,
      },
      '&.Mui-focused fieldset': {
        boxShadow: theme.palette.custom.button3DShadowInset,
        borderColor: theme.palette.custom.accent,
        border: 'none',
        opacity: 1,
      },
    },
    '& .MuiOutlinedInput-root.Mui-focused': {
      boxShadow: '0px 0px 0px transparent',
    },
    '& .MuiOutlinedInput-root:hover': {
      boxShadow: '0px 0px 0px transparent',
    },
  },
}))(TextField);

const MyInput = (props) => {
  const classes = useStyles();
  let inputElement = null;

  switch (props.elementType) {
    case ('text-input'):
      inputElement = <FormControl
        className={classes.field}
        fullWidth
      >
        <StyledTextField
          fullWidth
          variant='outlined'
          onChange={props.inputHandler}
          label={props.label}
          color='secondary'
          required={props.required}
          spellCheck="false"
          placeholder={props.placeholder}
          value={props.value || ''}
        />
      </FormControl>;
      break;


    case ('text-area'):
      inputElement = <FormControl
        className={classes.field}
        fullWidth
      >
        <StyledTextField
          fullWidth
          variant='outlined'
          onChange={props.inputHandler}
          label={props.label}
          color='secondary'
          multiline
          minRows={4}
          maxRows={6}
          required={props.required}
          spellCheck="false"
          placeholder={props.placeholder}
          value={props.value || ''}
        />
      </FormControl>
      break;


    default:
      break;
  }

  return inputElement;
};

export default React.memo(MyInput);