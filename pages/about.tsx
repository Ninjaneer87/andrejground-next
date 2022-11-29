import React from "react";
import Intro from "@/components/sections/about/Intro";
import AboutMe from "@/components/sections/about/AboutMe";
import Values from "@/components/sections/about/Values";
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
      <div className="flex flex-col min-h-screen pt-[70px]">
        <Intro />
        <AboutMe />
        <Values />
      </div>
    </>
  );
};

export default React.memo(About);
