import React, { useRef } from "react";
import {
  Box,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Typography,
  Button,
} from "@material-ui/core";
import Heading from "../../UI/Heading";
// import MenuBookIcon from '@material-ui/icons/MenuBook';
import LocalLibraryOutlinedIcon from "@material-ui/icons/LocalLibraryOutlined";
import ImportantDevicesOutlinedIcon from "@material-ui/icons/ImportantDevicesOutlined";
import VideoLibraryOutlinedIcon from "@material-ui/icons/VideoLibraryOutlined";
import { useCallback } from "react";
import DefaultCard from "../../cards/DefaultCard";
import BlurIn from "../../UI/BlurIn";

const logoImg = "/img/AG.png";

const useStyles = makeStyles((theme) => ({
  intro: {
    paddingTop: 70,
    display: "flex",
    flexFlow: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    minHeight: "100vh",
  },
  subTitle: {
    maxWidth: 600,
    color: theme.palette.custom.textColor,
    fontWeight: 500,
  },
  logoImage: {
    backgroundImage: `url(${logoImg})`,
    backgroundPosition: "center",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    width: 200,
    height: 200,
    padding: 30,
    margin: "80px 0",
    boxSizing: "border-box",
    borderRadius: "100vh",
    position: "relative",
    boxShadow: theme.palette.custom.cardBoxShadow,
  },
  list: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    gap: "1.5rem",
    [theme.breakpoints.down(956)]: {
      flexWrap: "wrap",
    },
  },
  listItem: {
    textAlign: "center",
    color: theme.palette.custom.textColor,
    maxWidth: 250,
    padding: "30px 16px",
  },
  icon: {
    justifyContent: "center",
    color: theme.palette.custom.accent,
    marginBottom: 30,
    "& svg": {
      fontSize: "3rem",
    },
  },
}));

const stats = [
  {
    icon: <LocalLibraryOutlinedIcon fontSize="large" />,
    number: "4+",
    desc: "years into frontend development",
  },
  {
    icon: <ImportantDevicesOutlinedIcon fontSize="large" />,
    number: "3+",
    desc: "years of professional experience",
  },
  {
    icon: <VideoLibraryOutlinedIcon fontSize="large" />,
    number: "300+",
    desc: "hours of courses and tutorials",
  },
];
const Intro = ({ refs }) => {
  const classes = useStyles();

  const goToAndrej = useCallback(() => {
    if (refs["aboutme"].current)
      refs["aboutme"].current.scrollIntoView({ behavior: "smooth" });
  }, [refs]);

  return (
    <Container maxWidth="xl" className={classes.intro}>
      <BlurIn>
        <Heading text="What is AndrejGround?" />
      </BlurIn>
      <BlurIn delay={150}>
        <Typography variant="h6" className={classes.subTitle}>
          AndrejGround is{" "}
          <span
            className="cyan"
            style={{ cursor: "pointer" }}
            onClick={goToAndrej}
          >
            Andrej
          </span>
          &apos;s playground for ideas, front-end features and functionalities,
          as well as a window to his portfolio.
        </Typography>
      </BlurIn>

      <BlurIn delay={300}>
        <Box className={classes.logoImage} />
      </BlurIn>
      <List className={classes.list}>
        {stats.map((stat, i) => (
          <BlurIn delay={i * 150} key={stat.number}>
            <DefaultCard padding={0}>
              <ListItem className={classes.listItem}>
                <ListItemText>
                  <ListItemIcon classes={{ root: classes.icon }}>
                    {stat.icon}
                  </ListItemIcon>
                  <Typography variant="h4">{stat.number}</Typography>
                  <Typography>{stat.desc}</Typography>
                </ListItemText>
              </ListItem>
            </DefaultCard>
          </BlurIn>
        ))}
      </List>
    </Container>
  );
};
Intro.displayName = "Intro";

export default Intro;
