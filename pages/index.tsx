import React from "react";
import Hero from "@/components/pages/home/Hero";
import Mission from "@/components/pages/home/Mission";
import Toolbox from "@/components/pages/home/Toolbox";
import Projects from "@/components/pages/home/Projects";
import ContactInfo from "@/components/pages/home/ContactInfo";
import SectionNav from "@/components/pages/home/SectionNav";
import { useState } from "react";
import Head from "next/head";
import { useSections } from "hooks/useSections";

export type HomeSectionNames = "home" | "mission" | "projects" | "toolbox" |  "contact";
export type HomeSectionProps = { 
  setInViewSection: (sectionName: HomeSectionNames) => void;
  addSection: (sectionName: HomeSectionNames, section: Element) => void;
};

const HomePage = () => {
  const [inViewSection, setInViewSection] = useState<HomeSectionNames>("home");
  const { addSection, scrollToSection } = useSections<HomeSectionNames>();

  return (
    <>
      <Head>
        <title>AndrejGround | Frontend UI UX | Ideas into code</title>
        <meta name="description" content="AndrejGround is a frontend solutions provider representing Andrej Forgac, a frontend developer, his portfolio and a couple of ways to connect with him." />
        <link
          rel="canonical"
          href="https://andrejground.com"
          key="canonical"
        />
      </Head>
      <Hero setInViewSection={setInViewSection} addSection={addSection}  />
      <Mission setInViewSection={setInViewSection} addSection={addSection} />
      <Projects setInViewSection={setInViewSection} addSection={addSection} />
      <Toolbox setInViewSection={setInViewSection} addSection={addSection} />
      <ContactInfo setInViewSection={setInViewSection} addSection={addSection} />

      <SectionNav inViewSection={inViewSection} scrollToSection={scrollToSection}/>
    </>
  );
};

export default HomePage;
