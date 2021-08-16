import React from 'react';
import { Box, Grid } from '@material-ui/core';
import {makeStyles} from '@material-ui/core';
import Heading from '../../UI/Heading';
import ProjectItem from './ProjectItem';

const patternImage2 = '/img/pattern2.png';

const useStyles = makeStyles(theme => ({
  projectsListRoot: {
    display: 'flex',
    textAlign: 'center',
    alignItems: 'flex-start',
    minHeight: '100vh',
    position: 'relative',
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(3),
    },
  },
  bgOverlay: {
    overflow: 'hidden',
    position: 'relative',
    '&::after': {
      content: '""',
      backgroundImage: `url('${patternImage2}')`,
      backgroundPosition: 'center',
      opacity: .35,
      filter: 'drop-shadow(0px 0px 1px #fff)',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      transform: 'scaleX(-1)',
      zIndex: -1
    },
  },
  contentHolder: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gridItem: {
    marginBottom: '3em',
  },
}));

const ProjectsList = ({ projects }) => {
  const classes = useStyles();

  return (
    <div className={`${classes.bgOverlay} fadeIn`}>
      <section className={classes.projectsListRoot}>
        <Box width='100%' padding='30px 0'>
          <Heading text="Projects" />
          <Grid container spacing={5} >
            {projects.map(project =>
              <Grid item xs={12} md={6} className={classes.contentHolder} key={project._id}>
                <ProjectItem
                  id={project._id}
                  slug={project.slug}
                  title={project.title}
                  siteLink={project.siteLink}
                  codeLink={project.codeLink}
                  image={project.image}
                  projectType={project.projectType}
                />
              </Grid>)}
          </Grid>
        </Box>
      </section>
    </div>
  );
};

export default ProjectsList;