import { makeStyles } from "@material-ui/core";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ClientOnlyPortal from "../helpers/ClientOnlyPortal";

import logoImg from "../../public/img/AG.png";

const useStyles = makeStyles((theme) => ({
  logoHolder: {
    position: 'absolute',
    top: "50%",
    right: "100%",
    transform: "translate(calc(50%), -50%)",
    width: 250,
    height: 250,
    maxWidth: "50vw",
    maxHeight: "50vw",
    display: "block",
    borderRadius: "100vh",
    overflow: "hidden",
    backgroundColor: '#212121',
    zIndex: 23,
    border: `20px solid #212121`,
    boxSizing: "border-box", 
  },
}));

const MyLoader = () => {
  const [loaded, setLoaded] = useState(false);
  const [removed, setRemoved] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    setTimeout(() => setLoaded(true), 1000);
    setTimeout(() => setRemoved(true), 2500);
  }, []);

  return (
    <ClientOnlyPortal>
      {removed ? null : (
        <div className="loader">
          <div className={`loader1 ${loaded ? "exitLeft" : ""}`}>
          </div>
          <div className={`loader2 ${loaded ? "exitRight" : ""}`}>
            <div className={classes.logoHolder}>
              <Image
                priority
                className={classes.logoImg + " appear"}
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
