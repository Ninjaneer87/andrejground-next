import React from 'react';
import Starfall from "../../components/UI/Starfall"
import PageTitle from "../../components/UI/PageTitle";
import ProjectsList from '../../components/sections/portfolio/ProjectsList';
import makeStyles from '@material-ui/styles/makeStyles';
import { MongoClient } from 'mongodb';
import Head from 'next/head';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexFlow: 'column',
    minHeight: '100vh',
  }
}))
const Portfolio = ({ projects }) => {
  const classes = useStyles();
  return (
    <>
      <Head>
        <title>AndrejGround | Portfolio</title>
        <meta name='description' content="AndrejGround projects" />
      </Head>
      <div className={classes.root}>
        <Starfall />
        <PageTitle pageTitle='Portfolio' />
        <ProjectsList projects={projects} />
      </div>
    </>
  );
};

export async function getStaticProps() {
  const client = await MongoClient.connect(process.env.MONGO_URL);
  const db = client.db();
  const projectsCollection = db.collection('projects');

  const projects = await projectsCollection.find().toArray();
  client.close();

  if (!projects) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      projects: projects.map(project => ({
        ...project,
        _id: project._id.toString(),
      }))
    },
    revalidate: 500 // updated again after 500s
  }
}


export default React.memo(Portfolio);