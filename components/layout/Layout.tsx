import React, { PropsWithChildren, useState } from "react";
import MyAppBar from "./MyAppBar";
import MyDrawer from "./MyDrawer";
import ScrollTop from "../UI/ScrollTop";
import Footer from "./Footer";

const Layout = ({ children }: PropsWithChildren) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <MyAppBar setExpanded={setExpanded} />
      <MyDrawer expanded={expanded} setExpanded={setExpanded} />
      <main>{children}</main>
      <ScrollTop />
      <Footer />
    </>
  );
};

export default Layout;
