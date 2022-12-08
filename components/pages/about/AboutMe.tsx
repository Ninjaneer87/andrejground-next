import React, { useEffect, useRef } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import Heading from "@/components/UI/Heading";
import GetAppIcon from "@mui/icons-material/GetApp";
import Button3D from "@/components/UI/Button3D";
import BlurIn from "@/components/UI/BlurIn";
import StyledDivider from "@/components/UI/StyledDivider";
import { AboutSectionNames } from "pages/about";

const andrejImage = "/img/andrej500transparent.webp";

type Props = {
  addSection: (sectionName: AboutSectionNames, section: Element) => void;
  scrollToSection: (sectionName: AboutSectionNames) => void;
}

const AboutMe = ({addSection, scrollToSection}: Props) => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) addSection("aboutme", ref.current);
  }, [addSection]);

  return (
    <Container 
      component="section" 
      maxWidth="lg" 
      className="flex flex-col justify-center items-center text-center min-h-screen pb-10"
    >
      <div ref={ref}>
        <BlurIn>
          <Heading text="Meet Andrej" />
        </BlurIn>
      </div>
      <Grid container spacing={3} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={6}>
          <BlurIn>
            <Box 
            style={{backgroundImage: `url(${andrejImage})`}}
            title="Andrej"
            className={`bg-center bg-cover bg-no-repeat w-[250px] max-w-[80vw] h-[250px] max-h-[80vw] p-8 m-auto box-border rounded-full relative shadow-3d-card`}
             />
          </BlurIn>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box maxWidth={600} margin="auto">
            <BlurIn>
              <Typography className="text-start py-3 font-medium">
                Andrej has been into front-end development for a couple of years
                now. Over this period, he has developed a strong curiosity about
                JavaScript and its ecosystem, with a focus on React and TypeScript
                <br />
                <br />
                He enjoys learning, coding, and seeing his code getting leaner
                and cleaner after each project
                <br />
                <br />
                He is on a constant quest for people who share similar habits,
                views and{" "}
                <span className="text-primary cursor-pointer"  onClick={() => scrollToSection("values")}>
                  values
                </span>
                <br />
                <br />
              </Typography>
            </BlurIn>

            <BlurIn>
              <StyledDivider />
            </BlurIn>

            <BlurIn>
              <Button3D
                component="a"
                href="/resume/AndrejForgacCV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                endIcon={<GetAppIcon />}
                variant="text"
                fullWidth
              >
                Andrej&apos;s resume
              </Button3D>
            </BlurIn>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutMe;
