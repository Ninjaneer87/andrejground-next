import { Box, Grid, Typography, Divider, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import React, { useContext } from "react";
import Heading from "../../UI/Heading";
import Link from "next/link";
import LinkIcon from "@material-ui/icons/Link";
import CodeIcon from "@material-ui/icons/Code";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import DefaultCard from "../../cards/DefaultCard";
import ThemeContext from "../../../context/themeContext";
import Button3D from "../../UI/Button3D";
import BlurIn from "../../UI/BlurIn";
// import { scrollTopClick } from '../../helpers/utility';

const patternImage = "/img/pattern2.webp";
const bgImage = "/img/coinland-framed.webp";

const useStyles = makeStyles((theme) => ({
  projectsRoot: {
    display: "flex",
    textAlign: "center",
    alignItems: "center",
    minHeight: "100vh",
    position: "relative",
    // boxShadow: `inset 0px 0px 20px ${theme.palette.custom.boxShadowColor}`,
    [theme.breakpoints.up(992)]: {
      padding: theme.spacing(3),
    },
  },
  bgOverlay: {
    overflow: "hidden",
    position: "relative",
    "&::after": {
      content: '""',
      // backgroundImage: `url('${patternImage}')`,
      backgroundPosition: "center",
      filter: "drop-shadow(0px 0px 1px rgba(255, 255, 255, 1))",
      opacity: 0.35,
      position: "absolute",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      transform: "scaleX(-1)",
      zIndex: -1,
    },
  },
  gridItem: {
    marginBottom: "3em",
  },
  image: {
    backgroundImage: `url('${bgImage}')`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "contain",
    height: 600,
    maxHeight: "90vw",
    filter: theme.palette.custom.imageDropShadow,
  },
  contentHolder: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  subtitle: {
    color: theme.palette.custom.textColor,
    fontWeight: 400,
    padding: theme.spacing(1),
    borderRadius: 10,
    width: "fit-content",
    minWidth: 200,
    margin: "0 auto",
    position: "relative",
    marginBottom: "20px",
    "&::after": {
      content: '""',
      position: "absolute",
      top: "100%",
      left: "50%",
      transform: "translateX(-50%)",
      width: "50px",
      maxWidth: "100%",
      height: "2px",
      backgroundColor: theme.palette.custom.accent,
    },
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
  divider: {
    backgroundColor: theme.palette.custom.accent,
    boxShadow: "0px 10px 20px #000000be",
    margin: "20px 0",
    width: "100%",
  },
  text: {
    color: theme.palette.custom.textColor,
    margin: "20px 0",
    textAlign: "start",
    lineHeight: 1.7,
  },
}));

const Projects = ({ setActiveSection, setRefs }) => {
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
    if (scrollInView) setActiveSection("projects");
  }, [scrollInView, setActiveSection]);

  useEffect(() => {
    if (entry) setRefs("projects", entry.target);
  }, [entry, setRefs]);

  return (
    <div className={classes.bgOverlay}>
      <section className={classes.projectsRoot} ref={scrollRef}>
        <Container maxWidth="xl">
          <Box width="100%" padding="30px 0">
            <BlurIn>
              <Heading text="Projects" />
            </BlurIn>
            <Grid container spacing={5} justifyContent="flex-end">
              <Grid item xs={12} md={6} className={classes.contentHolder}>
                <Box maxWidth={500} height="fit-content">
                  <BlurIn>
                    <Typography
                      component="h3"
                      variant="h5"
                      className={classes.subtitle}
                    >
                      COINLAND
                    </Typography>
                  </BlurIn>

                  <BlurIn>
                    <Typography className={classes.text}>
                      This practice project was intended to connect client side
                      app to a public API. Data comes from{" "}
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://coinmarketcap.com/"
                        className="cyan"
                      >
                        coinmarketcap.com
                      </a>
                      .
                      <br />
                      <br />
                      <small>* AndrejGround&apos;s first ever project</small>
                    </Typography>
                  </BlurIn>

                  <BlurIn>
                    <ButtonGroup
                      aria-label="outlined primary button group"
                      fullWidth
                      style={{ gap: 20 }}
                    >
                      <Button3D
                        variant="text"
                        component="a"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ninjaneer87.github.io/coinland/"
                        endIcon={<LinkIcon />}
                        color={`${darkMode ? "secondary" : "primary"}`}
                      >
                        Live site
                      </Button3D>
                      <Button3D
                        variant="text"
                        component="a"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/Ninjaneer87/coinland/"
                        endIcon={<CodeIcon />}
                        color={`${darkMode ? "secondary" : "primary"}`}
                      >
                        Code
                      </Button3D>
                    </ButtonGroup>
                  </BlurIn>

                  <BlurIn>
                    <Divider classes={{ root: classes.divider }} />
                  </BlurIn>

                  <BlurIn>
                    <Link href="/portfolio" passHref>
                      <Button3D
                        variant="text"
                        fullWidth
                        size="large"
                        component="a"
                        color={`${darkMode ? "secondary" : "primary"}`}
                        endIcon={<ArrowRightAltIcon />}
                      >
                        More projects
                      </Button3D>
                    </Link>
                  </BlurIn>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <BlurIn delay={450}>
                  <div className={classes.image} />
                </BlurIn>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </section>
    </div>
  );
};

export default React.memo(Projects);
