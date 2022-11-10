import { Container, Button, CircularProgress } from '@material-ui/core';
import {makeStyles} from '@material-ui/core';
import React, { useCallback, useState } from 'react';
import { checkValidity, sendMail } from '../../helpers/utility';
import Heading from '../../UI/Heading';
import MyInput from '../../UI/MyInput';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
// import { sendMail } from './../../../apiCalls';
import LoadingBar from './../../UI/LoadingBar';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    minHeight: 700,
    paddingBottom: 40
  },
  formContainer: {
    width: 600,
    maxWidth: '90%',

  }
}));

const initialInputs = {
  fullName: {
    elementType: 'text-input',
    label: 'Full name',
    value: '',
    validationRules: {
      required: true
    },
    valid: false,
    touched: false
  },
  email: {
    elementType: 'text-input',
    label: 'Your email',
    value: '',
    validationRules: {
      required: true,
      email: true,
    },
    valid: false,
    touched: false
  },
  subject: {
    elementType: 'text-input',
    label: 'Subject',
    value: '',
    validationRules: {
      required: true,
    },
    valid: false,
    touched: false
  },
  message: {
    elementType: 'text-area',
    label: 'Message',
    value: '',
    validationRules: {
      required: true,
    },
    valid: false,
    touched: false
  }
}
const SendMessage = () => {
  const classes = useStyles();
  const [inputs, setInputs] = useState(initialInputs);
  const [formIsValid, setFormIsValid] = useState(false);
  const [loading, setLoading] = useState(false);

  const inputHandler = useCallback((value, inputIdentifier) => {
    const updatedInputs = { ...inputs }
    const updatedElement = { ...updatedInputs[inputIdentifier] }

    if (updatedElement.validationRules) {
      const validity = checkValidity(value, updatedElement.validationRules);
      updatedElement.valid = validity.isValid;
      updatedElement.validationErrorMessage = validity.message;
    }
    updatedElement.value = value;
    updatedElement.touched = true;
    updatedInputs[inputIdentifier] = updatedElement;

    let formIsValid = true;
    for (let element in updatedInputs) {
      formIsValid = updatedInputs[element].valid && updatedInputs[element].touched && formIsValid;
    }

    setInputs(updatedInputs);
    setFormIsValid(formIsValid);
  }, [inputs])

  const resetForm = () => {
    setInputs(initialInputs);
    setFormIsValid(false);
  }

  const handleSubmit = e => {
    e.preventDefault();
    const submitForm = async () => {
      const data = {}
      for (let key in inputs) {
        data[key] = inputs[key].value.trim();
      }
      await sendMail(data, setLoading);
      resetForm();
    }
    if (formIsValid) {
      submitForm();
    }
  }

  const inputElementsArray = [];
  for (let key in inputs) {
    inputElementsArray.push({
      id: key,
      config: inputs[key]
    })
  }

  const form = (
    <form
      noValidate
      autoComplete='off'
      onSubmit={handleSubmit}
    >
      {inputElementsArray.map(inputElement => (
        <MyInput
          key={inputElement.id}
          inputName={inputElement.id}
          elementType={inputElement.config.elementType}
          value={inputElement.config.value}
          label={inputElement.config.label}
          invalid={!inputElement.config.valid}
          required={inputElement.config.validationRules.required}
          inputHandler={(event) => inputHandler(event.target.value, inputElement.id)}
          options={inputElement.config.options}
        />
      ))}

      <Button
        className={classes.button}
        type='submit'
        color='secondary'
        variant='contained'
        endIcon={!loading && <SendOutlinedIcon />}
        fullWidth
        disabled={!formIsValid}
      >
        {!loading ? 'Send' : <CircularProgress size={24}  />}
      </Button>
    </form>
  )
  
  return (
    <Container maxWidth='lg' className={`${classes.root} blurIn`}>
      {loading && <LoadingBar />}
      <Heading text="Send a message" />
      <div className={classes.formContainer}>
        {form}
      </div>

    </Container>
  );
};

export default SendMessage;