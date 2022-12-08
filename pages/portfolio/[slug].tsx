import React from "react";
import SingleProjectContent from "@/components/pages/portfolio/SingleProjectContent";
import { MongoClient } from "mongodb";
import Head from "next/head";
import { IProject } from "models/Project";
import { GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";

type ProjectProps = {
  project: IProject;
};

const SingleProject = ({ project }: ProjectProps) => {
  return (
    <>
      <Head>
        <title>AndrejGround | {project.title}</title>
        <meta name="description" content={project.description} />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/portfolio/${project.slug}`}
          key="canonical"
        />
      </Head>
      <SingleProjectContent project={project} />
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

  const client = await MongoClient.connect(process.env.MONGO_URL!);
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

export default SingleProject;
