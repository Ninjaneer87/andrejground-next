import React, { useState, useEffect } from "react";
import {
  List,
  ListItem,
  Typography,
  ListItemIcon,
} from "@mui/material";
import Heading from "@/components/UI/Heading";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ScheduleIcon from "@mui/icons-material/Schedule";
import { formatDate } from "utils/utility";
import StickyInfo from "./StickyInfo";
import { useInView } from "react-intersection-observer";
import classes from "./SingleBlogContent.module.scss";
import { IBlog } from "models/Blog";
import BlurIn from "@/components/UI/BlurIn";

type Props = {
  blog: IBlog;
};

const SingleBlogContent = ({ blog }: Props) => {
  const [showSticky, setShowSticky] = useState(false);
  const { ref: scrollRef, inView } = useInView({  rootMargin: "-30%" });

  useEffect(() => {
    setShowSticky(inView);
  }, [inView]);

  return (
    <>
      <div className={`${classes.stickyInfo} ${showSticky ? classes.show : ""}`} >
        <StickyInfo
          author={blog.author}
          createdAt={blog.createdAt}
          title={blog.title}
        />
      </div>

      <BlurIn className={classes.root }>
        <Heading text={blog.title} />
        <Typography className={classes.subtitle} component="h2" variant="h5">
          {blog.subtitle}
        </Typography>
        <Typography component="div" className={classes.dateAndAuthor}>
          <List disablePadding className={classes.dateAndAuthorList}>
            <ListItem className="w-fit">
              <ListItemIcon className="min-w-[32px]">
                <PersonOutlineIcon color="primary" />
              </ListItemIcon>
              <span className="grey">{blog.author}</span>
            </ListItem>
            <ListItem className="w-fit">
              <ListItemIcon className="min-w-[32px]">
                <ScheduleIcon color="primary" />
              </ListItemIcon>
              <span className="grey">{formatDate(blog.createdAt)}</span>
            </ListItem>
          </List>
        </Typography>
        <div 
          style={{ backgroundImage: `url('/images/${blog.image}')` }}
          className={classes.image}
        />
        <Typography
          component="div"
          className={classes.content}
          ref={scrollRef}
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </BlurIn>
    </>
  );
};

export default React.memo(SingleBlogContent);
