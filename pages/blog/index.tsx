import React from "react";
import BlogsList from "@/components/pages/blog/BlogsList";
import { MongoClient } from "mongodb";
import Head from "next/head";
import { IBlog } from "models/Blog";

type BlogsProps = {
  blogs: IBlog[];
};

const BlogPage = ({ blogs }: BlogsProps) => {
  return (
    <>
      <Head>
        <title>AndrejGround | All about web development / self improvement</title>
        <meta name="description" content="Learn more about AndrejGround and Andrej by reading these technical and non-technical articles. Andrej is happy to share his learning path and self improvement tips in order to help/inspire people." />
        <link
          rel="canonical"
          href="https://andrejground.com/blog"
          key="canonical"
        />
      </Head>
      <BlogsList blogs={blogs} />
    </>
  );
};

export async function getStaticProps() {
  const client = await MongoClient.connect(process.env.MONGO_URL!);
  const db = client.db();
  const blogsCollection = db.collection("blogs");

  const blogs = await blogsCollection
    .find<IBlog>({})
    .sort({ createdAt: -1 })
    .toArray();
  client.close();

  if (!blogs) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      blogs: blogs.map((blog) => ({
        ...blog,
        _id: blog._id.toString(),
        createdAt: blog.createdAt.toString(),
        updatedAt: blog.updatedAt.toString(),
      })),
    },
    revalidate: 500, // updated again after 500s
  };
}

export default BlogPage;
