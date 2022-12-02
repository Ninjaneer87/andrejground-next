import React, { useCallback } from "react";
import { IconButton } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ClientOnlyPortal from "@/components/portals/ClientOnlyPortal";
import { useInView } from "react-intersection-observer";
import PageTop from "./PageTop";

const ScrollTop = () => {
  const { ref: pageTop, inView: pageTopInView } = useInView({ threshold: 1 });

  const scrollToTop = useCallback(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <ClientOnlyPortal>
      <PageTop ref={pageTop} />
      <IconButton
        edge="start"
        color="primary"
        aria-label="scroll-top"
        onClick={scrollToTop}
        className={`fixed bottom-3 right-3 p-2 transform transition-all duration-300 ease-in-out border-solid border-2 border-accent z-40 bg-glass ${
          !pageTopInView ? "translate-x-0" : "translate-x-[200%]"
        }`}
        size="medium"
      >
        <KeyboardArrowUpIcon fontSize="medium" />
      </IconButton>
    </ClientOnlyPortal>
  );
};

export default ScrollTop;
