import React, { useContext } from "react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { Typography } from "@mui/material";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import Button3D from "./Button3D";
import ThemeContext, { ThemeContextType } from "context/themeContext";

type Props = {
  handleClose: () => void;
};

const MessageSuccess = ({ handleClose }: Props) => {
  const { dark } = useContext(ThemeContext) as ThemeContextType;

  return (
    <div className="mx-auto p-6 w-[500px] max-w-[100vw] m-auto">
      <div className="animate-border">
        <MailOutlineIcon fontSize="large" />
      </div>
      <Typography variant="h6" className="text-center my-[30px]">
        Message has been sent!
      </Typography>
      <Button3D
        fullWidth
        color={dark ? "primary" : "secondary"}
        onClick={handleClose}
        endIcon={<DoneOutlineIcon />}
      >
        Ok
      </Button3D>
    </div>
  );
};

export default MessageSuccess;
