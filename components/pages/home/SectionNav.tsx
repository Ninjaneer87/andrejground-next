import React, { useState } from "react";
import { ButtonBase } from "@mui/material";
import ClientOnlyPortal from "@/components/portals/ClientOnlyPortal";
import { HomeSectionNames } from "pages";
import useBoxPosition from "hooks/useBoxPosition";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";
import FolderSpecialOutlinedIcon from "@mui/icons-material/FolderSpecialOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { useMediaQuery, useTheme } from "@mui/material";

const homeSections: { id: number; name: HomeSectionNames; icon: JSX.Element }[] = [
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
    name: "projects",
    icon: <FolderSpecialOutlinedIcon />,
  },
  {
    id: 3,
    name: "toolbox",
    icon: <BuildOutlinedIcon />,
  },
  {
    id: 4,
    name: "contact",
    icon: <EmailOutlinedIcon />,
  },
];

type Props = {
  inViewSection: HomeSectionNames;
  scrollToSection: (sectionName: HomeSectionNames) => void;
};

const SectionNav = ({ inViewSection, scrollToSection }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down(1100));
  const { boxRef, boxPosition } = useBoxPosition<HTMLButtonElement, string>(inViewSection);

  return (
    isSmallScreen ? null :
    <ClientOnlyPortal>
    transform: translateZ(0);
    will-change: transform;
      <div
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
        className={`appear transform-gpu p-[10px] min-h-[150px] bg-themed-bg fixed top-1/2 right-0 -translate-y-1/2 flex flex-col justify-center rounded-[6px_0_0_6px] transition-all duration-300 ease-in-out z-[1] after:content-[''] after:absolute after:w-[calc(100%_-_22px)] after:left-[var(--left)] after:top-[2px] after:h-[var(--height)] after:z-[-1] after:rounded-[6px] after:transition-all after:duration-150 after:ease-linear after:translate-y-[var(--top)] after:shadow-3d-button w-[180px]
        ${expanded ? 'opacity-100' : 'translate-x-32 opacity-80'}`}
        style={boxPosition}
      >
        {homeSections.map((section) => (
          <div key={section.id}>
            <ButtonBase
              {...(section.name === inViewSection && { ref: boxRef })}
              onClick={() => scrollToSection(section.name)}
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
