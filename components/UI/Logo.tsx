import React, { MouseEventHandler, useContext } from "react";
import { Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import DrawerContext from "context/drawerContext";
import LogoAnimated from "./LogoAnimated";

type Props = {
  inHeader?: boolean;
};

const Logo = ({ inHeader }: Props) => {
  const { setExpanded } = useContext(DrawerContext);
  const { asPath } = useRouter();

  const logoHandler: MouseEventHandler<HTMLAnchorElement> = (event) => {
    if (asPath === "/") {
      event.preventDefault();
      document.body.scrollIntoView({ behavior: "smooth" });
    }

    setExpanded(false);
  };

  return (
    <Link
      href="/"
      passHref
    >
      <a className="flex text-center items-center p-[4px] rounded-[6px] h-[3.4rem] box-border" onClick={logoHandler}>
        <div className={`w-[50px] h-[50px] block rounded-full overflow-hidden shadow-3d-card p-[.38rem]`}>
          <LogoAnimated width={40} />
        </div>
        {inHeader && (
          <Typography className="hidden sm:block text-[2rem] font-[300] ml-[10px]">
            <span className="text-primary">Andrej</span>Ground
          </Typography>
        )}
      </a>
    </Link>
  );
};

export default React.memo(Logo);
