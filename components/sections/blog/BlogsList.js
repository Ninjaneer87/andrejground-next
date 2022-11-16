import React from "react";
import { Box, Grid, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import Heading from "../../UI/Heading";
import BlogItem from "./BlogItem";
import BlurIn from "../../UI/BlurIn";

const useStyles = makeStyles((theme) => ({
  blogsListRoot: {
    display: "flex",
    textAlign: "center",
    alignItems: "flex-start",
    minHeight: "100vh",
    position: "relative",
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(3),
    },
  },
  contentHolder: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  gridItem: {
    marginBottom: "3em",
  },
}));

const BlogsList = ({ blogs }) => {
  const classes = useStyles();

  return (
    <div className={classes.bgOverlay}>
      <Container maxWidth="xl" className={classes.blogsListRoot}>
        <Box width="100%" padding="30px 0">
          <BlurIn>
            <Heading text="Blog posts" />
          </BlurIn>
          <Grid container spacing={5} justifyContent="center">
            {blogs.map((blog, i) => (
              <Grid
                item
                xs={12}
                md={6}
                // lg={4}
                className={classes.contentHolder}
                key={blog._id}
              >
                <BlurIn delay={i * 150} fullWidth>
                  <BlogItem
                    id={blog._id}
                    slug={blog.slug}
                    title={blog.title}
                    createdAt={blog.createdAt}
                    updatedAt={blog.updatedAt}
                    image={blog.image}
                    content={blog.content}
                  />
                </BlurIn>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default BlogsList;
