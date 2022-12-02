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
      component="section"
      className="flex text-center items-start min-h-screen relative md:p-4 mt-[100px]"
    >
      <Box width="100%" paddingBottom="30px">
        <BlurIn>
          <Heading component="h1" text="Blog" />
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
              <BlurIn delay={(i + 1) * 250} className="w-full">
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
