import { useRef, useCallback } from 'react';

export function useSections<T extends string>() {
  const sections = useRef({} as Record<T, Element>);

  const addSection = useCallback((sectionName: T, ref: Element) => {
    if (!sections.current[sectionName])
      sections.current[sectionName] = ref;
  }, []);

  const scrollToSection = useCallback((sectionName: T) => {
    const section = sections.current[sectionName];
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return { sections, addSection, scrollToSection };
}