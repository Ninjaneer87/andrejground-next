import React from "react";
import { Typography } from "@mui/material";
import Logo from "@/components/UI/Logo";

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="flex text-center items-center justify-evenly flex-col min-h-[30vh] relative mt-auto sm:p-5 blur-in border-[0] border-t-[1px] border-solid border-t-appbar-border">
      <Typography className="text-base p-5">
        Let&apos;s build some cool stuff!
      </Typography>
      <Logo />
      <Typography className="text-base p-5">
        Copyright © {year} by <span className="text-primary">Andrej</span>Ground. All
        rights reserved.
      </Typography>
    </footer>
  );
};

export default React.memo(Footer);
