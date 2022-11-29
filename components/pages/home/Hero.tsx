import React, { useContext } from "react";
import { Container, Grid, Box } from "@mui/material";
import Link from "next/link";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Button3D from "@/components/UI/Button3D";
import ThemeContext, { ThemeContextType } from "context/themeContext";
import BlurIn from "@/components/UI/BlurIn";
import classes from "./Hero.module.scss";
import { HomeSectionProps, registerHomeSection } from "pages";

const Hero = ({ setInViewSection }: HomeSectionProps) => {
  const { dark } = useContext(ThemeContext) as ThemeContextType;
  const {
    ref: scrollRef,
    inView: scrollInView,
    entry,
  } = useInView({ rootMargin: "-50%" });

  useEffect(() => {
    if (scrollInView) setInViewSection("home");
  }, [scrollInView, setInViewSection]);

  useEffect(() => {
    if (entry) registerHomeSection("home", entry.target);
  }, [entry]);

  return (
    <section className={classes.hero} ref={scrollRef}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item lg={8}>
            <BlurIn>
              <div className={classes.welcomeIntro}>
                One stop for awesome front-end solutions.
              </div>
            </BlurIn>

            <BlurIn
              delay={150}
              className={classes.welcomeTitle}
              data-text="WELCOME TO THE ANDREJGROUND"
              component='h1'
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
                  <Button3D
                    fullWidth
                    color={dark ? "primary" : "secondary"}
                    className="max-w-[500px]"
                    component="a"
                    endIcon={<ArrowRightAltIcon />}
                  >
                    Let&apos;s build
                  </Button3D>
                </Link>

              </BlurIn>
              <BlurIn delay={450} className="w-full">
                <Link href="/portfolio" passHref>
                  <Button3D
                    fullWidth
                    color={dark ? "primary" : "secondary"}
                    className="max-w-[500px]"
                    component="a"
                    endIcon={<ArrowRightAltIcon />}
                  >
                    SOME COOL STUFF
                  </Button3D>
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
