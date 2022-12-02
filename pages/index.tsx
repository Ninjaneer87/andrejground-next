import React from "react";
import Hero from "@/components/pages/home/Hero";
import Mission from "@/components/pages/home/Mission";
import Toolbox from "@/components/pages/home/Toolbox";
import Projects from "@/components/pages/home/Projects";
import ContactInfo from "@/components/pages/home/ContactInfo";
import SectionNav from "@/components/pages/home/SectionNav";
import { useState } from "react";
import Head from "next/head";

export type HomeSectionNames = "home" | "mission" | "toolbox" | "projects" | "contact";

export type HomeSectionProps = { 
  setInViewSection: (sectionName: HomeSectionNames) => void;
};

const sections = {} as { [key in HomeSectionNames]: Element | null };
export const registerHomeSection = (sectionName: HomeSectionNames, section: Element | null ) => {
  sections[sectionName] = section;
};
export const scrollToHomeSection = (section: HomeSectionNames) => {
  sections[section]?.scrollIntoView({ behavior: "smooth" });
};

const Home = () => {
  const [inViewSection, setInViewSection] = useState<HomeSectionNames>("home");

  return (
    <>
      <Head>
        <title>AndrejGround | Home</title>
        <meta name="description" content="Welcome to the AndrejGround" />
      </Head>
      <Hero setInViewSection={setInViewSection} />
      <Mission setInViewSection={setInViewSection} />
      <Toolbox setInViewSection={setInViewSection} />
      <Projects setInViewSection={setInViewSection} />
      <ContactInfo setInViewSection={setInViewSection} />

      <SectionNav inViewSection={inViewSection} />
    </>
  );
};

export default Home;
