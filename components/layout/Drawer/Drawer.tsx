import { DrawerSocials } from './DrawerSocials';
import DrawerContext from "context/drawerContext";
import React, { useContext, useRef, useEffect } from "react";
import ClientOnlyPortal from "@/components/portals/ClientOnlyPortal";
import HamburgerButton from "@/components/UI/HamburgerButton";
import Logo from "@/components/UI/Logo";
import DrawerNavItems from "./DrawerNavItems";
import classes from "./Drawer.module.scss";

const Drawer = () => {
  const { expanded, mounted, toggleExpanded, mounting } = useContext(DrawerContext);
  const navigationRef = useRef<HTMLDivElement>(null);

  const navStateClass = expanded ? classes["navigation--opened"] : classes["navigation--closed"];
  const starStateClass = expanded ? classes["star--opened"] : classes["star--closed"];

  useEffect(() => {
    if(mounted) setTimeout(() =>  navigationRef.current?.focus(), 0);
  }, [mounted]);

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
            aria-controls="mobile-navigation"
            aria-label="close-navigation"
            aria-expanded={expanded}
            onClick={toggleExpanded}
            expanded={expanded}
            disabled={mounting}
            black 
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
