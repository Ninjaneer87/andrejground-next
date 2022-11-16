import React, { useContext, useRef } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import Heading from "./../../UI/Heading";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import IconButton from "@material-ui/core/IconButton";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import ClipboardCopy from "../../UI/ClipboardCopy";
import Button3D from "../../UI/Button3D";
import ThemeContext from "../../../context/themeContext";
import BlurIn from "../../UI/BlurIn";

const bgImage = "/img/bg4.webp";

const useStyles = makeStyles((theme) => ({
  contactInfo: {
    display: "flex",
    textAlign: "center",
    alignItems: "center",
    minHeight: "100vh",
    position: "relative",
    color: theme.palette.custom.textColor,
    [theme.breakpoints.up(600)]: {
      padding: theme.spacing(3),
    },
  },
  gridItem: {
    marginBottom: "1em",
  },
  icon: {
    color: theme.palette.custom.textColor,
    padding: 10,
    marginRight: 10,
    width: 25,
    height: 25,
    borderRadius: "100vh",
    border: `1px solid ${theme.palette.custom.accent}`,
    boxShadow: theme.palette.custom.cardBoxShadow,
    [theme.breakpoints.up(450)]: {
      marginRight: 20,
    },
    [theme.breakpoints.up(600)]: {
      width: 40,
      height: 40,
      padding: 20,
      marginRight: 30,
    },
    [theme.breakpoints.up(960)]: {
      marginRight: 50,
    },
  },
  socialIcon: {
    width: "50px !important",
    height: "50px !important",
    padding: "20px",
    color: theme.palette.custom.textColor,
    transition: `color ${theme.transitions.duration.short}ms ease-in-out`,
    "&:hover": {
      color: theme.palette.custom.accent,
    },
  },
  divider: {
    backgroundColor: theme.palette.custom.accent,
    boxShadow: "0px 10px 20px #000000be",
    margin: "20px 0",
    width: "100%",
  },
  emailLink: {
    transition: `color ${theme.transitions.duration.short}ms ease-in-out`,
    "&:hover": {
      color: theme.palette.custom.accent,
    },
  },
}));

const ContactInfo = ({ setActiveSection, setRefs }) => {
  const classes = useStyles();
  const emailRef = useRef(null);
  const { darkMode } = useContext(ThemeContext);

  const {
    ref: scrollRef,
    inView: scrollInView,
    entry,
  } = useInView({
    rootMargin: "-50%",
  });

  useEffect(() => {
    if (scrollInView) setActiveSection("contact");
  }, [scrollInView, setActiveSection]);

  useEffect(() => {
    if (entry) setRefs("contact", entry.target);
  }, [entry, setRefs]);

  const socials = [
    {
      link: "https://www.linkedin.com/in/andrejforgac87/",
      icon: <LinkedInIcon className={classes.socialIcon} />,
    },
    {
      link: "https://github.com/Ninjaneer87",
      icon: <GitHubIcon className={classes.socialIcon} />,
    },
    {
      link: "https://twitter.com/nindzenjer",
      icon: <TwitterIcon className={classes.socialIcon} />,
    },
  ];

  return (
    <div className={classes.bgOverlay}>
      <section className={classes.contactInfo} ref={scrollRef}>
        <Box maxWidth="90vw" width={450} padding="30px 0" margin="0 auto">
          <BlurIn>
            <Heading text="Contact info" />
          </BlurIn>
          <List>
            <BlurIn>
              <ListItem disableGutters style={{ marginBottom: 20 }}>
                <ListItemIcon>
                  <LocationOnOutlinedIcon
                    classes={{ root: classes.icon }}
                    fontSize="large"
                  />
                </ListItemIcon>
                <ListItemText>
                  <Typography
                    style={{ fontWeight: 200, marginBottom: 10 }}
                    variant="h4"
                  >
                    Town, State
                  </Typography>
                  <Typography style={{ fontWeight: 400 }}>
                    Apatin, Serbia
                  </Typography>
                </ListItemText>
              </ListItem>
            </BlurIn>

            <BlurIn>
              <ListItem disableGutters>
                <ListItemIcon>
                  <MailOutlineIcon
                    classes={{ root: classes.icon }}
                    fontSize="large"
                  />
                </ListItemIcon>
                <ListItemText>
                  <Typography
                    style={{ fontWeight: 200, marginBottom: 10 }}
                    variant="h4"
                  >
                    Email
                  </Typography>
                  <Typography
                    component="a"
                    href="mailto:contact@andrejground.com"
                    className={classes.emailLink}
                    style={{ fontWeight: 400, marginRight: 6 }}
                    ref={emailRef}
                  >
                    contact@andrejground.com
                  </Typography>
                  <span>
                    <ClipboardCopy
                      content="contact@andrejground.com"
                      ref={emailRef}
                    />
                  </span>
                </ListItemText>
              </ListItem>
            </BlurIn>
          </List>
          <BlurIn>
            <Divider classes={{ root: classes.divider }} />
          </BlurIn>
          <BlurIn>
            <Box display="flex" justifyContent="center">
              {socials.map((social) => (
                <IconButton
                  key={social.link}
                  edge="start"
                  aria-label="social"
                  component="a"
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </BlurIn>

          <BlurIn>
            <Link href="/contact" passHref>
              <Button3D
                fullWidth
                color={darkMode ? "secondary" : "primary"}
                endIcon={<SendOutlinedIcon />}
              >
                Send a message
              </Button3D>
            </Link>
          </BlurIn>
        </Box>
      </section>
    </div>
  );
};

export default React.memo(ContactInfo);
