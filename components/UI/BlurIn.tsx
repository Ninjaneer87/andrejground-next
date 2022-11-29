import { Box, BoxProps } from "@mui/material";
import React, { ReactNode, useEffect, ElementType } from "react";
import { useInView } from "react-intersection-observer";

enum InViewClasses {
  HIDE = "invis",
  SHOW = "blur-in",
}
type Props<T extends ElementType> = BoxProps<T, { component?: T }> & {
  children: ReactNode;
  delay?: number;
};

function BlurIn<C extends ElementType>({ children, delay, className, ...props }: Props<C>) {
  const [inViewClass, setInViewClass] = React.useState<InViewClasses>(InViewClasses.HIDE);
  const [visible, setVisible] = React.useState(false);
  const { ref, inView } = useInView({ rootMargin: "-10%" });

  useEffect(() => {
    if (inView && !visible) {
      setInViewClass(InViewClasses.SHOW);
      setVisible(true);
    }
  }, [inView, visible]);

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
