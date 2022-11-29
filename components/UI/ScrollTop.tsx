import React, { useCallback, useContext } from "react";
import { IconButton } from "@mui/material";
import NavContext from "context/navContext";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ClientOnlyPortal from "@/components/portals/ClientOnlyPortal";

const ScrollTop = () => {
  const { isScrolled } = useContext(NavContext);

  const scrollToTop = useCallback(() => {
    document.body.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <ClientOnlyPortal>
      <IconButton
        edge="start"
        color="primary"
        aria-label="scroll-top"
        onClick={scrollToTop}
        className={`fixed bottom-3 right-3 p-2 transform transition-all duration-300 ease-in-out border-solid border-2 border-accent z-40 bg-glass ${
          isScrolled ? "translate-x-0" : "translate-x-[200%]"
        }`}
        size="medium"
      >
        <KeyboardArrowUpIcon fontSize="medium" />
      </IconButton>
    </ClientOnlyPortal>
  );
};

export default ScrollTop;
