import React, { ButtonHTMLAttributes } from "react";
import classes from "./HamburgerButton.module.scss";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & { black?: boolean, expanded?: boolean }

function HamburgerButton({ black, className, expanded, ...props }: Props){
  const hamburgerExpandedClassName = expanded ? "hamburger--expanded" : "";

  return (
    <button
      className={`
        ${classes.toggle} 
        ${black ? classes["toggle--black"] : ""} 
        ${className || ""}
      `}
      {...props}
    >
      <span className={classes.hidden}>Menu</span>
      <div
        className={`${classes.hamburger} ${classes[hamburgerExpandedClassName]}`}
        aria-hidden="true"
      ></div>
    </button>
  );
};

export default HamburgerButton;
