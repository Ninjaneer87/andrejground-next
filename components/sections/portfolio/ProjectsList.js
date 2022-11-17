import React from "react";
import { Box, Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import Heading from "../../UI/Heading";
import ProjectItem from "./ProjectItem";
import BlurIn from "../../UI/BlurIn";

const patternImage2 = "/img/pattern2.webp";

const useStyles = makeStyles((theme) => ({
  projectsListRoot: {
    display: "flex",
    textAlign: "center",
    alignItems: "flex-start",
    minHeight: "100vh",
    position: "relative",
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(3),
    },
  },
  bgOverlay: {
    overflow: "hidden",
    position: "relative",
    "&::after": {
      content: '""',
      // backgroundImage: `url('${patternImage2}')`,
      backgroundPosition: "center",
      opacity: 0.35,
      filter: "drop-shadow(0px 0px 1px #fff)",
      position: "absolute",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      transform: "scaleX(-1)",
      zIndex: -1,
    },
  },
  contentHolder: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px 0px !important",
    [theme.breakpoints.up(992)]: {
      padding: theme.spacing(3),
    },
  },
  gridItem: {
    marginBottom: "3em",
  },
}));

const ProjectsList = ({ projects }) => {
  const classes = useStyles();

  return (
    <div className={classes.bgOverlay}>
      <section className={classes.projectsListRoot}>
        <Container maxWidth="xl" style={{ padding: 0 }}>
          <Box width="100%" padding="30px 0">
            <BlurIn>
              <Heading text="Projects" />
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
                  className={classes.contentHolder}
                  key={project._id}
                >
                  <BlurIn delay={i * 150} fullWidth>
                    <ProjectItem
                      id={project._id}
                      slug={project.slug}
                      title={project.title}
                      siteLink={project.siteLink}
                      codeLink={project.codeLink}
                      image={project.image}
                      projectType={project.projectType}
                    />
                  </BlurIn>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </section>
    </div>
  );
};

export default ProjectsList;
