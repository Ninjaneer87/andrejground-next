import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

interface Props {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export default function TabPanel(props: Props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography className="appear">{children}</Typography>
        </Box>
      )}
    </div>
  );
}
