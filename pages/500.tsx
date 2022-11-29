import Head from "next/head";
import { Button, Typography } from "@mui/material";
import { useRouter } from "next/dist/client/router";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { useCallback, useEffect, useState } from "react";

const NotFound = () => {
  const router = useRouter();
  const [counter, setCounter] = useState(10);

  useEffect(() => {
    setInterval(() => {
      setCounter((prevCounter) => prevCounter - 1);
    }, 1000);
  }, []);

  const goHome = useCallback(() => {
    router.replace("/");
  }, [router]);

  useEffect(() => {
    if (counter === 0) goHome();
  }, [counter, goHome]);

  return (
    <>
      <Head>
        <title>AndrejGround | Bad Request</title>
        <meta name="description" content="AndrejGround bad request page" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <div className="flex flex-col items-center w-[600px] max-w-[90vw] m-[50px_auto]">
          <div className="animate-border">
            <Typography
              component="h1"
              className="text-primary text-center"
            >
              500
            </Typography>
          </div>
          <Typography
            variant="h2"
            component="h2"
            className="text-center"
          >
            The thing you are looking for might not exist...
          </Typography>
          <br />
          <Button
            variant="contained"
            color="primary"
            className="m-[20px_auto] w-full max-w-[400px]"
            onClick={goHome}
            endIcon={<ErrorOutlineIcon />}
            startIcon={<ErrorOutlineIcon />}
          >
            Back To Homepage {counter}
          </Button>
        </div>
      </div>
    </>
  );
};

export default NotFound;
