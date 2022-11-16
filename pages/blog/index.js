import React from 'react';
import BlogsList from '../../components/sections/blog/BlogsList';
import makeStyles from '@material-ui/styles/makeStyles';
import { MongoClient } from 'mongodb';
import Head from 'next/head';

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 70,
    display: 'flex',
    flexFlow: 'column',
    minHeight: '100vh',
  }
}))
const Blog = ({ blogs }) => {
  const classes = useStyles();
  return (
    <>
      <Head>
        <title>AndrejGround | Blog</title>
        <meta name='description' content="AndrejGround blog" />
      </Head>
      <div className={classes.root}>
        <BlogsList blogs={blogs} />
      </div>
    </>
  );
};

export async function getStaticProps() {
  const client = await MongoClient.connect(process.env.MONGO_URL);
  const db = client.db();
  const blogsCollection = db.collection('blogs');

  const blogs = await blogsCollection.find().sort({"createdAt": -1}).toArray();
  client.close();

  if (!blogs) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      blogs: blogs.map(blog => ({
        ...blog,
        _id: blog._id.toString(),
        createdAt: blog.createdAt.toString(),
        updatedAt: blog.updatedAt.toString(),
      }))
    },
    revalidate: 500 // updated again after 500s
  }
}


export default React.memo(Blog);