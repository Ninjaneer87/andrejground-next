import { FormControls } from "@/types/form-controls.type";
import { Validators } from "./Validators";
import LocalLibraryOutlinedIcon from "@mui/icons-material/LocalLibraryOutlined";
import ImportantDevicesOutlinedIcon from "@mui/icons-material/ImportantDevicesOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import UiSelect from "@/components/pages/ui/UiSelect/UiSelect";
import { ReactNode } from "react";
import { UiItem } from "@/types/ui-item.type";

export const EMAIL_REGEX = /^\w+([.-]?\w+)+@\w+([.:]?\w+)+(\.[a-zA-Z0-9]{2,})+$/;

export const socials = [
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
    link: "https://twitter.com/AndrejGround",
    icon: <TwitterIcon fontSize="large" />,
  },
];

export const navItems = [
  {
    id: 1,
    text: "HOME",
    path: "/",
    exact: true,
  },
  {
    id: 2,
    text: "PROJECTS",
    path: "/projects",
    exact: false,
  },
  {
    id: 3,
    text: "UI",
    path: "/ui",
    exact: false,
  },
  {
    id: 4,
    text: "BLOG",
    path: "/blog",
    exact: false,
  },
  {
    id: 5,
    text: "ABOUT",
    path: "/about",
    exact: false,
  },
  {
    id: 6,
    text: "CONTACT",
    path: "/contact",
    exact: false,
  },
];

export const contactFormInputs: FormControls = {
  fullName: {
    elementType: "text-input",
    label: "Full name",
    value: "",
    validators: [Validators.required],
    validationErrorMessage: "",
    required: true,
    valid: false,
    touched: false,
  },
  email: {
    elementType: "text-input",
    label: "Your email",
    value: "",
    validators: [Validators.required, Validators.email],
    validationErrorMessage: "",
    required: true,
    valid: false,
    touched: false,
  },
  subject: {
    elementType: "text-input",
    label: "Subject",
    value: "",
    validators: [Validators.required],
    validationErrorMessage: "",
    required: true,
    valid: false,
    touched: false,
  },
  message: {
    elementType: "text-area",
    label: "Message",
    value: "",
    validators: [Validators.required],
    validationErrorMessage: "",
    required: true,
    valid: false,
    touched: false,
  },
};

export const aboutValues = [
  {
    title: "Be Resourceful",
    content: (
      <>
        Go beyond the surface to gain a deep understanding of every concept,
        problem or a paradigm
        <br />
        <br />
        Find a way to get things done with what&apos;s available, but don&apos;t
        be shy about asking for help when it&apos;s needed
        <br />
        <br />
        Great ideas can come from anywhere, regardless of seniority and
        experience
      </>
    ),
  },
  {
    title: "Stay Determined",
    content: (
      <>
        Never give up, carry each other through hard times
        <br />
        <br />
        Understand that building oneself is a monumental task, but love every
        minute of it
        <br />
        <br />
        Celebrate milestones, recharge, and get back to work
      </>
    ),
  },
  {
    title: "Dream Big",
    content: (
      <>
        Think big, take smart risks, and do things that have never been done
        before
        <br />
        <br />
        Do not be afraid to make tough choices that align with long term
        objectives
        <br />
        <br />
        Know that it always seems impossible until it&apos;s done
      </>
    ),
  },
  {
    title: "Take Ownership and Be Decisive",
    content: (
      <>
        Feel empowered to take initiative, make the right decisions, and act as
        the owner
        <br />
        <br />
        Be committed to protecting your environment and seek to bring the best
        people in it
        <br />
        <br />
        Aim to surprise and inspire with the quality and speed of decision
        making
      </>
    ),
  },
  {
    title: "Remain Humble",
    content: (
      <>
        Don&apos;t seek the limelight, focus on doing what is best for the
        company and the users
        <br />
        <br />
        Leave the ego at the door and learn from mistakes, know that we are
        stronger as a team
        <br />
        <br />
        Think twice before spending, but be aggressive when it comes to
        investing in what matters
      </>
    ),
  },
];

export const aboutStats = [
  {
    icon: <LocalLibraryOutlinedIcon color="primary" fontSize="large" className="scale-[1.5]" />,
    number: "4+",
    desc: "years into frontend development",
  },
  {
    icon: <ImportantDevicesOutlinedIcon color="primary" fontSize="large" className="scale-[1.5]" />,
    number: "3+",
    desc: "years of professional experience",
  },
  {
    icon: <VideoLibraryOutlinedIcon color="primary" fontSize="large" className="scale-[1.5]" />,
    number: "300+",
    desc: "hours of courses and tutorials",
  },
];

export const uiItems: UiItem[] = [
  {
    path: 'ui-select',
    title: '< Select  />',
    component: <UiSelect />
  },
];