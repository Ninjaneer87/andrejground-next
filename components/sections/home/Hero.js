import React, { useContext } from "react";
import { Container, Grid, Box } from "@material-ui/core";
import Link from "next/link";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import Button3D from "../../UI/Button3D";
import ThemeContext from "../../../context/themeContext";
import BlurIn from "../../UI/BlurIn";

const useStyles = makeStyles((theme) => ({
  hero: {
    display: "flex",
    textAlign: "center",
    alignItems: "center",
    minHeight: "100vh",
    overflow: "hidden",
    position: "relative",
    zIndex: 1,
    color: theme.palette.custom.textColor,
    padding: "100px 0",
  },
  welcomeIntro: {
    fontSize: "clamp(1.5rem, 3vw, 40px)",
    fontWeight: "100",
    lineHeight: "1.3",
    textAlign: "center",
    marginBottom: "30px",
    [theme.breakpoints.up(768)]: {
      marginBottom: "50px",
    },
    [theme.breakpoints.up(992)]: {},
    [theme.breakpoints.up(1400)]: {
      textAlign: "start",
      // width: "20vw",
    },
    [theme.breakpoints.up(2000)]: {
      textAlign: "start",
      width: 500,
    },
  },
  welcomeTitle: {
    fontWeight: 100,
    fontSize: "9vw",
    textAlign: "center",
    textTransform: "uppercase",
    lineHeight: 1.1,
    position: "relative",
    marginBottom: "30px",
    [theme.breakpoints.up(768)]: {
      fontSize: "6vw",
      fontSize: "clamp(26px, 20vw, 70px)",
    },
    [theme.breakpoints.up(960)]: {},
    [theme.breakpoints.up(1400)]: {
      textAlign: "start",
      width: "65vw",
      fontSize: "clamp(50px, 4.2vw, 80px)",
    },
    [theme.breakpoints.up(2000)]: {
      textAlign: "start",
      width: 800,
      fontSize: 80,
    },
    "&::after": {
      content: "attr(data-text)",
      width: "inherit",
      position: "absolute",
      left: 0,
      right: 0,
      top: "95%",
      color: "transparent",
      background: "transparent",
      [theme.breakpoints.up(1280)]: {
        color: theme.palette.custom.reflectionColor,
        transform: "scaleY(-1)",
        lineHeight: 1.1,
        backgroundClip: "text",
        "-webkit-background-clip": "text",
        filter: "blur(3px)",
        background:
          "linear-gradient(0deg,hsla(0,0%,100%,.721),transparent 50%)",
      },
    },
  },
}));
const Hero = ({ setActiveSection, setRefs }) => {
  const { darkMode } = useContext(ThemeContext);
  const classes = useStyles();

  const {
    ref: scrollRef,
    inView: scrollInView,
    entry,
  } = useInView({
    rootMargin: "-50%",
  });

  useEffect(() => {
    if (scrollInView) setActiveSection("home");
  }, [scrollInView, setActiveSection]);

  useEffect(() => {
    if (entry) setRefs("home", entry.target);
  }, [entry, setRefs]);

  return (
    <section className={classes.hero} ref={scrollRef}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item lg={8}>
            <BlurIn>
              <div className={classes.welcomeIntro}>
                One stop for awesome front-end solutions.
              </div>
            </BlurIn>

            <BlurIn delay={150}>
              <div
                className={classes.welcomeTitle}
                data-text="WELCOME TO THE ANDREJGROUND"
              >
                Welcome to the <span className="cyan">Andrej</span>Ground
              </div>
            </BlurIn>
          </Grid>
          <Grid item xs={12} lg={4}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
              height="100%"
            >
              <BlurIn delay={300} fullWidth>
                <Link href="/portfolio" passHref>
                  <Button3D
                    fullWidth
                    // variant="outlined"
                    color={darkMode ? "secondary" : "primary"}
                    style={{ marginBottom: "20px", maxWidth: "500px" }}
                    component="a"
                    endIcon={<ArrowRightAltIcon />}
                    // onClick={scrollTopClick}
                  >
                    PROJECTS
                  </Button3D>
                </Link>
              </BlurIn>

              <BlurIn delay={450} fullWidth>
                <Link href="/contact" passHref>
                  <Button3D
                    fullWidth
                    // variant="contained"
                    color={darkMode ? "secondary" : "primary"}
                    style={{ maxWidth: "500px" }}
                    component="a"
                    endIcon={<ArrowRightAltIcon />}
                    // onClick={scrollTopClick}
                  >
                    Let&apos;s build
                  </Button3D>
                </Link>
              </BlurIn>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default React.memo(Hero);
