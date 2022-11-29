import React from "react";
import { Box, Typography } from "@mui/material";
import ButtonGroup from "@mui/material/ButtonGroup";
import Link from "next/link";
import CodeIcon from "@mui/icons-material/Code";
import LinkIcon from "@mui/icons-material/Link";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import ThemeContext, { ThemeContextType } from "context/themeContext";
import { useContext } from "react";
import Button3D from "@/components/UI/Button3D";
import { IProject } from "models/Project";
import StyledDivider from "@/components/UI/StyledDivider";

type Props = {
  project: IProject;
};

const ProjectItem = ({
  project: { image, title, siteLink, codeLink, slug, projectType },
}: Props) => {
  const { dark } = useContext(ThemeContext) as ThemeContextType;

  return (
    <Box className="relative my-0 mx-auto w-[90%] h-fit">
      <Typography component="h3" variant="h5" className="subtitle">
        {title}
      </Typography>
      <Typography className="text-[#999999] w-fit m-auto p-[.5rem_1.5rem] text-xs uppercase shadow-3d-button">
        {projectType}
      </Typography>
      <div
        style={{backgroundImage: `url('/thumbs/${image}')`}}
        className={`bg-no-repeat bg-center bg-contain m-[20px_0] min-h-[300px] w-full max-h-[90vw] drop-shadow-drop`}
      />
      <ButtonGroup
        aria-label="outlined primary button group"
        fullWidth
        className="gap-5 mt-[20px]"
      >
        <Button3D
          variant="text"
          component="a"
          target="_blank"
          rel="noopener noreferrer"
          href={siteLink}
          disabled={!siteLink}
          endIcon={<LinkIcon />}
          color={dark ? "primary" : "secondary"}
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
          color={dark ? "primary" : "secondary"}
        >
          Code
        </Button3D>
      </ButtonGroup>

      <StyledDivider />

      <Link href={`/portfolio/${slug}`} passHref>
        <Button3D
          variant="text"
          fullWidth
          component="a"
          size="large"
          color={dark ? "primary" : "secondary"}
          endIcon={<ArrowRightAltIcon />}
          href={`/portfolio/${slug}`}
        >
          More details
        </Button3D>
      </Link>
    </Box>
  );
};

export default React.memo(ProjectItem);
