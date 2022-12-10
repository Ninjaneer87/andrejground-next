import React from "react";
import { socials } from "utils/constants";
import IconButton from "@mui/material/IconButton";

export function DrawerSocials() {
  return (
    <div className="flex justify-center gap-5 justify-self-end mt-auto mb-4">
      {socials.map((social) => (
        <IconButton
          key={social.link}
          edge="start"
          aria-label="social"
          component="a"
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          size="small"
          className={`text-themed-text appear-delay`}
        >
          {social.icon}
        </IconButton>
      ))}
    </div>
  );
}
