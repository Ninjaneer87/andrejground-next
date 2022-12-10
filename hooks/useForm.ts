import { useCallback, useState } from "react";
import { checkValidity } from "utils/utility";
import cloneDeep from 'lodash.clonedeep';
import { FormControls } from "@/types/form-controls.type";
import { FormControl } from "@/types/form-control.type";
import { InputValue } from "@/types/input-value.type";

export type InputHandler = (value: InputValue, currentInputKey: keyof FormControls, blurred?: boolean) => void

export default function useForm(initialInputs: FormControls) {
  const [inputs, setInputs] = useState(initialInputs);
  const [formIsValid, setFormIsValid] = useState(false);

  const resetForm = useCallback(() => {
    setInputs(initialInputs);
    setFormIsValid(false);
  }, [initialInputs]);

  const inputHandler: InputHandler = useCallback(
    (
      value: InputValue,
      currentInputKey: keyof FormControls,
      blurred?: boolean
    ) => {
      // Update input value
      const clonedInputs = cloneDeep(inputs);
      const currentInput = clonedInputs[currentInputKey];
      currentInput.value = value;
      currentInput.touched = true;
      if (blurred) currentInput.blurred = true;
      clonedInputs[currentInputKey] = currentInput;

      // Validate all fields
      let isFormValid = true;
      Object.values(clonedInputs).forEach((input: FormControl) => {
        if (input.validators?.length) {
          const validity = checkValidity(input.value, input.validators, clonedInputs);
          input.valid = validity.isValid;
          input.validationErrorMessage = validity.message;
        }
        isFormValid = input.valid && isFormValid;
      });

      // Set new state
      setInputs(clonedInputs);
      setFormIsValid(isFormValid);
    },
    [inputs]
  );

  return { inputs, setInputs: inputHandler, formIsValid, resetForm };
}
