import React, { useContext, useEffect, useRef } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import Heading from "@/components/UI/Heading";
import GetAppIcon from "@mui/icons-material/GetApp";
import ThemeContext, { ThemeContextType } from "context/themeContext";
import Button3D from "@/components/UI/Button3D";
import BlurIn from "@/components/UI/BlurIn";
import StyledDivider from "@/components/UI/StyledDivider";
import {
  AboutSectionNames,
  registerAboutSection,
  scrollToAboutSection,
} from "@/pages/about";

const andrejImage = "/img/andrej500transparent.webp";

const AboutMe = () => {
  const { dark } = useContext(ThemeContext) as ThemeContextType;
  const ref = useRef(null);

  const scrollToValues = () => scrollToAboutSection(AboutSectionNames.VALUES);

  useEffect(() => {
    if (ref.current) {
      registerAboutSection(AboutSectionNames.ABOUTME, ref.current);
    }
  }, []);

  return (
    <Container maxWidth="lg" className="flex flex-col justify-center items-center text-center min-h-screen pb-10">
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
            className={`bg-center bg-cover bg-no-repeat w-[250px] max-w-[80vw] h-[250px] max-h-[80vw] p-8 m-auto box-border rounded-full relative shadow-3d-card`}
             />
          </BlurIn>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box maxWidth={600} margin="auto">
            <BlurIn>
              <Typography className="text-start p-3 font-medium">
                Andrej has been into front-end development for a couple of years
                now. Over this period, he has developed a strong curiosity about
                JavaScript and its ecosystem, with a focus on React and Angular
                frameworks.
                <br />
                <br />
                He enjoys learning, coding, and seeing his code getting leaner
                and cleaner after each project.
                <br />
                <br />
                He is on a constant quest for people who share similar habits,
                views and{" "}
                <span className="text-primary cursor-pointer"  onClick={scrollToValues}>
                  values
                </span>
                .
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
                color={dark ? "primary" : "secondary"}
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
