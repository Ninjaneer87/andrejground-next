import React from "react";
import { Grid, Box, Container, Stack } from "@mui/material";
import Heading from "@/components/UI/Heading";
import { List, ListItem } from "@mui/material";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Image from "next/future/image";
import BlurIn from "@/components/UI/BlurIn";
import { HomeSectionProps, registerHomeSection } from "pages";

const reactLogo = "/img/react-logo.webp";
const angularLogo = "/img/angular-logo.png";
const sassLogo = "/img/sass-logo.png";
const tsLogo = "/img/ts-logo.png";

const mainTools = [
  {
    label: "React",
    logo: reactLogo,
  },
  {
    label: "Angular",
    logo: angularLogo,
  },
  {
    label: "TypeScript",
    logo: tsLogo,
  },
  {
    label: "Sass",
    logo: sassLogo,
  },
];

const moreTools = [
  "Next JS",
  "Redux",
  "Redux Saga",
  "Material UI",
  "Angular Material",
  "RxJS",
  "Jest",
  "Express",
  "MongoDB",
];

const Toolbox = ({ setInViewSection }: HomeSectionProps) => {
  const {
    ref: scrollRef,
    inView: scrollInView,
    entry,
  } = useInView({
    rootMargin: "-50%",
  });

  useEffect(() => {
    if (entry) registerHomeSection("toolbox", entry.target);
  }, [entry]);

  useEffect(() => {
    if (scrollInView) setInViewSection("toolbox");
  }, [scrollInView, setInViewSection]);

  return (
    <section
      className="flex text-center items-center min-h-screen relative lg:p-4"
      ref={scrollRef}
    >
      <Container maxWidth="xl">
        <Box width="100%" padding="30px 0">
          <BlurIn>
            <Heading text="Toolbox" />
          </BlurIn>

          <Grid container justifyContent="center" spacing={5}>
            <Grid item xs={12} md={6} className="mb-[1em]">
              <div className="max-w-[400px] my-0 mx-auto font-normal text-xl rounded-[2rem] sm:p-[2rem_1rem] sm:text-3xl">
                <BlurIn>Main tools</BlurIn>
                <div className="flex flex-wrap justify-center items-center gap-8 mt-12">
                  {mainTools.map((tool, i) => (
                    <BlurIn
                      key={tool.label}
                      className="text-base rounded-[20px] shadow-3d-card w-full p-4 flex-wrap flex-row basis-[30%] grow"
                      delay={i * 150}
                    >
                      <Image
                        className="block mx-auto mb-4 h-[50px] w-[50px] object-contain"
                        src={tool.logo}
                        alt="icon"
                        width={50}
                        height={50}
                      />
                      <div className="text-base">{tool.label}</div>
                    </BlurIn>
                  ))}
                </div>
              </div>
            </Grid>

            <Grid item xs={12} md={6} className="mb-[1em]">
              <div className="max-w-[700px] my-0 mx-auto font-normal text-xl rounded-[2rem] sm:p-[2rem_1rem] sm:text-3xl">
                <BlurIn>Other tools</BlurIn>
                <div className="flex flex-wrap justify-center gap-6 max-w-[500px] my-0 mt-12 mx-auto">
                  {moreTools.map((tool, i) => (
                    <BlurIn
                      delay={i * 150}
                      key={tool}
                      className="w-fit text-base rounded-xl shadow-3d-card py-3 px-4"
                    >
                      {tool}
                    </BlurIn>
                  ))}
                </div>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
};

export default React.memo(Toolbox);