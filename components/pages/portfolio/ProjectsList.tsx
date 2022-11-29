import React from "react";
import { Box, Container, Grid } from "@mui/material";
import Heading from "@/components/UI/Heading";
import ProjectItem from "./ProjectItem";
import BlurIn from "@/components/UI/BlurIn";
import { IProject } from "models/Project";

type Props = {
  projects: IProject[]
}

const ProjectsList = ({ projects }: Props) => {
  return (
      <section className="flex text-center items-start min-h-screen relative md:p-4">
        <Container maxWidth="xl" disableGutters>
          <Box width="100%" padding="30px 0">
            <BlurIn>
              <Heading component='h1' text="Projects" />
            </BlurIn>
            <Grid container>
              {projects.map((project, i) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  lg={4}
                  xl={3}
                  style={{ animationDelay: `${i * 150}ms` }}
                  className="flex items-center justify-center p-[20px_0px] md:p-4"
                  key={project._id}
                >
                  <BlurIn delay={i * 150} width='100%'>
                    <ProjectItem project={project} />
                  </BlurIn>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </section>
  );
};

export default ProjectsList;
