import React, { PropsWithChildren } from "react";
import MyAppBar from "./MyAppBar";
import MyDrawer from "./MyDrawer";
import ScrollTop from "../UI/ScrollTop";
import Footer from "./Footer";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="min-h-screen">
      <MyAppBar />
      <MyDrawer />
      <div>{children}</div>
      <ScrollTop />
      <Footer />
    </div>
  );
};

export default Layout;
