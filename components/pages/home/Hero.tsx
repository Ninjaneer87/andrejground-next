import React from "react";
import { Container, Grid, Box } from "@mui/material";
import Link from "next/link";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { useInView } from "react-intersection-observer";
import Button3D from "@/components/UI/Button3D";
import BlurIn from "@/components/UI/BlurIn";
import classes from "./Hero.module.scss";
import { HomeSectionProps, registerHomeSection } from "pages";

const Hero = ({ setInViewSection }: HomeSectionProps) => {
  const { ref: scrollRef } = useInView({
    rootMargin: "-50%",
    onChange: (inView, entry) => {
      inView && setInViewSection("home");
      entry && registerHomeSection("home", entry.target);
    },
  });

  return (
    <section className={classes.hero} ref={scrollRef}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item lg={8}>
            <BlurIn>
              <div className={classes.welcomeIntro}>
                One stop for awesome front-end solutions
              </div>
            </BlurIn>

            <BlurIn
              delay={150}
              className={classes.welcomeTitle}
              data-text="WELCOME TO THE ANDREJGROUND"
              component="h1"
            >
              Welcome to the <span className="cyan">Andrej</span>Ground
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
            >
              <BlurIn delay={300} className="w-full">
                <Link href="/contact" passHref>
                  <a>
                    <Button3D
                      fullWidth
                      className="max-w-[500px]"
                      endIcon={<ArrowRightAltIcon />}
                    >
                      Let&apos;s build
                    </Button3D>
                  </a>
                </Link>
              </BlurIn>
              <BlurIn delay={450} className="w-full">
                <Link href="/portfolio" passHref>
                  <a>
                    <Button3D
                      fullWidth
                      className="max-w-[500px]"
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
