import React from "react";
import { Divider } from "@mui/material";

const StyledDivider = () => {
  return (
    <Divider
      sx={{
        bgcolor: "var(--color-primary)",
        borderColor: "var(--color-primary)",
        boxShadow: "0px 10px 20px #000000be",
        margin: "20px 0",
        width: "100%",
      }}
    />
  );
};

export default StyledDivider;
