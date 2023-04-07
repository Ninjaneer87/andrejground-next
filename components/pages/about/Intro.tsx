import React from "react";
import {
  Box,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import Heading from "@/components/UI/Heading";
import BlurIn from "@/components/UI/BlurIn";
import { aboutStats } from "utils/constants";
import { AboutSectionNames } from "@/pages/about";
import LogoAnimated from "@/components/UI/LogoAnimated";

type Props = {
  scrollToSection: (sectionName: AboutSectionNames) => void;
}

const Intro = ({ scrollToSection }: Props) => {
  return (
    <Container
      component="section"
      maxWidth="xl"
      className="flex flex-col items-center justify-center text-center min-h-screen mt-[100px]"
    >
      <BlurIn>
        <Heading component="h1" text="What is AndrejGround?" />
      </BlurIn>
      <BlurIn delay={150}>
        <Typography variant="h6" component='h2' className="max-w-[650px] font-medium">
          AndrejGround is{" "}
          <span
            className="text-primary cursor-pointer"
            onClick={() => scrollToSection("aboutme")}
          >
            Andrej
          </span>
          &apos;s playground for ideas, frontend features and functionalities,
          as well as a window to his portfolio
        </Typography>
      </BlurIn>

      <BlurIn delay={300}>
        <Box
          title="AndrejGround logo"
          className={`bg-center bg-[80%_,80%] bg-no-repeat w-[220px] h-[220px] p-4 my-[80px] mx-0 box-border rounded-full relative shadow-3d-card grid place-items-center`}
        >
          <LogoAnimated  />
        </Box>
      </BlurIn>
      <List className="flex items-start justify-center gap-6 flex-wrap">
        {aboutStats.map((stat, i) => (
          <BlurIn component={ListItem} delay={i * 150} key={stat.number} className="text-center max-w-[250px] py-[2rem] px-[1rem] shadow-3d-card">
            <ListItemText>
              <ListItemIcon className="mb-8 justify-center">
                {stat.icon}
              </ListItemIcon>
              <Typography variant="h4" component='div'>{stat.number}</Typography>
              <Typography>{stat.desc}</Typography>
            </ListItemText>
          </BlurIn>
        ))}
      </List>
    </Container>
  );
};

export default Intro;
