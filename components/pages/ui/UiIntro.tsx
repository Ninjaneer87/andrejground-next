import React from "react";
import { Container, Typography } from "@mui/material";
import Heading from "@/components/UI/Heading";
import BlurIn from "@/components/UI/BlurIn";

const UiIntro = () => {
  return (
    <Container
      component="section"
      maxWidth="xl"
      className="flex flex-col items-center justify-center text-center mt-[100px] mb-6"
    >
      <BlurIn>
        <Heading component="h1" text="AndrejGround UI" />
      </BlurIn>

      <BlurIn delay={150}>
        <Typography variant="h6" component='h2' className="max-w-[650px] font-medium">
          A closer look under the hood of a seamless web experience
        </Typography>
      </BlurIn>
    </Container>
  );
};

export default React.memo(UiIntro);
