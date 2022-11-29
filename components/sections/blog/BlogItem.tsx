import React from "react";
import { ButtonBase, Typography } from "@mui/material";
import Link from "next/link";
import { formatDate } from "utils/utility";
import { IBlog } from "models/Blog";

type Props = {
  blog: IBlog;
};
const ProjectItem = ({ blog: { image, title, createdAt, slug }, }: Props) => {

  return (
    <Link href={`/blog/${slug}`} passHref>
      <ButtonBase
        component="a"
        className="w-full max-w-[800px] rounded-[20px] block mx-auto"
      >
        <div 
          style={{backgroundImage: `url('/thumbs/${image}')`}}
          className={`bg-no-repeat bg-center bg-cover min-h-[50vh] w-full max-h-[800px] drop-shadow-drop rounded-[20px] overflow-hidden cursor-pointer flex flex-col justify-end box-border relative`}
        >
          <div className="bg-black/70 pb-5 border-solid border-0 border-t-[1px] border-t-primary">
            <Typography
              component="h3"
              variant="h5"
              className="subtitle text-white"
            >
              {title}
            </Typography>
            <Typography className="text-white/70 text-xs">
              {formatDate(createdAt)}
            </Typography>
          </div>
        </div>
      </ButtonBase>
    </Link>
  );
};

export default ProjectItem;
