import { Button, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  button3D: {
    position: "relative",
    "&::before": {
      display: ({disabled}) => disabled && 'none',
      content: '""',
      position: "absolute",
      inset: 0,
      opacity: 1,
      transition: "opacity 250ms ease-in",
      boxShadow: theme.palette.custom.button3DShadow,
    },
    "&::after": {
      display: ({disabled}) => disabled && 'none',
      content: '""',
      position: "absolute",
      inset: 0,
      opacity: 0,
      transition: "opacity 250ms ease-in",
      boxShadow: theme.palette.custom.button3DShadowInset,
    },
    "&:hover": {
      backgroundColor: 'transparent !important',
      "&::before": {
        opacity: 0,
      },
      "&::after": {
        opacity: 1,
      },
    },
    "&:focus": {
      backgroundColor: 'transparent !important',
      "&::before": {
        opacity: 0,
      },
      "&::after": {
        opacity: 1,
      },
    },
    "&:disabled": {
      // backgroundColor: 'red',
      "&::before": {
        opacity: 0,
      },
      "&::after": {
        opacity: 0,
      },
    },
  },
}));

const Button3D = ({ children, ...props }) => {
  const {disabled} = props;
  const classes = useStyles({disabled});
  return (
    <Button {...props} className={classes.button3D}>
      {children}
    </Button>
  );
};

export default Button3D;
