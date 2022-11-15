import React from "react";
import { Divider, Drawer, List, ListItem, ListItemText, Typography } from "@material-ui/core";
import {makeStyles} from '@material-ui/core';
import Link from 'next/link';
import { useContext } from "react";
import NavContext, { menuItems } from "../../context/navContext";
import Logo from "../UI/Logo";
import { grey } from "@material-ui/core/colors";
import { useRouter } from "next/dist/client/router";
// import { scrollTopClick } from "../helpers/utility";

const drawerWidth = 250;

const useStyles = makeStyles(theme => ({
  drawer: {
    width: drawerWidth,
    background: theme.palette.custom.backgroundColor,
    color: theme.palette.custom.textColor,
  },
  drawerPaper: {
    width: drawerWidth,
    background: theme.palette.custom.backgroundColor,
  },
  listItem: {
    transformOrigin: 'center center',
    position: 'relative',
    '&::before': {
      content: '""',
      display: 'block',
      width: 3,
      transition: `transform ${theme.transitions.duration.short}ms ease`,
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      backgroundColor: theme.palette.custom.textColor,
      transform: 'scaleY(0)',
    }
  },
  active: {
    color: theme.palette.custom.accent,
    '&::before': {
      transform: 'scaleY(1)',
    }
  },
  title: {
    padding: 0,
    color: theme.palette.custom.textColor,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
    boxSizing: 'border-box',
    borderBottom: `1px solid ${theme.palette.custom.boxShadowColor}`,
  },
  divider: {
    backgroundColor: theme.palette.custom.borderColor
  },
  badge: {
    left: '100%',
    top: '50%'
  }
}));

const MyDrawer = () => {
  const classes = useStyles();
  const { asPath } = useRouter();

  const navContext = useContext(NavContext);

  const linkHandler = () => {
    navContext.setExpanded(false)
    // scrollTopClick();
  }

  const drawerHeader = <div>
    <Typography
      variant='h6'
      className={classes.title}
    >
      <Logo />
    </Typography>
    <Divider classes={{ root: classes.divider }} />
  </div>;

  const list = (
    <div className={classes.drawer}>
      <List disablePadding>
        {menuItems.map(item => (
          // <Link
          //   key={item.id}
          //   href={item.path}
          // >
          //   {item.text}
          // </Link>
          <Link
            href={item.path}
            passHref
            key={item.id}
          >
            <ListItem
              key={item.id}
              button
              // prefetch={false}
              className={`${(
                (asPath.startsWith(item.path) && item.path.length > 1) ||
                (asPath === '/' && asPath === item.path)
              ) && classes.active} 
            ${classes.listItem}`}
              onClick={linkHandler}
              component='a'
            >
              <ListItemText primary={item.text} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  const drawer = <Drawer
    anchor='left'
    open={navContext.isExpanded}
    onClose={() => navContext.setExpanded(false)}
    classes={{ paper: classes.drawerPaper }}
  >
    {drawerHeader}
    {list}
  </Drawer>;

  return (
    <div>
      {drawer}
    </div>
  );
};


export default React.memo(MyDrawer);
