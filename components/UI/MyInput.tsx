import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { ChangeEvent } from "react";
import { FormControl as MyFormControlType } from "@/types/form-control.type";

const StyledTextField = styled(TextField)(() => ({
  "& label": {
    opacity: 0.5,
  },
  "& label.Mui-focused ": {
    opacity: 1,
  },
  "& .MuiOutlinedInput-root": {
    transition: "all 250ms ease-in",
    boxShadow: "var(--shadow-3d-button)",
    "& fieldset": {
      transition: "all 250ms ease-in",
      border: "none",
      opacity: 0.5,
    },
    "&:hover fieldset": {
      boxShadow: "var(--shadow-3d-button-inset)",
      border: "none",
      opacity: 1,
    },
    "&.Mui-focused fieldset": {
      boxShadow: "var(--shadow-3d-button-inset)",
      border: "none",
      opacity: 1,
    },
  },
  "& .MuiOutlinedInput-root.Mui-focused": {
    boxShadow: "0px 0px 0px transparent",
  },
  "& .MuiOutlinedInput-root:hover": {
    boxShadow: "0px 0px 0px transparent",
  },
}));

type Props = Partial<MyFormControlType> & {
  inputHandler?: (e: ChangeEvent<HTMLInputElement>) => void;
};

const MyInput = (props: Props) => {
  let inputElement = null;

  switch (props.elementType) {
    case "text-input":
      inputElement = (
          <StyledTextField
            fullWidth
            variant="outlined"
            onChange={props.inputHandler}
            label={props.label}
            color="primary"
            required={props.required}
            spellCheck="false"
            placeholder={props.placeholder}
            value={props.value || ""}
          />
      );
      break;

    case "text-area":
      inputElement = (
          <StyledTextField
            fullWidth
            variant="outlined"
            onChange={props.inputHandler}
            label={props.label}
            color="primary"
            multiline
            minRows={4}
            maxRows={6}
            required={props.required}
            spellCheck="false"
            placeholder={props.placeholder}
            value={props.value || ""}
          />
      );
      break;

    default:
      break;
  }

  return inputElement;
};

export default React.memo(MyInput);
