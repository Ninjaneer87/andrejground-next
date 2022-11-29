export type FormCtrl = {
  elementType: string;
  type?: string;
  label?: string;
  placeholder?: string;
  value: string;
  validationRules: {
    required?: boolean;
    email?: boolean;
  },
  required?: boolean;
  valid: boolean;
  blurred?: boolean;
  validationErrorMessage?: string;
  touched?: boolean;
}