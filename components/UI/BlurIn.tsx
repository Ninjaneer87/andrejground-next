import { Box, BoxProps } from "@mui/material";
import React, { ReactNode, ElementType } from "react";
import { useInView } from "react-intersection-observer";

type InViewClasses = "invis" | "blur-in";
type Props<T extends ElementType> = BoxProps<T, { component?: T }> & {
  children: ReactNode;
  delay?: number;
};

function BlurIn<C extends ElementType>({ children, delay, className, ...props }: Props<C>) {
  const [inViewClass, setInViewClass] = React.useState<InViewClasses>("invis");
  const { ref } = useInView({
    rootMargin: "-10%",
    onChange: (inView) => inView && setInViewClass("blur-in"),
  });

  return (
    <Box
      ref={ref}
      className={`${inViewClass} ${className || ""}`}
      style={{ animationDelay: `${delay || 0}ms` }}
      {...props}
    >
      {children}
    </Box>
  );
}

export default BlurIn;
