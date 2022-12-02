import React from "react";
import SendMessage from "@/components/pages/contact/SendMessage";
import Info from "@/components/pages/contact/Info";
import Head from "next/head";

const Contact = () => {
  return (
    <>
      <Head>
        <title>AndrejGround | Contact</title>
        <meta name="description" content="AndrejGround contact page" />
      </Head>
      <Info />
      <SendMessage />
    </>
  );
};

export default React.memo(Contact);
