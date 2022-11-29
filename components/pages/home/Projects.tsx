import { Box, Grid, Typography, Container } from "@mui/material";
import ButtonGroup from "@mui/material/ButtonGroup";
import React, { useContext } from "react";
import Heading from "@/components/UI/Heading";
import Link from "next/link";
import LinkIcon from "@mui/icons-material/Link";
import CodeIcon from "@mui/icons-material/Code";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import ThemeContext, { ThemeContextType } from "context/themeContext";
import Button3D from "@/components/UI/Button3D";
import BlurIn from "@/components/UI/BlurIn";
import StyledDivider from "@/components/UI/StyledDivider";
import { HomeSectionProps, registerHomeSection } from "pages";

const bgImageUrl = "/img/coinland-framed.webp";

const Projects = ({ setInViewSection }: HomeSectionProps) => {
  const { dark } = useContext(ThemeContext) as ThemeContextType;

  const {
    ref: scrollRef,
    inView: scrollInView,
    entry,
  } = useInView({
    rootMargin: "-50%",
  });

  useEffect(() => {
    if (scrollInView) setInViewSection("projects");
  }, [scrollInView, setInViewSection]);

  useEffect(() => {
    if (entry) registerHomeSection("projects", entry.target);
  }, [entry]);

  return (
    <section
      className="flex text-center items-center min-h-screen relative lg:p-5"
      ref={scrollRef}
    >
      <Container maxWidth="xl">
        <Box width="100%" padding="30px 0">
          <BlurIn>
            <Heading text="Projects" />
          </BlurIn>
          <Grid container spacing={5} justifyContent="flex-end">
            <Grid
              item
              xs={12}
              md={6}
              className="flex text-center justify-center items-center"
            >
              <Box maxWidth={500} height="fit-content">
                <BlurIn>
                  <Typography
                    component="h3"
                    variant="h5"
                    className="subtitle"
                  >
                    COINLAND
                  </Typography>
                </BlurIn>

                <BlurIn className="text-start my-8 mx-0">
                  This practice project was intended to connect client side
                  app to a public API. Data comes from{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://coinmarketcap.com/"
                    className="text-primary"
                  >
                    coinmarketcap.com
                  </a>
                  .
                  <br />
                  <br />
                  <small>* AndrejGround&apos;s first ever project</small>
                </BlurIn>

                <BlurIn>
                  <ButtonGroup
                    aria-label="outlined primary button group"
                    fullWidth
                    className="gap-5"
                  >
                    <Button3D
                      variant="text"
                      component="a"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://ninjaneer87.github.io/coinland/"
                      endIcon={<LinkIcon />}
                      color={dark ? "primary" : "secondary"}
                    >
                      Live site
                    </Button3D>
                    <Button3D
                      variant="text"
                      component="a"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/Ninjaneer87/coinland/"
                      endIcon={<CodeIcon />}
                      color={dark ? "primary" : "secondary"}
                    >
                      Code
                    </Button3D>
                  </ButtonGroup>
                </BlurIn>

                <BlurIn>
                  <StyledDivider />
                </BlurIn>

                <BlurIn>
                  <Link href="/portfolio" passHref>
                    <Button3D
                      variant="text"
                      fullWidth
                      size="large"
                      component="a"
                      href="/portfolio"
                      color={dark ? "primary" : "secondary"}
                      endIcon={<ArrowRightAltIcon />}
                    >
                      More projects
                    </Button3D>
                  </Link>
                </BlurIn>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <BlurIn delay={450}>
                <div
                  style={{backgroundImage: `url(${bgImageUrl})`}}
                  className={`bg-no-repeat bg-center bg-contain h-[600px] max-h-[90vw] drop-shadow-drop`}
                />
              </BlurIn>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
};

export default React.memo(Projects);
