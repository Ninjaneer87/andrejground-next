import { InputValue } from "types/input-value.type";
import { FormControls } from "./form-controls.type";
import { Validity } from "./validity.type";

export type Validator = (value: InputValue, formState: FormControls) => Validity