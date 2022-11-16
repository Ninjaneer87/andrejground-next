import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const BlurIn = (props) => {
  const [inViewClassName, setInViewClassName] = React.useState("invis");
  const { ref, inView } = useInView({
    rootMargin: "-10%",
  });

  useEffect(() => {
    if (inView) setInViewClassName("blurIn");
  }, [inView]);

  return (
    <div
      ref={ref}
      className={inViewClassName}
      style={{
        animationDelay: `${props.delay || 0}ms`,
        ...(props.fullWidth && { width: "100%" }),
      }}
    >
      {props.children}
    </div>
  );
};

export default BlurIn;
