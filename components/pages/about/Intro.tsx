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
import { scrollToAboutSection } from "pages/about";
import { aboutStats } from "utils/constants";

const logoImg = "/img/AG.png";

const Intro = () => {
  const scrollToAboutMe = () => scrollToAboutSection("aboutme");

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
        <Typography variant="h6" className="max-w-[650px] font-medium">
          AndrejGround is{" "}
          <span
            className="text-primary cursor-pointer"
            onClick={scrollToAboutMe}
          >
            Andrej
          </span>
          &apos;s playground for ideas, front-end features and functionalities,
          as well as a window to his portfolio
        </Typography>
      </BlurIn>

      <BlurIn delay={300}>
        <Box
          style={{ backgroundImage: `url(${logoImg})` }}
          className={`bg-center bg-contain bg-no-repeat w-[200px] h-[200px] p-8 my-[80px] mx-0 box-border rounded-full relative shadow-3d-card`}
        />
      </BlurIn>
      <List className="flex items-start justify-center gap-6 flex-wrap">
        {aboutStats.map((stat, i) => (
          <BlurIn delay={i * 150} key={stat.number}>
            <Box className="shadow-3d-card">
              <ListItem className="text-center max-w-[250px] py-[2rem] px-[1rem]">
                <ListItemText>
                  <ListItemIcon className="mb-8 justify-center">
                    {stat.icon}
                  </ListItemIcon>
                  <Typography variant="h4">{stat.number}</Typography>
                  <Typography>{stat.desc}</Typography>
                </ListItemText>
              </ListItem>
            </Box>
          </BlurIn>
        ))}
      </List>
    </Container>
  );
};

export default Intro;
