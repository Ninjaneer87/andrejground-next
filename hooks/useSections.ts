import { useRef, useCallback } from 'react';

export function useSections<T extends string>() {
  const sections = useRef({} as Record<T, Element>);

  const addSection = useCallback((sectionName: T, section: Element) => {
    if (!sections.current[sectionName])
      sections.current[sectionName] = section;
  }, []);

  const scrollToSection = useCallback((sectionName: T) => {
    const section = sections.current[sectionName];
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return { sections, addSection, scrollToSection };
}