import React, {
  useEffect,
  useState,
} from "react";
import { ButtonBase } from "@mui/material";
import ClientOnlyPortal from "@/components/portals/ClientOnlyPortal";
import { HomeSectionNames, scrollToHomeSection } from "pages";
import useBoxPosition from "hooks/useBoxPosition";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";
import FolderSpecialOutlinedIcon from "@mui/icons-material/FolderSpecialOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { useMediaQuery, useTheme } from "@mui/material";

const sections: { id: number; name: HomeSectionNames; icon: JSX.Element }[] = [
  {
    id: 0,
    name: "home",
    icon: <HomeOutlinedIcon />,
  },
  {
    id: 1,
    name: "mission",
    icon: <AssignmentTurnedInOutlinedIcon />,
  },
  {
    id: 2,
    name: "toolbox",
    icon: <BuildOutlinedIcon />,
  },
  {
    id: 3,
    name: "projects",
    icon: <FolderSpecialOutlinedIcon />,
  },
  {
    id: 4,
    name: "contact",
    icon: <EmailOutlinedIcon />,
  },
];

type Props = {
  inViewSection: HomeSectionNames;
};

const SectionNav = ({ inViewSection }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down(1100));
  const [mounted, setMounted] = useState(false);
  const [refLoaded, setRefLoaded] = useState(false);
  const {activeBoxRef, boxPosition, setBoxPosition} = useBoxPosition<HTMLButtonElement>();

  const boxCoordsStyles = {
    "--width": `${boxPosition.width - 4}px`,
    "--left": `${boxPosition.left + 2}px`,
    "--top": `${boxPosition.top + 2}px`,
    "--height": `${boxPosition.height - 8}px`,
  } as React.CSSProperties;

  useEffect(() => {
    setBoxPosition();
  }, [inViewSection, setBoxPosition]);

  useEffect(() => {
    setMounted(true);
    window.addEventListener("resize", setBoxPosition);
    return () => window.removeEventListener("resize", setBoxPosition);
  }, [setBoxPosition]);

  useEffect(() => {
    if (activeBoxRef.current && mounted && !refLoaded) {
      setRefLoaded(true);
      setBoxPosition();
    }
  });

  return (
    isSmallScreen ? null :
    <ClientOnlyPortal>
      <div
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
        className={`appear p-[10px] min-h-[150px] bg-themed-bg fixed top-1/2 right-0 -translate-y-1/2 flex flex-col justify-center  rounded-[6px_0_0_6px] transition-all duration-150 ease-linear z-[1] after:content-[''] after:absolute after:w-[calc(100%_-_25px)] after:left-[var(--left)] after:top-[2px] after:h-[var(--height)] after:z-[-1] after:rounded-[6px] after:transition-all after:duration-150 after:ease-linear after:translate-y-[var(--top)] after:shadow-3d-button ${expanded ? 'w-[180px] opacity-100' : 'w-[58px] opacity-80'}`}
        style={boxCoordsStyles}
      >
        {sections.map((section) => (
          <div key={section.id}>
            <ButtonBase
              {...(section.name === inViewSection && { ref: activeBoxRef })}
              onClick={() => scrollToHomeSection(section.name)}
              className="p-[16px_6px] cursor-pointer w-full rounded-[6px_0_0_6px] relative flex justify-start text-start"
              disableRipple
            >
              {section.icon}
              <span
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity  pointer-events-none ${expanded ? 'opacity-100' : 'opacity-0'} uppercase`}
              >
                {section.name}
              </span>
            </ButtonBase>
          </div>
        ))}
      </div>
    </ClientOnlyPortal>
  );
};

export default React.memo(SectionNav);
