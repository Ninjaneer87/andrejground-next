import React, { ElementType } from "react";
import { Typography, TypographyProps } from "@mui/material";

type Props<T extends ElementType> = TypographyProps<T, { component?: T }> & {
  text: string;
};

function Heading<C extends ElementType>({ text, variant, className, ...props }: Props<C>) {
  return (
    <Typography
      {...props}
      className={`
        relative text-center m-[50px_0_80px_0] 
        after:content-[''] after:absolute after:top-[120%] after:left-[50%] after:translate-x-[-50%]
        after:w-[100px] after:max-w-full after:h-[.25rem] after:bg-primary ${className || ""}
      `}
      variant={`${variant || "h2"}`}
    >
      {text}
    </Typography>
  );
}

export default React.memo(Heading);
