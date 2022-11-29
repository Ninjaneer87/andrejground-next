import {
  Container,
  List,
  ListItem,
  ListItemIcon,
  Typography,
} from "@mui/material";
import React from "react";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ScheduleIcon from "@mui/icons-material/Schedule";
import { formatDate } from "utils/utility";
import StyledDivider from "@/components/UI/StyledDivider";

type Props = { title: string; author: string; createdAt: Date };

const StickyInfo = ({ title, author, createdAt }: Props) => {
  return (
    <Container maxWidth="lg" disableGutters>
      <div className="max-w-[180px]">
        <Typography className="mb-3 text-base font-light">
          <span className="cyan">Andrej</span>Ground | Blog
        </Typography>
        <Typography className="mb-3">{title}</Typography>
        <StyledDivider />
        <List disablePadding>
          <ListItem className="pb-0 text-xs">
            <ListItemIcon className="min-w-[32px]">
              <PersonOutlineIcon fontSize="small" color="primary" />
            </ListItemIcon>
            <Typography variant="caption">{author}</Typography>
          </ListItem>
          <ListItem className="pb-0 text-xs">
            <ListItemIcon className="min-w-[32px]">
              <ScheduleIcon fontSize="small" color="primary" />
            </ListItemIcon>
            <Typography variant="caption">{formatDate(createdAt)}</Typography>
          </ListItem>
        </List>
      </div>
    </Container>
  );
};

export default StickyInfo;
