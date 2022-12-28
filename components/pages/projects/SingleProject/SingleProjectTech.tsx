import BlurIn from "@/components/UI/BlurIn";
import React from "react";
import { Typography, List, ListItem } from "@mui/material";

type Props = { technologies: string[] };

export function SingleProjectTech({ technologies }: Props) {
  return (
    <div className="mb-8">
      <BlurIn>
        <Typography component="h2" variant="h5" className="subtitle">
          Technologies used
        </Typography>
      </BlurIn>
      <BlurIn>
        <List className="flex flex-wrap justify-center mt-[25px] gap-4">
          {technologies?.map((tech, i) => (
            <ListItem
              key={tech}
              className="w-fit text-[1rem] rounded-xl shadow-3d-card py-3 px-4 blur-in-translate"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              {tech}
            </ListItem>
          ))}
        </List>
      </BlurIn>
    </div>
  );
}
