import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  styled,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useContext } from "react";
import NavContext, { menuItems } from "context/navContext";
import Logo from "@/components/UI/Logo";
import { useRouter } from "next/dist/client/router";
import { isActive } from "utils/utility";

const MyDrawer = () => {
  const { asPath: currentUrl } = useRouter();
  const { setExpanded, isExpanded } = useContext(NavContext);

  const closeDrawer = () => setExpanded(false);

  return (
    <Drawer
      anchor="left"
      open={isExpanded}
      onClose={() => setExpanded(false)}
      PaperProps={{
        sx: {
            width: 250,
            backgroundColor: "var(--color-background)",
            backdropFilter: "blur(16px)",
        }
      }}
    >
      <Typography variant="h6" className="p-0 flex justify-center items-center h-[70px] box-border border-0 border-b-[1px] border-solid border-appbar-border">
        <Logo />
      </Typography>
      <div className="w-[250px]">
        <List disablePadding>
          {menuItems.map(({path, id, text, exact}) => (
            <Link href={path} passHref key={id}>
              <ListItem
                key={id}
                button
                className={`origin-center relative before:content-[''] before:block before:w-[3px] before:transition-transform before:duration-150 before:ease-in before:absolute before:top-0 before:-left-0 before:bottom-0 before:bg-themed-text ${ isActive(path, currentUrl, exact) ? "text-primary before:scale-y-1" : "before:scale-y-0" }`}
                onClick={closeDrawer}
                component="a"
              >
                <ListItemText primary={text} />
              </ListItem>
            </Link>
          ))}
        </List>
      </div>
    </Drawer>
  );
};

export default React.memo(MyDrawer);
