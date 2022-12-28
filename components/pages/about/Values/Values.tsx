import React, { useRef, useEffect } from "react";
import { Box, Container } from "@mui/material";
import Heading from "@/components/UI/Heading";
import ValuesTabs from "./ValuesTabs";
import BlurIn from "@/components/UI/BlurIn";
import { AboutSectionNames } from "pages/about";

type Props = {
  addSection: (sectionName: AboutSectionNames, section: Element) => void;
};

const Values = ({ addSection }: Props) => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) addSection("values", ref.current);
  }, [addSection]);

  return (
    <Container
      ref={ref}
      maxWidth="lg"
      component="section"
      className="flex flex-col items-center justify-center pb-10"
    >
      <BlurIn>
        <Heading text="Values & philosophy" />
      </BlurIn>
      <Box maxWidth={800} width='100%'>
        <ValuesTabs />
      </Box>
    </Container>
  );
};

export default Values;
