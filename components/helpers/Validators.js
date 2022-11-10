export const Validators = {
  required: (value) => {
    let isValid = true;
    let message = "";

    isValid = value.trim() !== "" && isValid;
    if (!isValid) {
      message = "This field is required";
      return { isValid, message };
    }

    return { isValid, message };
  },
  requiredTrue: (value) => {
    let isValid = value === true;
    let message = "";

    if(!isValid) {
      message = "Must accept"
      return {isValid, message}
    }
    
    return {isValid, message}
  },
  email: (value) => {
    const isValid = value.match(emailValidationPattern) && isValid;
    const message = !isValid && "Enter the correct email";

    return { isValid, message };
  },
};
