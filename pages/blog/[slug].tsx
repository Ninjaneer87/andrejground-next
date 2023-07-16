import React from 'react';
import SingleBlog from '@/components/pages/blog/SingleBlog/SingleBlog';
import { MongoClient } from 'mongodb';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { IBlog } from 'models/Blog';
import { Alert, AlertTitle } from '@mui/material';

type BlogProps = {
  blog: IBlog;
};

const SingleBlogPage = ({ blog }: BlogProps) => {
  if (!blog) {
    return <div className="min-h-[60vh] grid place-items-center">
      < Alert severity="error" variant="standard" className="my-12 mx-auto blur-in w-fit" >
        <AlertTitle>This blog post does not exist</AlertTitle>
        Seems like you&apos;re looking for something that doesn&apos;t exist... or does it...? No, it doesn&apos;t.
      </Alert >
    </div>
  }

  return (
    <>
      <Head>
        <title>AndrejGround | Blog | {blog.title}</title>
        <meta name='description' content={blog.subtitle} />
        <link
          rel="canonical"
          href={`https://andrejground.com/blog/${blog.slug}`}
          key="canonical"
        />
      </Head>
      <SingleBlog blog={blog} />
    </>
  );
};

export async function getStaticPaths() {
  // ONLY when using getStaticProps in DYNAMIC page
  // fetch all possible (or some) ids (dynamic paths),
  const client = await MongoClient.connect(process.env.MONGO_URL!);
  const db = client.db();
  const blogsCollection = db.collection('blogs');

  const blogs = await blogsCollection.find({}, { projection: { slug: 1, _id: 0 } }).toArray();
  client.close();

  return {
    fallback: 'blocking',
    paths: blogs.map(blog => ({
      params: {
        slug: blog.slug
      }
    }))
  }
}

interface ParamsWithSlug extends ParsedUrlQuery {
  slug: string;
}
export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as ParamsWithSlug;

  const client = await MongoClient.connect(process.env.MONGO_URL!);
  const db = client.db();
  const blogsCollection = db.collection('blogs');

  if (slug !== '[object Object]') {
    const blog = await blogsCollection.findOne<IBlog>({ slug });
    client.close();

    if (!blog) {
      return {
        props: {
          blog: null
        }
      }
    }

    delete blog?._id;

    return {
      props: {
        blog: {
          ...blog,
          createdAt: blog?.createdAt.toString(),
          updatedAt: blog?.updatedAt.toString(),
        }
      },
      revalidate: 500
    }
  }

  return {
    props: {
      blog: null
    }
  }
}

export default SingleBlogPage;