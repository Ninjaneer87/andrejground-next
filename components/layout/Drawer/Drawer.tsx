import { DrawerSocials } from './DrawerSocials';
import NavContext from "context/navContext";
import React, { useContext, useRef, useEffect, useState } from "react";
import ClientOnlyPortal from "@/components/portals/ClientOnlyPortal";
import HamburgerButton from "@/components/UI/HamburgerButton";
import Logo from "@/components/UI/Logo";
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
        <div className={`${classes.navHeader} ${expanded ? "appear-delay" : "blur-out"}`} >
          <Logo />
          <HamburgerButton
            expanded={expanded}
            dark
            toggleExpanded={toggleExpanded}
          />
        </div>
        <div className={`${classes.navContent} ${expanded ? "" : "blur-out"}`}>
          <DrawerNavItems />
          <DrawerSocials />
        </div>
      </div>
    </ClientOnlyPortal>
  );
};

export default Drawer;
