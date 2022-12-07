import IconButton from "@mui/material/IconButton";
import NavContext from "context/navContext";
import React, { useContext, useRef, useEffect, useState } from "react";
import { socials } from "utils/constants";
import ClientOnlyPortal from "../portals/ClientOnlyPortal";
import HamburgerButton from "../UI/HamburgerButton";
import Logo from "../UI/Logo";
import DrawerNavItems from "./DrawerNavItems";
import classes from "./Drawer.module.scss";

const Drawer = () => {
  const { expanded, toggleExpanded } = useContext(NavContext);
  const [mounted, setMounted] = useState(false);
  const navigationRef = useRef<HTMLDivElement>(null);

  const navStateClass = expanded ? classes["navigation--opened"] : classes["navigation--closed"];
  const starStateClass = expanded ? classes["star--opened"] : classes["star--closed"];

  useEffect(() => {
    if (expanded && !mounted) {
      setMounted(true);
    } 
    if (!expanded && mounted) {
      setTimeout(() => setMounted(false), 1000);
    }
    if(mounted) {
      setTimeout(() =>  navigationRef.current?.focus(), 0);
    }
  }, [expanded, mounted]);

  return !mounted ? null : (
    <ClientOnlyPortal>
      <div
        className={`${classes.navigation} ${navStateClass}`}
        tabIndex={0}
        ref={navigationRef}
      >
        <div className={`${classes.star} ${starStateClass}`} />
        <div className={`${classes.navHeader} ${expanded ? "appear-delay" : "fade-out"}`} >
          <Logo />
          <HamburgerButton
            expanded={expanded}
            dark
            toggleExpanded={toggleExpanded}
          />
        </div>
        <div className={`${classes.navContent} ${expanded ? "" : "fade-out"}`}>
          <DrawerNavItems />
          <div className="flex justify-center gap-5 justify-self-end mt-auto mb-4">
            {socials.map((social) => (
              <IconButton
                key={social.link}
                edge="start"
                aria-label="social"
                component="a"
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                size="small"
                className={`text-themed-text appear-delay`}
              >
                {social.icon}
              </IconButton>
            ))}
          </div>
        </div>
      </div>
    </ClientOnlyPortal>
  );
};

export default Drawer;
