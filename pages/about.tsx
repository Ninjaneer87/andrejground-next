import React from "react";
import Intro from "@/components/pages/about/Intro";
import AboutMe from "@/components/pages/about/AboutMe";
import Values from "@/components/pages/about/Values";
import Head from "next/head";

export enum AboutSectionNames {
  ABOUTME = "aboutme",
  VALUES = "values",
}

const sections = {} as { [key in AboutSectionNames]: Element | null };
export const registerAboutSection = (sectionName: AboutSectionNames, section: Element | null) => {
  sections[sectionName] = section;
};
export const scrollToAboutSection = (section: AboutSectionNames) => {
  sections[section]?.scrollIntoView({ behavior: "smooth" });
};

const About = () => {
  return (
    <>
      <Head>
        <title>AndrejGround | About</title>
        <meta name="description" content="AndrejGround about page" />
      </Head>
      <Intro />
      <AboutMe />
      <Values />
    </>
  );
};

export default React.memo(About);
