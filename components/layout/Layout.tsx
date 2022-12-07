import React, { PropsWithChildren, useContext, useState } from "react";
import Header from "./Header";
import ScrollTop from "../UI/ScrollTop";
import Footer from "./Footer";
import Drawer from "./Drawer";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <ScrollTop />
      <Drawer />
      <Footer />
    </>
  );
};

export default Layout;
