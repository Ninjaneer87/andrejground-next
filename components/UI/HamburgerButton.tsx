import React from "react";
import classes from "./HamburgerButton.module.scss";

type Props = {
  expanded: boolean;
  toggleExpanded: () => void;
  dark?: boolean;
};
const HamburgerButton = ({ expanded, toggleExpanded, dark }: Props) => {
  const hamburgerExpandedClassName = expanded ? "hamburger--expanded" : "";
  
  return (
    <button
      className={`${classes.toggle} ${dark ? classes["toggle--dark"] : ""}`}
      aria-controls="mobile-navigation"
      aria-label="Toggle-navigation"
      aria-expanded={expanded}
      onClick={toggleExpanded}
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
