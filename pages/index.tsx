import React from "react";
import Hero from "@/components/sections/home/Hero";
import Mission from "@/components/sections/home/Mission";
import Toolbox from "@/components/sections/home/Toolbox";
import Projects from "@/components/sections/home/Projects";
import ContactInfo from "@/components/sections/home/ContactInfo";
import SectionNav from "@/components/sections/home/SectionNav";
import { useState } from "react";

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
    <div className="flex flex-col min-h-screen">
      <Hero setInViewSection={setInViewSection} />
      <Mission setInViewSection={setInViewSection} />
      <Toolbox setInViewSection={setInViewSection} />
      <Projects setInViewSection={setInViewSection} />
      <ContactInfo setInViewSection={setInViewSection} />

      <SectionNav inViewSection={inViewSection} />
    </div>
  );
};

export default React.memo(Home);
