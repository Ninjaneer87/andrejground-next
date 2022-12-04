import React, { useRef, useEffect } from "react";
import { Container, useTheme, useMediaQuery } from "@mui/material";
import Heading from "@/components/UI/Heading";
import ValuesTabs from "./ValuesTabs";
import ValuesTabsMobile from "./ValuesTabsMobile";
import BlurIn from "@/components/UI/BlurIn";
import { AboutSectionNames } from "pages/about";

type Props = {
  addSection: (sectionName: AboutSectionNames, section: Element) => void;
};

const Values = ({ addSection }: Props) => {
  const ref = useRef(null);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down(768));

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

      {isSmallScreen ? <ValuesTabsMobile /> : <ValuesTabs />}
    </Container>
  );
};

export default Values;
