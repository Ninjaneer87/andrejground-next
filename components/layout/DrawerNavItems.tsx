import React, { useContext } from "react";
import { useRouter } from "next/router";
import BlurIn from "@/components/UI/BlurIn";
import { navItems } from "utils/constants";
import { isActive } from "utils/utility";
import Link from "next/link";
import { List, ListItemButton, ListItemText } from "@mui/material";
import NavContext from "context/navContext";

const DrawerNavItems = () => {
  const { setExpanded } = useContext(NavContext);
  const { asPath: currentUrl } = useRouter();

  const closeDrawer = () => setExpanded(false);

  return (
    <List disablePadding className="flex flex-col gap-6 mt-auto">
      {navItems.map(({ path, id, text, exact }, i) => (
        <BlurIn delay={(i + 5) * 100} key={id}>
          <Link href={path} passHref>
            <ListItemButton
              disableRipple
              className={`
                ${isActive(path, currentUrl, exact) ? "shadow-3d-button" : ""} 
                text-center hover:bg-transparent hover:text-primary transition-colors
              `}
              onClick={closeDrawer}
              component="a"
            >
              <ListItemText primary={text} />
            </ListItemButton>
          </Link>
        </BlurIn>
      ))}
    </List>
  );
};

export default DrawerNavItems;
