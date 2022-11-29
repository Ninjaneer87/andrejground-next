import React, { useContext, useRef } from "react";
import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import Heading from "@/components/UI/Heading";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import IconButton from "@mui/material/IconButton";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import ClipboardCopy from "@/components/UI/ClipboardCopy";
import Button3D from "@/components/UI/Button3D";
import ThemeContext, { ThemeContextType } from "context/themeContext";
import BlurIn from "@/components/UI/BlurIn";
import StyledDivider from "@/components/UI/StyledDivider";
import { HomeSectionProps, registerHomeSection } from "pages";


const socials = [
  {
    link: "https://www.linkedin.com/in/andrejforgac87/",
    icon: <LinkedInIcon fontSize="large" />,
  },
  {
    link: "https://github.com/Ninjaneer87",
    icon: <GitHubIcon fontSize="large" />,
  },
  {
    link: "https://twitter.com/nindzenjer",
    icon: <TwitterIcon fontSize="large" />,
  },
];

const ContactInfo = ({ setInViewSection }: HomeSectionProps) => {
  const emailRef = useRef<HTMLAnchorElement>(null);
  const { dark } = useContext(ThemeContext) as ThemeContextType;
  const { ref: scrollRef, inView: scrollInView, entry } = useInView({ rootMargin: "-50%" });

  useEffect(() => {
    if (scrollInView) setInViewSection("contact");
  }, [scrollInView, setInViewSection]);

  useEffect(() => {
    if (entry) registerHomeSection("contact", entry.target);
  }, [entry]);

  return (
    <section
      className="flex text-center items-center min-h-screen relative sm:p-5"
      ref={scrollRef}
    >
      <Box maxWidth="90vw" width={450} padding="30px 0" margin="0 auto">
        <BlurIn>
          <Heading text="Contact info" />
        </BlurIn>
        <List>
          <BlurIn>
            <ListItem disableGutters className="mb-5">
              <ListItemIcon>
                <Avatar className="bg-transparent text-themed-text p-7 sm:p-[35px] mr-2 sm:mr-4 border-[1px] border-solid border-primary shadow-3d-card">
                  <LocationOnOutlinedIcon fontSize="large" />
                </Avatar>
              </ListItemIcon>
              <ListItemText>
                <Typography
                  className="font-extralight mb-5"
                  variant="h4"
                >
                  Town, State
                </Typography>
                <Typography className="font-normal">
                  Apatin, Serbia
                </Typography>
              </ListItemText>
            </ListItem>
          </BlurIn>

          <BlurIn>
            <ListItem disableGutters>
              <ListItemIcon>
                <Avatar className="bg-transparent text-themed-text p-7 sm:p-[35px] mr-2 sm:mr-4 border-[1px] border-solid border-primary shadow-3d-card">
                  <MailOutlineIcon fontSize="large" />
                </Avatar>
              </ListItemIcon>
              <ListItemText>
                <Typography
                  className="font-extralight mb-5"
                  variant="h4"
                >
                  Email
                </Typography>
                <Typography
                  component="a"
                  href="mailto:contact@andrejground.com"
                  className="transition-colors duration-150 ease-in-out hover:text-primary font-normal mr-[6px]"
                  ref={emailRef}
                >
                  contact@andrejground.com
                </Typography>
                <span>
                  <ClipboardCopy
                    content="contact@andrejground.com"
                    contentElement={emailRef.current}
                  />
                </span>
              </ListItemText>
            </ListItem>
          </BlurIn>
        </List>
        <BlurIn>
          <StyledDivider />
        </BlurIn>
        <BlurIn>
          <Box display="flex" justifyContent="center" gap={4} my={3}>
            {socials.map((social) => (
              <IconButton
                key={social.link}
                edge="start"
                aria-label="social"
                component="a"
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                size="large"
                className="transition-colors duration-150 ease-in-out text-themed-text hover:text-primary"
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
              component="a"
              color={dark ? "primary" : "secondary"}
              endIcon={<SendOutlinedIcon />}
            >
              Send a message
            </Button3D>
          </Link>
        </BlurIn>
      </Box>
    </section>
  );
};

export default React.memo(ContactInfo);
