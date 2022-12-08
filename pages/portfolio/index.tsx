import React from "react";
import ProjectsList from "@/components/pages/portfolio/ProjectsList";
import { MongoClient } from "mongodb";
import Head from "next/head";
import { IProject } from "models/Project";

type ProjectsProps = {
  projects: IProject[];
};

const Portfolio = ({ projects }: ProjectsProps) => {
  return (
    <>
      <Head>
        <title>AndrejGround | Explore projects from the AndrejGround lab</title>
        <meta name="description" content="Take a look at some cool stuff Andrej has built over the course of his career. Here is a list of both professional and personal projects" />
        <link
          rel="canonical"
          href="https://andrejground.com/portfolio"
          key="canonical"
        />
      </Head>
      <ProjectsList projects={projects} />
    </>
  );
};

export async function getStaticProps() {
  const client = await MongoClient.connect(process.env.MONGO_URL!);
  const db = client.db();
  const projectsCollection = db.collection("projects");

  const projects = await projectsCollection.find<IProject>({}).toArray();
  client.close();

  if (!projects) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      projects: projects.reverse().map((project) => ({
        ...project,
        _id: project._id.toString(),
      })),
    },
    revalidate: 500, // updated again after 500s
  };
}

export default Portfolio;
