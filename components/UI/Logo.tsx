import React, { MouseEventHandler } from "react";
import { ButtonBase, Typography } from "@mui/material";
import { useContext } from "react";
import Link from "next/link";
import NavContext from "context/navContext";
import { useRouter } from "next/dist/client/router";
import Image from "next/image";

const logoImg = "/img/AG.png";

type Props = {
  header?: boolean;
};

const Logo = ({ header }: Props) => {
  const navContext = useContext(NavContext);
  const { asPath } = useRouter();

  const logoHandler: MouseEventHandler<HTMLAnchorElement> = (event) => {
    if (asPath === "/") {
      event.preventDefault();
      document.body.scrollIntoView({ behavior: "smooth" });
    }
    navContext.setExpanded(false);
  };

  return (
    <ButtonBase className="rounded-lg" disableRipple>
      <Link href="/" passHref>
        <a
          className="flex text-center items-center p-[4px] rounded-[6px] h-[3.4rem] box-border"
          onClick={logoHandler}
        >
          <div className="w-[50px] h-[50px] block rounded-full overflow-hidden shadow-3d-button">
            <Image src={logoImg} alt="logo" layout='intrinsic' width={50} height={50} />
          </div>
          {header && (
            <Typography className="hidden sm:block text-[2rem] font-[300] ml-[10px]">
              <span className="text-primary">Andrej</span>Ground
            </Typography>
          )}
        </a>
      </Link>
    </ButtonBase>
  );
};

export default React.memo(Logo);
