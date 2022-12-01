import React, { PropsWithChildren, useState } from "react";
import MyAppBar from "./MyAppBar";
import MyDrawer from "./MyDrawer";
import ScrollTop from "../UI/ScrollTop";
import Footer from "./Footer";

const Layout = ({ children }: PropsWithChildren) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="min-h-screen">
      <MyAppBar setExpanded={setExpanded} />
      <MyDrawer expanded={expanded} setExpanded={setExpanded} />
      <div>{children}</div>
      <ScrollTop />
      <Footer />
    </div>
  );
};

export default Layout;
