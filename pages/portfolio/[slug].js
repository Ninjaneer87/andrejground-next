import React from 'react';
import PageTitle from "../../components/UI/PageTitle";
import makeStyles from '@material-ui/styles/makeStyles';
import SingleProjectContent from '../../components/sections/portfolio/SingleProjectContent';
import { MongoClient } from 'mongodb';
import Head from 'next/head';

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 70,
    display: 'flex',
    flexFlow: 'column',
    minHeight: '100vh',
  },
}))
const SingleProject = ({ project }) => {
  // console.log('project: ', project)
  const classes = useStyles();
  return (
    <>
      <Head>
        <title>AndrejGround | {project.title}</title>
        <meta name='description' content={project.description} />
      </Head>
      <div className={classes.root}>
        {/* <PageTitle pageTitle='Project' /> */}
        <SingleProjectContent {...project} />
      </div>
    </>
  );
};

export async function getStaticPaths() { // ONLY when using getStaticProps in DYNAMIC page
  // fetch all possible (or some) ids (dynamic paths),
  const client = await MongoClient.connect(process.env.MONGO_URL);
  const db = client.db();
  const projectsCollection = db.collection('projects');

  const projects = await projectsCollection.find({}, { projection: { slug: 1, _id: 0 } }).toArray();
  client.close();

  return {
    fallback: 'blocking',
    paths: projects.map(project => ({
      params: {
        slug: project.slug
      }
    }))
  }
}

export async function getStaticProps(context) {
  const { slug } = context.params;

  const client = await MongoClient.connect(process.env.MONGO_URL);
  const db = client.db();
  const projectsCollection = db.collection('projects');

  if (slug !== '[object Object]') {
    const project = await projectsCollection.findOne({ slug });
    client.close();
    delete project._id;

    return {
      props: {
        project
      },
      revalidate: 500
    }
  }

  return {
    props: {
      project: {}
    }
  }
}

export default React.memo(SingleProject);