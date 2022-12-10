import React from "react";
import Intro from "@/components/pages/about/Intro";
import AboutMe from "@/components/pages/about/AboutMe";
import Values from "@/components/pages/about/Values/Values";
import Head from "next/head";
import { useSections } from "hooks/useSections";

export type AboutSectionNames = "aboutme" | "values";

const AboutPage = () => {
  const { addSection, scrollToSection } = useSections<AboutSectionNames>();

  return (
    <>
      <Head>
        <title>AndrejGround | What is AndrejGround and who is Andrej</title>
        <meta name="description" content="Learn more about AndrejGround and Andrej Forgac by exploring this page. Get to know more about Andrej's skills, experiences, passion and values." />
        <link
          rel="canonical"
          href="https://andrejground.com/about"
          key="canonical"
        />
      </Head>
      <Intro scrollToSection={scrollToSection} />
      <AboutMe addSection={addSection} scrollToSection={scrollToSection} />
      <Values addSection={addSection} />
    </>
  );
};

export default AboutPage;
