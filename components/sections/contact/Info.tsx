import React, { useRef } from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import {
  Avatar,
  Container,
  Grid,
  Box,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import Heading from "@/components/UI/Heading";
import ClipboardCopy from "@/components/UI/ClipboardCopy";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import BlurIn from "@/components/UI/BlurIn";
// import WorkOutlineIcon from "@mui/icons-material/WorkOutline";

const infoItems = [
  {
    id: 0,
    label: "Located at",
    text: "Serbia",
    icon: <LocationOnOutlinedIcon fontSize="large" />,
  },
  {
    id: 1,
    label: "Email",
    text: "contact@andrejground.com",
    icon: <MailOutlineIcon fontSize="large" />,
  },
  {
    id: 2,
    label: "Current status",
    text: "Available",
    icon: <CheckCircleOutlineOutlinedIcon fontSize="large" />,
  },
];

const socialIconClassName = "w-[50px] h-[50px] p-4 transition-colors duration-150 ease-in-out hover:text-primary";
const socials = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/andrejforgac87/",
    icon: <LinkedInIcon fontSize="large" />,
  },
  {
    name: "GitHub",
    link: "https://github.com/Ninjaneer87",
    icon: <GitHubIcon fontSize="large" />,
  },
  {
    name: "Twitter",
    link: "https://twitter.com/nindzenjer",
    icon: <TwitterIcon fontSize="large" />,
  },
];

const Info = () => {
  const emailRef = useRef(null);

  return (
    <Container
      maxWidth="lg"
      className="pt-[150px] pb-[50px] m-auto min-h-screen"
    >
      <BlurIn>
        <Heading text="Let's connect" />
      </BlurIn>
      
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        spacing={5}
        mb={5}
      >
        {infoItems.map((item, i) => (
          <Grid key={item.id} item xs={12} md={6} lg={4}>
            <BlurIn delay={i * 150}>
              <Box height="100%" className="shadow-3d-card p-4 py-14">
                <div className="flex flex-col items-center justify-between min-h-[200px]">
                  <Typography className="mb-[40px] font-normal" variant="h6">
                    {item.label}
                  </Typography>

                  <Avatar className="bg-transparent text-themed-text p-[40px] mb-[30px] border-[1px] border-solid border-primary shadow-3d-card">
                    {item.icon}
                  </Avatar>

                  {item.label === "Email" ? (
                    <Typography
                      component="div"
                      ref={emailRef}
                      className="font-normal text-center"
                    >
                      <a
                        className="hover:text-primary mr-[6px]"
                        href="mailto:contact@andrejground.com"
                      >
                        {item.text}
                      </a>
                      <ClipboardCopy
                        contentElement={emailRef.current}
                        content={item.text}
                      />
                    </Typography>
                  ) : (
                    <Typography className="font-normal text-center">
                      {item.text}
                    </Typography>
                  )}
                </div>
              </Box>
            </BlurIn>
          </Grid>
        ))}
      </Grid>
      <Grid container justifyContent="center" spacing={5}>
        <Grid item xs={12} md={6} lg={12}>
          <BlurIn delay={450}>
            <Box display="flex" justifyContent="center" className="shadow-3d-card px-5 py-10 gap-8 sm:gap-12">
              {socials.map((social) => (
                <IconButton
                  key={social.name}
                  edge="start"
                  aria-label="social"
                  component="a"
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="large"
                  className="text-themed-text hover:text-primary scale-150"
                >
                  <Tooltip title={social.name} arrow>
                    {social.icon}
                  </Tooltip>
                </IconButton>
              ))}
            </Box>
          </BlurIn>
        </Grid>
      </Grid>

    </Container>
  );
};

export default Info;
