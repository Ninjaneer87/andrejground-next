import React, { useEffect, useState } from "react";
import ClientOnlyPortal from "@/components/portals/ClientOnlyPortal";
import classes from "./MyLoader.module.scss";
import LogoAnimated from "./LogoAnimated";


const MyLoader = () => {
  const [loaded, setLoaded] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 1000);
    setTimeout(() => setRemoved(true), 2500);
  }, []);

  return (
    <ClientOnlyPortal>
      {removed ? null : (
        <div className={classes.loader}>
          <div className={`${classes.loader1} ${loaded ? "exit-left" : ""}`} />
          <div className={`${classes.loader2} ${loaded ? "exit-right" : ""}`}>
            <div className={classes.logoHolder}>
              <LogoAnimated />
            </div>
          </div>
        </div>
      )}
    </ClientOnlyPortal>
  );
};

export default MyLoader;
