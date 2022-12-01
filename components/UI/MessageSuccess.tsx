import React from "react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { Typography } from "@mui/material";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import Button3D from "./Button3D";

type Props = {
  handleClose: () => void;
};

const MessageSuccess = ({ handleClose }: Props) => {

  return (
    <div className="mx-auto p-6 w-[500px] max-w-[100vw] m-auto bg-themed-bg">
      <div className="animate-border">
        <MailOutlineIcon fontSize="large" />
      </div>
      <Typography variant="h6" className="text-center my-[30px]">
        Message has been sent!
      </Typography>
      <Button3D
        fullWidth
        onClick={handleClose}
        endIcon={<DoneOutlineIcon />}
      >
        Ok
      </Button3D>
    </div>
  );
};

export default MessageSuccess;
