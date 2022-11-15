import React from "react";
import { Grid, Box } from "@material-ui/core";
import { makeStyles, Container } from "@material-ui/core";
import DefaultCard from "../../cards/DefaultCard";
import Heading from "../../UI/Heading";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { useEffect, useContext } from "react";
import Image from "next/image";
import ThemeContext from "../../../context/themeContext";

const aboutImage = "/img/aboutme.svg";
const uiUxImage = "/img/ui-ux.svg";
const goalImage = "/img/final-goal.svg";

const useStyles = makeStyles((theme) => ({
  missionRoot: {
    display: "flex",
    textAlign: "center",
    alignItems: "center",
    minHeight: "100vh",
    position: "relative",
    paddingBottom: 100,
    zIndex: 1,
    justifyContent: "center",
    [theme.breakpoints.up(992)]: {
      padding: theme.spacing(3),
    },
  },
  gridItem: {
    marginBottom: "3em",
  },
  translateMinusXl: {
    [theme.breakpoints.up(1300)]: {
      transform: "translateY(-100px)",
    },
  },
  translatePlusXl: {
    [theme.breakpoints.up(1300)]: {
      transform: "translateY(+100px)",
    },
  },
  imageContainer: {
    height: 150,
    width: 105,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto",
    position: "relative",
  },
  image: {
    width: "100%",
    display: "block",
    filter: `drop-shadow(0px 0px 4px ${theme.palette.custom.cyan})`,
    // transform: 'skewY(5deg)',
  },
  text: {
    margin: "1.5rem 0",
    lineHeight: 2,
    fontWeight: 400,
    textAlign: "center",
    color: theme.palette.custom.textColor,
  },
}));

const Mission = ({ setActiveSection, setRefs }) => {
  const classes = useStyles();
  const { darkMode } = useContext(ThemeContext);

  const {
    ref: scrollRef,
    inView: scrollInView,
    entry,
  } = useInView({
    rootMargin: "-50%",
  });

  useEffect(() => {
    if (scrollInView) setActiveSection("mission");
  }, [scrollInView, setActiveSection]);

  useEffect(() => {
    if (entry) setRefs("mission", entry.target);
  }, [entry, setRefs]);

  return (
    <section className={classes.missionRoot} ref={scrollRef}>
      <Container maxWidth="xl">
        <Box width="100%" padding="30px 0" className="blurIn">
          <Heading text="Mission" />
          <Grid container spacing={5} justifyContent="center">
            <Grid
              item
              className={`${classes.gridItem} ${classes.translateMinusXl}`}
              xs={12}
              md={6}
              lg={4}
            >
              <DefaultCard maxWidth={400}>
                <div className={classes.imageContainer}>
                  <Image
                    className={classes.image}
                    layout="fill"
                    src={aboutImage}
                    alt="icon"
                  />
                </div>
                <div className={classes.text}>
                  AndrejGround is about turning ideas into code. If you are into
                  any of these,
                  <br />{" "}
                  <span className="cyan">
                    <Link href="/contact">let&apos;s collaborate</Link>
                  </span>
                  .
                </div>
              </DefaultCard>
            </Grid>
            <Grid item className={classes.gridItem} xs={12} md={6} lg={4}>
              <DefaultCard maxWidth={400}>
                <div className={classes.imageContainer}>
                  <Image
                    className={classes.image}
                    layout="fill"
                    src={uiUxImage}
                    alt="icon"
                  />
                </div>
                <div className={classes.text}>
                  Tendencies:{" "}
                  <strong className={`${darkMode ? "" : "grey"}`}>
                    clean code
                  </strong>{" "}
                  in{" "}
                  <strong className={`${darkMode ? "" : "grey"}`}>
                    latest technologies
                  </strong>
                  ,{" "}
                  <strong className={`${darkMode ? "" : "grey"}`}>
                    smooth UX
                  </strong>{" "}
                  and{" "}
                  <strong className={`${darkMode ? "" : "grey"}`}>
                    clean UI
                  </strong>{" "}
                  on all screens and devices.
                </div>
              </DefaultCard>
            </Grid>
            <Grid
              item
              className={`${classes.gridItem} ${classes.translatePlusXl}`}
              xs={12}
              md={6}
              lg={4}
            >
              <DefaultCard maxWidth={400}>
                <div className={classes.imageContainer}>
                  <Image
                    className={classes.image}
                    layout="fill"
                    src={goalImage}
                    alt="icon"
                  />
                </div>
                <div className={classes.text}>
                  The mission is to connect with likeminded people and build
                  stuff.
                </div>
              </DefaultCard>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
};

export default React.memo(Mission);
