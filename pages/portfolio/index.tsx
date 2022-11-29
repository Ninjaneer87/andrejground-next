import React from "react";
import ProjectsList from "@/components/sections/portfolio/ProjectsList";
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
        <title>AndrejGround | Portfolio</title>
        <meta name="description" content="AndrejGround projects" />
      </Head>
      <div className="flex flex-col min-h-screen pt-[70px]">
        <ProjectsList projects={projects} />
      </div>
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

export default React.memo(Portfolio);