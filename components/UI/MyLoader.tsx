import Image from "next/image";
import React, { useEffect, useState } from "react";
import ClientOnlyPortal from "@/components/portals/ClientOnlyPortal";
import classes from "./MyLoader.module.scss";

const logoImg = "/img/AG.png";

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
              <Image
                priority
                className={"appear pulse"}
                src={logoImg}
                alt="logo"
                width={250}
                height={250}
              />
            </div>
          </div>
        </div>
      )}
    </ClientOnlyPortal>
  );
};

export default React.memo(MyLoader);
