import React from "react";
import SendMessage from "@/components/sections/contact/SendMessage";
import Info from "@/components/sections/contact/Info";
import Head from "next/head";


const Contact = () => {
  return (
    <>
      <Head>
        <title>AndrejGround | Contact</title>
        <meta name="description" content="AndrejGround contact page" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Info />
        <SendMessage />
      </div>
    </>
  );
};

export default React.memo(Contact);
