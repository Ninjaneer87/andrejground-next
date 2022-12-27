import React from "react";
import { SingleProjectImage } from './SingleProjectImage';
import { SingleProjectControls } from './SingleProjectControls';
import { SingleProjectMore } from './SingleProjectMore';
import { SingleProjectTech } from './SingleProjectTech';
import { SingleProjectFeatures } from "./SingleProjectFeatures";
import { SingleProjectAbout } from "./SingleProjectAbout";
import { Container,  Grid } from "@mui/material";
import Heading from "@/components/UI/Heading";
import BlurIn from "@/components/UI/BlurIn";
import { IProject } from "models/Project";
import StyledDivider from "@/components/UI/StyledDivider";

type Props = { project: IProject };

const SingleProject = ({
  project: {
    title,
    description,
    features,
    technologies,
    dataSource,
    projectType,
    completedAt,
    siteLink,
    codeLink,
    image,
    sideNote,
  },
}: Props) => {
  return (
    <Container
      component="section"
      maxWidth="xl"
      className="min-h-screen relative pb-[50px] md:p-6 mt-[100px]"
    >
      <Heading component="h1" text={title} />
      <Grid
        container
        alignItems="flex-start"
        justifyContent="center"
        spacing={3}
        marginBottom={6}
      >
        <Grid item xs={12} sm={10} md={6} lg={5}>
          <BlurIn maxWidth={650}>
            <SingleProjectAbout title={title} description={description} sideNote={sideNote} />
            <SingleProjectFeatures features={features} />
            <SingleProjectTech technologies={technologies} />
            <SingleProjectMore dataSource={dataSource} projectType={projectType} completedAt={completedAt} />
            <BlurIn><StyledDivider /></BlurIn>
            <SingleProjectControls siteLink={siteLink} codeLink={codeLink} />
          </BlurIn>
        </Grid>

        <Grid item xs={12} md={6} className="sticky top-[100px]">
          <SingleProjectImage image={image} title={title} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default SingleProject;
