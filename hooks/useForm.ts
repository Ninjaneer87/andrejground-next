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
      const allInputs = cloneDeep(inputs);
      const currentInput = allInputs[currentInputKey];
      currentInput.value = value;
      currentInput.touched = true;
      if (blurred) {
        currentInput.blurred = true;
      }
      allInputs[currentInputKey] = currentInput;

      // Validate all fields
      let isFormValid = true;
      Object.values(allInputs).forEach((input: FormControl) => {
        if (input.validators?.length) {
          const validity = checkValidity(input.value, input.validators, allInputs);
          input.valid = validity.isValid;
          input.validationErrorMessage = validity.message;
        }
        isFormValid = input.valid && isFormValid;
      });

      // Set new state
      setInputs(allInputs);
      setFormIsValid(isFormValid);
    },
    [inputs]
  );

  return { inputs, setInputs: inputHandler, formIsValid, resetForm };
}
