import React from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import CodeIcon from "@mui/icons-material/Code";
import LinkIcon from "@mui/icons-material/Link";
import Button3D from "@/components/UI/Button3D";
import BlurIn from "@/components/UI/BlurIn";

type Props = {
  siteLink: string;
  codeLink: string;
};

export function SingleProjectControls({ siteLink, codeLink }: Props) {
  return (
    <BlurIn>
      <ButtonGroup
        aria-label="outlined primary button group"
        fullWidth
        className="gap-5"
      >
        <Button3D
          variant="text"
          component="a"
          target="_blank"
          rel="noopener noreferrer"
          href={siteLink}
          disabled={!siteLink}
          endIcon={<LinkIcon />}
        >
          Live site
        </Button3D>
        <Button3D
          variant="text"
          component="a"
          target="_blank"
          rel="noopener noreferrer"
          href={codeLink}
          disabled={!codeLink}
          endIcon={<CodeIcon />}
        >
          Code
        </Button3D>
      </ButtonGroup>
    </BlurIn>
  );
}
