import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { ButtonBase, Tooltip, useTheme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import ClientOnlyPortal from "../../helpers/ClientOnlyPortal";
import ThemeContext from "../../../context/themeContext";
import ArrowBackIosOutlinedIcon from "@material-ui/icons/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@material-ui/icons/ArrowForwardIosOutlined";
import { useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  sectionNavRoot: ({ darkMode }) => {
    return {
      color: theme.palette.custom.textColor,
      padding: 10,
      minHeight: 150,
      backgroundColor: theme.palette.custom.backgroundColor,
      position: "fixed",
      top: "50%",
      right: 0,
      transform: "translateY(-50%)",
      display: "flex",
      flexFlow: "column",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "6px 0 0 6px",
      width: 58,
      transition: `all ${theme.transitions.duration.short}ms ease 0s`,
      zIndex: 1,
      opacity: 0.85,
      "&::after": {
        content: '""',
        position: "absolute",
        width: "calc(100% - 25px)",
        left: "var(--left)",
        top: 2,
        height: "var(--height)",
        zIndex: -1,
        borderRadius: "6px",
        transition: `all ${theme.transitions.duration.short}ms ease 0s`,
        transform: "translateY(var(--top))",
        boxShadow: theme.palette.custom.button3DShadow,
      },
    };
  },
  expandedRoot: {
    width: "180px !important",
    opacity: '1 !important',
    [theme.breakpoints.down(1100)]: {
      opacity: 1,
    },
  },

  item: {
    color: theme.palette.custom.textColor,
    padding: "12px 6px",
    cursor: "pointer",
    width: "100%",
    borderRadius: "6px 0 0 6px",
    position: "relative",
    display: "flex",
    justifyContent: "flex-start",
    [theme.breakpoints.up(600)]: {
      padding: "16px 6px",
    },
  },
  sectionName: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    pointerEvents: "none",
    opacity: 0,
    transition: "opacity 250ms ease-in-out",
  },
  expanded: {
    opacity: 1,
  },
}));
const initialBox = {
  width: 0,
  left: 0,
  top: 0,
  height: 0,
};
const SectionNav = ({ sections, activeSection, activateSection }) => {
  const activeRef = useRef(null);
  const [mounting, setMounting] = useState(true);
  const [box, setBox] = useState(initialBox);
  const { darkMode } = useContext(ThemeContext);
  const classes = useStyles({ darkMode });
  const [expanded, setExpanded] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down(1100));

  const setBoxToActiveRef = useCallback(() => {
    const newBox = {
      width: activeRef.current?.offsetWidth,
      left: activeRef.current?.offsetLeft,
      top: activeRef.current?.offsetTop,
      height: activeRef.current?.offsetHeight,
    };
    setBox(newBox);
  }, [isSmallScreen]);

  useEffect(() => {
    if (activeRef.current && mounting) {
      setBoxToActiveRef();
      setMounting(false);
    }
  }, [box, mounting, setBoxToActiveRef]);

  useEffect(() => {
    window.addEventListener("resize", setBoxToActiveRef);
    return () => window.removeEventListener("resize", setBoxToActiveRef);
  }, [setBoxToActiveRef]);

  useEffect(() => {
    setBoxToActiveRef();
  }, [activeSection, setBoxToActiveRef]);

  return (
    <ClientOnlyPortal>
      <div
        onMouseEnter={() => !isSmallScreen && setExpanded(true)}
        onMouseLeave={() => !isSmallScreen && setExpanded(false)}
        className={`${classes.sectionNavRoot}  ${
          expanded && classes.expandedRoot
        } blurIn`}
        style={{
          "--width": Math.round(box.width) - 4 + "px",
          "--left": Math.round(box.left) + 2 + "px",
          "--top": Math.round(box.top) + 2 + "px",
          "--height": Math.round(box.height) - 8 + "px",
        }}
      >
        {isSmallScreen ? (
          <ButtonBase
            onClick={() => setExpanded((prevExp) => !prevExp)}
            className={classes.item}
          >
            {expanded ? (
              <ArrowForwardIosOutlinedIcon
                style={{ color: theme.palette.custom.textColor }}
              />
            ) : (
              <ArrowBackIosOutlinedIcon
                style={{ color: theme.palette.custom.textColor }}
              />
            )}
          </ButtonBase>
        ) : null}
        {sections.map((section) => (
          <ButtonBase
            ref={section.name === activeSection ? activeRef : null}
            onClick={() => activateSection(section.name)}
            className={classes.item}
            key={section.name}
            disableRipple
          >
            {section.icon}
            <span
              className={`${classes.sectionName} ${
                expanded && classes.expanded
              }`}
            >
              {section.name.toUpperCase()}
            </span>
          </ButtonBase>
        ))}
      </div>
    </ClientOnlyPortal>
  );
};

export default React.memo(SectionNav);
