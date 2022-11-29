import React from 'react';
import SingleBlogContent from '@/components/sections/blog/SingleBlogContent';
import { MongoClient } from 'mongodb';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { IBlog } from 'models/Blog';

type BlogProps = {
  blog: IBlog;
};

const SingleBlog = ({ blog }: BlogProps) => {
  return (
    <>
      <Head>
        <title>AndrejGround | {blog.title}</title>
        <meta name='description' content={blog.title} />
      </Head>
      <div className="flex flex-col min-h-screen pt-[100px]">
        <SingleBlogContent blog={blog} />
      </div>
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

export default React.memo(SingleBlog);