import React, { useRef, useState, useEffect } from "react";
import { Container, makeStyles } from "@material-ui/core";
import Heading from "../../UI/Heading";
import ValuesTabs from "./ValuesTabs";
import ValuesTabsMobile from "./ValuesTabsMobile";

const values = [
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

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexFlow: "column",
    alignItems: "center",
    justifyContent: "center",
    // textAlign: 'center',
    minHeight: "70vh",
    paddingBottom: 40,
  },
  subTitle: {
    maxWidth: 600,
    color: theme.palette.custom.textColor,
    fontWeight: 500,
  },
  text: {
    color: theme.palette.custom.textColor,
    textAlign: "justify",
    padding: 10,
    fontWeight: 500,
  },
}));

const Values = ({setRefs}) => {
  const classes = useStyles();
  const ref = useRef(null);
  const [refLoaded, setRefLoaded] = useState(false);

  useEffect(() => {
    if (!refLoaded) {
      if (ref.current) {
        setRefs("values", ref);
      }
      setRefLoaded(true);
    }
  }, [refLoaded, setRefs]);

  return (
    <Container ref={ref} maxWidth="lg" className={`${classes.root} fadeIn`}>
      <Heading text="Values & philosophy" />
      <ValuesTabs values={values} />
      <ValuesTabsMobile values={values} />
    </Container>
  );
};

export default Values;
