import { FormControls } from "@/types/form-controls.type";
import { Validator } from "@/types/validator.type";
import { Validity } from "@/types/validity.type";
import { InputValue } from "@/types/input-value.type";
import { FormBody } from "@/types/form-body.type";
import { SelectOption } from "@/types/select-option.type";

export const isActive = (linkPath: string, currentUrl: string, exact?: boolean): boolean => {
  const isExact = currentUrl === linkPath;
  const startsWith = (currentUrl.startsWith(linkPath) && linkPath.length > 1);

  return exact ? isExact : startsWith;
}

export const checkValidity = (
  value: InputValue,
  validators: Validator[],
  formState: FormControls
): Validity => {
  const validField = { isValid: true, message: "" };
  const invalidField = validators
    .map((validator) => validator(value, formState))
    .find((field) => !field.isValid);

  return invalidField || validField;
};

export const createBody = (inputs: FormControls) => {
  const body = {} as FormBody;
  for (let key in inputs) {
    body[key] = inputs[key].value;
  }

  return body;
};

export function selectText(node: HTMLElement | null) {
  if (!node) return;
  
  const body = document.body as any;
  if (body.createTextRange) {
    const range = body.createTextRange();
    range.moveToElementText(node);
    range.select();
    return true;
  } else if (window.getSelection) {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(node);
    selection?.removeAllRanges();
    selection?.addRange(range);
    return true;
  } else {
    console.warn("Could not select text in node: Unsupported browser");
    return false;
  }
}

export const formatDate = (date: Date | string | number) => {
  const formattedDate = new Date(date);
  const mL = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const currentYear = new Date().getFullYear();

  const day = formattedDate.getDate();
  const month = formattedDate.getMonth();
  const year = formattedDate.getFullYear();
  return `${mL[month]} ${day}${year === currentYear ? "" : `, ${year}`}`;
};

export function delay(callback: Function, ms: number) {
  setTimeout(callback, ms);
}

export async function asyncDelay(callback: Function, ms: number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      callback();
      resolve(true)
    }, ms);
  });
}


export function canFitBellow<T extends HTMLElement, C extends HTMLElement>(rootEl: T, el: C): boolean {
  if (!el) return false;

  const elHeight = el.offsetHeight;
  const distanceFromBottom = document.body.offsetHeight - (rootEl.offsetTop + rootEl.offsetHeight);

  return elHeight < distanceFromBottom;
}

export function findNextIndexForGivenChar(
  currentIndex: number,
  char: string,
  options: SelectOption[]
): number {
  const charFilter = (opt: SelectOption) => opt.label.toLowerCase().startsWith(char.toLowerCase());

  let filteredOptions = options.slice(currentIndex + 1).filter(charFilter)
  if (!filteredOptions.length) {
    filteredOptions = options.filter(charFilter)
  }
  const nextOption = filteredOptions[0];
  const nextHoverIndex = options.indexOf(nextOption);

  return nextHoverIndex;
}
