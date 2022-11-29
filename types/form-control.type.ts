import { InputValue } from "@/types/input-value.type";
import { Validator } from "@/types/validator.type";

export type FormControl = {
  elementType: string;
  type?: string;
  label: string;
  placeholder?: string;
  value: InputValue;
  validators: Validator[];
  required: boolean;
  valid: boolean;
  blurred?: boolean;
  validationErrorMessage?: string;
  touched: boolean;
}