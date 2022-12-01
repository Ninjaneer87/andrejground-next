import { Button, ButtonProps, styled } from "@mui/material";
import ThemeContext, { ThemeContextType } from "context/themeContext";
import React, { ElementType, ReactNode, useContext } from "react";

interface StyledButton3DProps extends ButtonProps {
  isDisabled?: boolean;
}

const StyledButton3D = styled(Button, {
  shouldForwardProp: (prop) => prop !== "isDisabled",
})<StyledButton3DProps>(({ isDisabled }) => ({
  position: "relative",
  "&::before": {
    ...(isDisabled && { display: "none" }),
    content: '""',
    position: "absolute",
    inset: 0,
    opacity: 1,
    transition: "opacity 250ms ease-in",
    boxShadow: "var(--shadow-3d-button)",
  },
  "&::after": {
    ...(isDisabled && { display: "none" }),
    content: '""',
    position: "absolute",
    inset: 0,
    opacity: 0,
    transition: "opacity 250ms ease-in",
    boxShadow: "var(--shadow-3d-button-inset)",
  },
  "&:hover": {
    backgroundColor: "transparent !important",
    "&::before": { opacity: 0 },
    "&::after": { opacity: 1 },
  },
  "&:focus": {
    backgroundColor: "transparent !important",
  },
  "&:disabled": {
    "&::before": { opacity: 0 },
    "&::after": { opacity: 0 },
  },
}));

type Props<T extends ElementType> = { children: ReactNode } & ButtonProps<
  T,
  { component?: T }
>;

function Button3D<C extends ElementType>({  children,  color, ...props }: Props<C>) {
  const { dark } = useContext(ThemeContext) as ThemeContextType;

  return (
    <StyledButton3D
      isDisabled={props.disabled}
      color={color || (dark ? "primary" : "secondary")}
      {...props}
    >
      {children}
    </StyledButton3D>
  );
}

export default Button3D;
