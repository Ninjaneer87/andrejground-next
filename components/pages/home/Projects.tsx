import { Box, Grid, Typography, Container } from "@mui/material";
import ButtonGroup from "@mui/material/ButtonGroup";
import React from "react";
import Heading from "@/components/UI/Heading";
import Link from "next/link";
import LinkIcon from "@mui/icons-material/Link";
import CodeIcon from "@mui/icons-material/Code";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { useInView } from "react-intersection-observer";
import Button3D from "@/components/UI/Button3D";
import BlurIn from "@/components/UI/BlurIn";
import StyledDivider from "@/components/UI/StyledDivider";
import { HomeSectionProps } from "pages";

const bgImageUrl = "/img/coinland-framed.webp";

const Projects = ({ setInViewSection, addSection }: HomeSectionProps) => {
  const { ref: scrollRef } = useInView({
    rootMargin: "-50%",
    onChange: (inView, entry) => {
      inView && setInViewSection("projects");
      entry && addSection("projects", entry.target);
    },
  });

  return (
    <Container
      className="flex text-center items-center min-h-screen relative lg:p-5"
      ref={scrollRef}
      maxWidth="xl"
      component="section"
    >
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
                <Typography component="h3" variant="h5" className="subtitle">
                  COINLAND
                </Typography>
              </BlurIn>

              <BlurIn className="text-start my-8 mx-0">
                This practice project was intended to connect client side app to
                a public API. Data comes from{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://coinmarketcap.com/"
                  className="text-primary"
                >
                  coinmarketcap.com
                </a>
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
                  <a>
                    <Button3D
                      variant="text"
                      fullWidth
                      size="large"
                      endIcon={<ArrowRightAltIcon />}
                    >
                      More projects
                    </Button3D>
                  </a>
                </Link>
              </BlurIn>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <BlurIn delay={450}>
              <div
                style={{ backgroundImage: `url(${bgImageUrl})` }}
                title="Coinland"
                className={`bg-no-repeat bg-center bg-contain aspect-[4/3] max-w-[800px] mx-auto drop-shadow-themed`}
              />
            </BlurIn>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default React.memo(Projects);
