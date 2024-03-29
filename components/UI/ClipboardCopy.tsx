import React, { PropsWithoutRef, useState } from "react";
import FileCopyOutlinedIcon from "@mui/icons-material/FileCopyOutlined";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import { Alert, Snackbar, Tooltip } from "@mui/material";
import { selectText } from "utils/utility";
import ClientOnlyPortal from "../portals/ClientOnlyPortal";

type Props = PropsWithoutRef<{
  content: string;
  contentElement: HTMLElement | null;
}>;
const ClipboardCopy = ({ content, contentElement }: Props) => {
  const [copied, setCopied] = useState(false);
  const [snackOpen, setSnackOpen] = useState(false);

  const closeSnack = () => {
    setSnackOpen(false);
  };

  const copyHandler = async () => {
    if (copied) return;
    if (!navigator.clipboard) return selectText(contentElement);

    await navigator.clipboard.writeText(content);
    setCopied(true);
    setSnackOpen(true);

    setTimeout(() => setCopied(false), 5000);
  };

  return (
    <>
      <span
        className="cursor-pointer transition-colors hover:text-primary"
        onClick={copyHandler}
      >
        <Tooltip title={copied ? "Copied!" : "Click to copy"} arrow>
          {copied ? (
            <CheckOutlinedIcon fontSize="small" />
          ) : (
            <FileCopyOutlinedIcon fontSize="small" />
          )}
        </Tooltip>
      </span>

      <ClientOnlyPortal>
        <Snackbar
          open={snackOpen}
          autoHideDuration={6000}
          onClose={closeSnack}
          onClick={closeSnack}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        >
          <Alert onClose={closeSnack} className="snackbar" severity="success">
            Copied successfully
          </Alert>
        </Snackbar>
      </ClientOnlyPortal>
    </>
  );
};

export default ClipboardCopy;
