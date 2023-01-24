import React from "react";
import Head from "next/head";
import UiIntro from "@/components/pages/ui/UiIntro";
import Ui from "@/components/pages/ui/Ui";

const UiPage = () => {
  return (
    <>
      <Head>
        <title>AndrejGround | UI components | Standalone features and functionalities with demo and code</title>
        <meta name="description" content="Take a close look on AndrejGround user interface and user experience, play with components and see what they are made of" />
        <link
          rel="canonical"
          href="https://andrejground.com/ui"
          key="canonical"
        />
      </Head>
      <UiIntro />
      <Ui />
    </>
  );
};

export default React.memo(UiPage);
