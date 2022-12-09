import BlurIn from "@/components/UI/BlurIn";
import React from "react";
import { Typography } from "@mui/material";
import { IProject } from "models/Project";

type Props = { 
  title: string;
  description: string;
  sideNote?: string;
 };

export function SingleProjectAbout({ title, description, sideNote }: Props) {
  return (
    <div className="mb-8">
      <BlurIn>
        <Typography component="h2" variant="h5" className="subtitle">
          About {title}
        </Typography>
      </BlurIn>
      <BlurIn>
        <Typography>{description}</Typography>
      </BlurIn>
      {sideNote && (
        <BlurIn>
          <br />
          <Typography className="opacity-60" component="small" variant="body2">
            {sideNote}
          </Typography>
        </BlurIn>
      )}
    </div>
  );
}
