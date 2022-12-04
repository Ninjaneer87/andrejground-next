import React from "react";
import { Grid, Box } from "@mui/material";
import { Container } from "@mui/material";
import Heading from "@/components/UI/Heading";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import BlurIn from "@/components/UI/BlurIn";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import DevicesIcon from "@mui/icons-material/Devices";
import GroupWorkIcon from "@mui/icons-material/GroupWork";
import StyledDivider from "@/components/UI/StyledDivider";
import { HomeSectionProps } from "pages";

const Mission = ({ setInViewSection, addSection }: HomeSectionProps) => {
  const { ref: scrollRef } = useInView({
    rootMargin: "-50%",
    onChange: (inView, entry) => {
      inView && setInViewSection("mission");
      entry && addSection("mission", entry.target);
    },
  });

  return (
    <Container
      component="section"
      maxWidth="xl"
      className="flex text-center items-center min-h-screen relative pb-[100px] z-[1] justify-center lg:p-5"
      ref={scrollRef}
    >
      <Box width="100%" padding="30px 0">
        <BlurIn>
          <Heading text="Mission" />
        </BlurIn>
        <Grid container spacing={5} justifyContent="center">
          <Grid
            item
            className={`mb-[3em] flex justify-center xl:translate-y-[-100px]`}
            xs={12}
            md={6}
            lg={4}
          >
            <BlurIn delay={150}>
              <Box maxWidth={400} className="shadow-3d-card p-4 sm:p-8">
                <div className="h-[150px] w-[105px] flex items-center justify-center my-0 mx-auto relative">
                  <KeyboardIcon
                    fontSize="large"
                    className="text-primary block scale-[3]"
                  />
                </div>
                <StyledDivider />
                <div className="m-[1.5rem_0] leading-loose font-normal text-start">
                  AndrejGround is about turning ideas into code. If you are into
                  any of these,
                  <br />
                  <span className="text-primary">
                    <Link href="/contact">let&apos;s collaborate</Link>
                  </span>
                </div>
              </Box>
            </BlurIn>
          </Grid>
          <Grid
            item
            className="mb-[3em] flex justify-center"
            xs={12}
            md={6}
            lg={4}
          >
            <BlurIn delay={300}>
              <Box maxWidth={400} className="shadow-3d-card p-4 sm:p-8">
                <div className="h-[150px] w-[105px] flex items-center justify-center my-0 mx-auto relative">
                  <DevicesIcon
                    fontSize="large"
                    className="text-primary block scale-[3]"
                  />
                </div>
                <StyledDivider />
                <div className="m-[1.5rem_0] leading-loose font-normal text-start">
                  Tendencies: <strong>clean code</strong> in{" "}
                  <strong>latest technologies</strong>,{" "}
                  <strong>smooth UX</strong> and <strong>clean UI</strong> on
                  all screens and devices
                </div>
              </Box>
            </BlurIn>
          </Grid>
          <Grid
            item
            className={`mb-[3em] flex justify-center xl:translate-y-[100px]`}
            xs={12}
            md={6}
            lg={4}
          >
            <BlurIn delay={450}>
              <Box maxWidth={400} className="shadow-3d-card p-4 sm:p-8">
                <div className="h-[150px] w-[105px] flex items-center justify-center my-0 mx-auto relative">
                  <GroupWorkIcon
                    fontSize="large"
                    className="text-primary block scale-[3]"
                  />
                </div>
                <StyledDivider />
                <div className="m-[1.5rem_0] leading-loose font-normal text-start">
                  The mission is to connect with likeminded people and build
                  stuff.
                  <br />
                  Onwards!
                </div>
              </Box>
            </BlurIn>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default React.memo(Mission);
