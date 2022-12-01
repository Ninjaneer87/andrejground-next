import Head from "next/head";
import ErrorPage from "@/components/pages/error/ErrorPage";

const NotFound = () => {
  return (
    <>
      <Head>
        <title>AndrejGround | Server Error</title>
        <meta name="description" content="AndrejGround bad request page" />
      </Head>
      <ErrorPage
        code="500"
        message="The thing you need is not available!"
        buttonText="Take me home"
      />
    </>
  );
};

export default NotFound;
