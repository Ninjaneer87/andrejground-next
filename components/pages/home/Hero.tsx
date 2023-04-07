import React from "react";
import { Container, Grid, Box, useMediaQuery, useTheme, Avatar } from "@mui/material";
import Link from "next/link";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { useInView } from "react-intersection-observer";
import Button3D from "@/components/UI/Button3D";
import BlurIn from "@/components/UI/BlurIn";
import classes from "./Hero.module.scss";
import { HomeSectionProps } from "pages";
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import StraightOutlinedIcon from '@mui/icons-material/StraightOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import TurnRightOutlinedIcon from '@mui/icons-material/TurnRightOutlined';
import { TypeAnimation } from 'react-type-animation';

const Hero = ({ setInViewSection, addSection }: HomeSectionProps) => {
  const { ref: scrollRef } = useInView({
    rootMargin: "-50%",
    onChange: (inView, entry) => {
      inView && setInViewSection("home");
      entry && addSection("home", entry.target);
    },
  });
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down(1400));

  return (
    <section className={classes.hero} ref={scrollRef}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item lg={8} m="auto">

            <BlurIn>
              <h2 className={classes.welcomeIntro}>
                Turning ideas into code
              </h2>
            </BlurIn>

            <BlurIn className={`flex items-center ${isSmallScreen ? "justify-center" : "justify-start"} gap-3 px-5`}>
              <Avatar className="bg-transparent text-themed-text p-7 sm:p-[35px] border-[1px] border-solid border-primary shadow-3d-card">
                <LightbulbOutlinedIcon fontSize="large" />
              </Avatar>
              <StraightOutlinedIcon fontSize="large" className="rotate-90" />
              <Avatar className="bg-transparent text-themed-text p-7 sm:p-[35px] border-[1px] border-solid border-primary shadow-3d-card">
                <CodeOutlinedIcon fontSize="large" />
              </Avatar>
              <TurnRightOutlinedIcon fontSize="large" className="rotate-90 translate-y-[20%]" />
            </BlurIn>

            <BlurIn
              delay={150}
              className={classes.welcomeTitle}
              data-text="ANDREJGROUND"
              component="h1"
            >
              <TypeAnimation
                className={classes.typing}
                cursor={false}
                sequence={[
                  'FRONTEND',
                  3000,
                  'UI',
                  3000,
                  'UX',
                  3000,
                  () => {
                    console.log('Sequence completed'); // Place optional callbacks anywhere in the array
                  }
                ]}
                wrapper="span"
                repeat={Infinity}
              />
              <br />
              <span className="text-primary">Andrej</span>Ground
            </BlurIn>
          </Grid>
          <Grid item xs={12} lg={4}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
              height="100%"
              gap={3}
              my={4}
            >
              <BlurIn delay={300} className="w-full">
                <Link href="/contact" passHref>
                  <a>
                    <Button3D
                      fullWidth
                      className="max-w-[500px] bg-themed-bg hover:bg-themed-bg"
                      endIcon={<ArrowRightAltIcon />}
                    >
                      Let&apos;s build
                    </Button3D>
                  </a>
                </Link>
              </BlurIn>
              <BlurIn delay={450} className="w-full">
                <Link href="/projects" passHref>
                  <a>
                    <Button3D
                      fullWidth
                      className="max-w-[500px] bg-themed-bg hover:bg-themed-bg"
                      endIcon={<ArrowRightAltIcon />}
                    >
                      SOME COOL STUFF
                    </Button3D>
                  </a>
                </Link>
              </BlurIn>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default React.memo(Hero);
