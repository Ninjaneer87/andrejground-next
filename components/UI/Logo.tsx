import React, { MouseEventHandler, Dispatch, SetStateAction } from "react";
import { ButtonBase, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import Image from "next/image";

const logoImg = "/img/AG.png";

type Props = {
  inHeader?: boolean;
  setExpanded?: Dispatch<SetStateAction<boolean>>
};

const Logo = ({ inHeader, setExpanded }: Props) => {
  const { asPath } = useRouter();

  const logoHandler: MouseEventHandler<HTMLAnchorElement> = (event) => {
    if (asPath === "/") {
      event.preventDefault();
      document.body.scrollIntoView({ behavior: "smooth" });
    }
    
    setExpanded && setExpanded(false);
  };

  return (
      <Link 
        href="/"
        passHref
      >
        <a className="flex text-center items-center p-[4px] rounded-[6px] h-[3.4rem] box-border" onClick={logoHandler}>
          <div className="w-[50px] h-[50px] block rounded-full overflow-hidden shadow-3d-button">
            <Image src={logoImg} alt="logo" width={50} height={50} />
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
