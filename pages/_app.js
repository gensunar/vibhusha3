import "../styles/globals.css";
import Head from "next/head";
import Router from "next/router";
import { useState } from "react";
import NProgress from 'nprogress';

function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true);
  Router.events.on("routeChangeStart", (url) => {
    NProgress.start()
    setIsLoading(true);
  });
  Router.events.on("routeChangeComplete", (url) => {
    NProgress.done()
    setIsLoading(false);
  });

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width,height=device-height,initial-scale=1.0"
          />
      </Head>
          {/* {isLoading && <Loading />} */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
