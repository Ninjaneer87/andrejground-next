import React from "react";
import { Typography } from "@mui/material";

type Props = {
  text: string;
};
const Heading = ({ text }: Props) => {
  return (
    <Typography
      className="
        relative text-center m-[50px_0_80px_0] 
        after:content-[''] after:absolute after:top-[120%] after:left-[50%] after:translate-x-[-50%]
        after:w-[100px] after:max-w-full after:h-[.25rem] after:bg-primary
      "
      variant="h2"
    >
      {text}
    </Typography>
  );
};

export default React.memo(Heading);
