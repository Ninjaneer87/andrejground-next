import React from 'react';
import PageTitle from "../../components/UI/PageTitle";
import makeStyles from '@material-ui/styles/makeStyles';
import SingleBlogContent from '../../components/sections/blog/SingleBlogContent';
import { MongoClient } from 'mongodb';
import Head from 'next/head';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexFlow: 'column',
    minHeight: '100vh',
  },
}))
const SingleBlog = ({ blog }) => {
  const classes = useStyles();
  return (
    <>
      <Head>
        <title>AndrejGround | {blog.title}</title>
        <meta name='description' content={blog.title} />
      </Head>
      <div className={classes.root}>
        <PageTitle pageTitle='Blog' />
        <SingleBlogContent {...blog} />
        {/* {blog.title} */}
      </div>
    </>
  );
};

export async function getStaticPaths() { // ONLY when using getStaticProps in DYNAMIC page
  // fetch all possible (or some) ids (dynamic paths),
  const client = await MongoClient.connect(process.env.MONGO_URL);
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

export async function getStaticProps(context) {
  const { slug } = context.params;

  const client = await MongoClient.connect(process.env.MONGO_URL);
  const db = client.db();
  const blogsCollection = db.collection('blogs');

  if (slug !== '[object Object]') {
    const blog = await blogsCollection.findOne({ slug });
    client.close();
    delete blog._id;

    return {
      props: {
        blog: {
          ...blog,
          createdAt: blog.createdAt.toString(),
          updatedAt: blog.updatedAt.toString(),
        }
      },
      revalidate: 500
    }
  }

  return {
    props: {
      blog: {}
    }
  }
}

export default React.memo(SingleBlog);