import React from "react";
import { Grid, Box, Divider } from "@material-ui/core";
import { makeStyles, Container } from "@material-ui/core";
import DefaultCard from "../../cards/DefaultCard";
import Heading from "../../UI/Heading";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { useEffect, useContext } from "react";
import ThemeContext from "../../../context/themeContext";
import BlurIn from "../../UI/BlurIn";
import KeyboardIcon from "@material-ui/icons/Keyboard";
import DevicesIcon from "@material-ui/icons/Devices";
import GroupWorkIcon from "@material-ui/icons/GroupWork";

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
    color: theme.palette.custom.accent,
    display: "block",
    transform: "scale(3)",
    // transform: 'skewY(5deg)',
  },
  text: {
    margin: "1.5rem 0",
    lineHeight: 2,
    fontWeight: 400,
    textAlign: "start",
    color: theme.palette.custom.textColor,
  },
  divider: {
    backgroundColor: theme.palette.custom.accent,
    boxShadow: "0px 10px 20px #000000be",
    margin: "20px 0",
    width: "100%",
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
        <Box width="100%" padding="30px 0">
          <BlurIn>
            <Heading text="Mission" />
          </BlurIn>
          <Grid container spacing={5} justifyContent="center">
            <Grid
              item
              className={`${classes.gridItem} ${classes.translateMinusXl}`}
              xs={12}
              md={6}
              lg={4}
            >
              <BlurIn delay={150}>
                <DefaultCard maxWidth={400}>
                  <div className={classes.imageContainer}>
                    <KeyboardIcon fontSize="large" className={classes.image} />
                  </div>
                  <Divider classes={{ root: classes.divider }} />
                  <div className={classes.text}>
                    AndrejGround is about turning ideas into code. If you are
                    into any of these,
                    <br />{" "}
                    <span className="cyan">
                      <Link href="/contact">let&apos;s collaborate</Link>
                    </span>
                    .
                  </div>
                </DefaultCard>
              </BlurIn>
            </Grid>
            <Grid item className={classes.gridItem} xs={12} md={6} lg={4}>
              <BlurIn delay={300}>
                <DefaultCard maxWidth={400} >
                  <div className={classes.imageContainer}>
                    <DevicesIcon fontSize="large" className={classes.image} />
                  </div>
                  <Divider classes={{ root: classes.divider }} />
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
              </BlurIn>
            </Grid>
            <Grid
              item
              className={`${classes.gridItem} ${classes.translatePlusXl}`}
              xs={12}
              md={6}
              lg={4}
            >
              <BlurIn delay={450}>
                <DefaultCard maxWidth={400}>
                  <div className={classes.imageContainer}>
                    <GroupWorkIcon fontSize="large" className={classes.image} />
                  </div>
                  <Divider classes={{ root: classes.divider }} />
                  <div className={classes.text}>
                    The mission is to connect with likeminded people and build
                    stuff.
                    <br />
                    Onwards!
                  </div>
                </DefaultCard>
              </BlurIn>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
};

export default React.memo(Mission);
