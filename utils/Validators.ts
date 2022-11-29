import { FormControls } from "types/form-controls.type";
import { InputValue } from "types/input-value.type";
import { EMAIL_REGEX } from "./constants";


export const Validators = {
  required: (value: InputValue, formState: FormControls) => {
    if (typeof value === 'string') {
      value = value.trim();
    }
    const isValid =
      value !== "" &&
      value !== null &&
      value !== false &&
      value !== undefined &&
      `${value}` !== 'false';

    const message = !isValid ? "This field is required" : "";

    return { isValid, message };
  },
  email: (value: InputValue, formState: FormControls) => {
    const isValid = typeof value === 'string' && !!value.match(EMAIL_REGEX);
    const message = !isValid ? "Enter the correct email" : '';

    return { isValid, message };
  },
  passwordsMatch: (passKey: string, confirmPassKey: string) =>
    (value: InputValue, formState: FormControls) => {
      const isValid = formState[passKey].value === formState[confirmPassKey].value;
      const message = isValid ? '' : 'Passwords do not match';

      return { isValid, message };
    }
};
