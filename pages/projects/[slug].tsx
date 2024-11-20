import React from "react";
import SingleProject from "@/components/pages/projects/SingleProject/SingleProject";
import { MongoClient } from "mongodb";
import Head from "next/head";
import { IProject } from "models/Project";
import { GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { Alert, AlertTitle } from "@mui/material";

type ProjectProps = {
  project: IProject;
};

const SingleProjectPage = ({ project }: ProjectProps) => {
  if (!project) {
    return <div className="min-h-[60vh] grid place-items-center">
      < Alert severity="error" variant="standard" className="my-12 mx-auto blur-in w-fit" >
        <AlertTitle>This project does not exist</AlertTitle>
        Seems like you&apos;re looking for something that doesn&apos;t exist... or does it...? No, it doesn&apos;t.
      </Alert >
    </div>
  }

  return (
    <>
      <Head>
        <title>AndrejGround | {project.title} | Project type - {project.projectType}</title>
        <meta name="description" content={project.description} />
        <link
          rel="canonical"
          href={`https://andrejground.com/projects/${project.slug}`}
          key="canonical"
        />
      </Head>
      <SingleProject project={project} />
    </>
  );
};

export async function getStaticPaths() {
  // ONLY when using getStaticProps in DYNAMIC page
  // fetch all possible (or some) ids (dynamic paths),
  const client = await MongoClient.connect(process.env.MONGO_URL!);
  const db = client.db();
  const projectsCollection = db.collection("projects");

  const projects = await projectsCollection
    .find<IProject>({}, { projection: { slug: 1, _id: 0 } })
    .toArray();
  client.close();

  return {
    fallback: "blocking",
    paths: projects.map((project) => ({
      params: {
        slug: project.slug,
      },
    })),
  };
}

interface ParamsWithSlug extends ParsedUrlQuery {
  slug: string;
}
export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as ParamsWithSlug;

  const mongoUrl = process.env.MONGO_URL;

  console.log({mongoUrl})
  if (!mongoUrl) {
    throw new Error('MongoDB URI is not defined');
  }

  const client = await MongoClient.connect(mongoUrl);
  const db = client.db();
  const projectsCollection = db.collection("projects");

  if (slug !== "[object Object]") {
    const project = await projectsCollection.findOne<IProject>({ slug });
    client.close();
    delete project?._id;

    return {
      props: {
        project,
      },
      revalidate: 500,
    };
  }

  return {
    props: {
      project: null,
    },
  };
};

export default SingleProjectPage;
