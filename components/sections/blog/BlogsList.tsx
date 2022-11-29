import React from "react";
import { Box, Grid, Container } from "@mui/material";
import Heading from "@/components/UI/Heading";
import BlogItem from "./BlogItem";
import BlurIn from "@/components/UI/BlurIn";
import { IBlog } from "models/Blog";

type Props = { blogs: IBlog[] };

const BlogsList = ({ blogs }: Props) => {
  return (
    <Container
      maxWidth="xl"
      className="flex text-center items-start min-h-screen relative"
    >
      <Box width="100%" padding="30px 0">
        <BlurIn>
          <Heading text="Blog" />
        </BlurIn>
        <Grid container spacing={5} justifyContent="center">
          {blogs.map((blog, i) => (
            <Grid
              item
              xs={12}
              md={6}
              className="flex items-center justify-center"
              key={blog._id}
            >
              <BlurIn delay={i * 150} className='w-full'>
                <BlogItem blog={blog} />
              </BlurIn>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default BlogsList;
