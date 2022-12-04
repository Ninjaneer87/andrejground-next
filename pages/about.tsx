import React from "react";
import Intro from "@/components/pages/about/Intro";
import AboutMe from "@/components/pages/about/AboutMe";
import Values from "@/components/pages/about/Values";
import Head from "next/head";
import { useSections } from "hooks/useSections";

export type AboutSectionNames = "aboutme" | "values";

const About = () => {
  const { addSection, scrollToSection } = useSections<AboutSectionNames>();

  return (
    <>
      <Head>
        <title>AndrejGround | About</title>
        <meta name="description" content="AndrejGround about page" />
      </Head>
      <Intro scrollToSection={scrollToSection} />
      <AboutMe addSection={addSection} scrollToSection={scrollToSection} />
      <Values addSection={addSection} />
    </>
  );
};

export default About;
