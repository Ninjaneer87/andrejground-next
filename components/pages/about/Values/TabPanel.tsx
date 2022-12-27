import React from "react";
import Typography from "@mui/material/Typography";

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
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      className='h-full'
      {...other}
    >
      {/* {value === index && ( */}
        <Typography component='div' className="appear h-full">
          {children}
        </Typography>
      {/* )} */}
    </div>
  );
}
