import React, { useRef, useEffect } from "react";
import { Container, useTheme, useMediaQuery } from "@mui/material";
import Heading from "@/components/UI/Heading";
import ValuesTabs from "./ValuesTabs";
import ValuesTabsMobile from "./ValuesTabsMobile";
import BlurIn from "@/components/UI/BlurIn";
import { AboutSectionNames, registerAboutSection } from "@/pages/about";

const Values = () => {
  const ref = useRef(null);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down(768));

  useEffect(() => {
    if (ref.current) {
      registerAboutSection(AboutSectionNames.VALUES, ref.current);
    }
  }, []);

  return (
    <Container
      ref={ref}
      maxWidth="lg"
      className="flex flex-col items-center justify-center min-h-[70vh] pb-10"
    >
      <BlurIn>
        <Heading text="Values & philosophy" />
      </BlurIn>

      {isSmallScreen ? <ValuesTabsMobile /> : <ValuesTabs />}
    </Container>
  );
};

export default Values;
