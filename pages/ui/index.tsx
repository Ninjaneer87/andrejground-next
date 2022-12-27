import React from "react";
import Intro from "@/components/pages/about/Intro";
import AboutMe from "@/components/pages/about/AboutMe";
import Values from "@/components/pages/about/Values/Values";
import Head from "next/head";
import { useSections } from "hooks/useSections";
import UiIntro from "@/components/pages/ui/UiIntro";
import UiComponents from "@/components/pages/ui/UiComponents";

export type AboutSectionNames = "aboutme" | "values";

const UiPage = () => {
  const { addSection, scrollToSection } = useSections<AboutSectionNames>();

  return (
    <>
      <Head>
        <title>AndrejGround | UI components | Standalone features and functionalities with demo and code</title>
        <meta name="description" content="Take a close look on AndrejGround user interface and user experience, play with components and see what they are made of" />
        <link
          rel="canonical"
          href="https://andrejground.com/ui"
          key="canonical"
        />
      </Head>
      <UiIntro />
      <UiComponents />
    </>
  );
};

export default UiPage;
