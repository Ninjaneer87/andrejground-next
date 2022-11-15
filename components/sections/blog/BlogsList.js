import React from 'react';
import { Box, Grid, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import Heading from '../../UI/Heading';
import BlogItem from './BlogItem';

const patternImage2 = '/img/pattern2.webp';

const useStyles = makeStyles(theme => ({
  blogsListRoot: {
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
      // backgroundImage: `url('${patternImage2}')`,
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

const BlogsList = ({ blogs }) => {
  const classes = useStyles();

  return (
    <div className={classes.bgOverlay}>
      <Container maxWidth='xl' className={classes.blogsListRoot + ' blurIn'}>
        <Box width='100%' padding='30px 0'>
          <Heading text="Blog posts" />
          <Grid
            container
            spacing={5}
            justifyContent='center'
          >
            {blogs.map(blog =>
              <Grid
                item
                xs={12}
                md={6}
                // lg={4}
                className={classes.contentHolder}
                key={blog._id}
              >
                <BlogItem
                  id={blog._id}
                  slug={blog.slug}
                  title={blog.title}
                  createdAt={blog.createdAt}
                  updatedAt={blog.updatedAt}
                  image={blog.image}
                  content={blog.content}
                />
              </Grid>)}
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default BlogsList;