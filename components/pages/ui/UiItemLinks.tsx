import React from 'react';
import GitHubIcon from "@mui/icons-material/GitHub";
import BoltIcon from '@mui/icons-material/Bolt';
import { Box, IconButton, Tooltip } from '@mui/material';
import { UiItemLink } from '@/types/ui-item-link';

type Props = { links: UiItemLink[] };

const UiItemLinks = ({ links }: Props) => {
  return (
    <Box display="flex" justifyContent="end" className="gap-4">
      {links.map(({ label, link, icon }) => (
        <IconButton
          key={label}
          edge="start"
          aria-label="social"
          component="a"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          size="large"
          className="text-themed-text hover:text-primary"
        >
          <Tooltip title={label} arrow>
            {icon}
          </Tooltip>
        </IconButton>
      ))}
    </Box>
  );
};

export default UiItemLinks;