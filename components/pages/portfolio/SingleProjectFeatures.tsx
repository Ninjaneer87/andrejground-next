import BlurIn from "@/components/UI/BlurIn";
import React from "react";
import { Typography, List, ListItem } from "@mui/material";

type Props = { features: string[] };

export function SingleProjectFeatures({ features }: Props) {
  return (
    <div className="mb-8">
      <BlurIn>
        <Typography component="h2" variant="h5" className="subtitle">
          Features & functionalities
        </Typography>
      </BlurIn>
      <List
        disablePadding
        className="flex flex-wrap justify-center mt-[25px] gap-[5px]"
      >
        {features?.map((feature, i) => (
          <BlurIn
            delay={i * 150}
            key={feature}
            component={ListItem}
            className="w-fit text-[1rem] rounded-[6px] bg-[#6f6f6faa] text-white"
          >
            {feature}
          </BlurIn>
        ))}
      </List>
    </div>
  );
}
