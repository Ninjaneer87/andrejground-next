import { FormControls } from "@/types/form-controls.type";
import { Validators } from "./Validators";
import LocalLibraryOutlinedIcon from "@mui/icons-material/LocalLibraryOutlined";
import ImportantDevicesOutlinedIcon from "@mui/icons-material/ImportantDevicesOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";

export const EMAIL_REGEX = /^\w+([.-]?\w+)+@\w+([.:]?\w+)+(\.[a-zA-Z0-9]{2,})+$/;

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
    icon: <LocalLibraryOutlinedIcon color="primary" fontSize="large" className="scale-[1.5]"/>,
    number: "4+",
    desc: "years into frontend development",
  },
  {
    icon: <ImportantDevicesOutlinedIcon color="primary" fontSize="large" className="scale-[1.5]"/>,
    number: "3+",
    desc: "years of professional experience",
  },
  {
    icon: <VideoLibraryOutlinedIcon color="primary" fontSize="large" className="scale-[1.5]"/>,
    number: "300+",
    desc: "hours of courses and tutorials",
  },
];