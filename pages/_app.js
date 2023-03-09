import '../styles/globals.css';
import Script from 'next/script'
import jwt_decode from "jwt-decode";
import Head from "next/head";
import Router, { useRouter } from "next/router";
import nProgress from "nprogress";
import "nprogress/nprogress.css";
import React, { createContext, useEffect, useState } from "react";
import Navbar from '../Components/Shared/Navbar/Navbar';
import Footer from '../Components/Shared/Footer/Footer';
import { Hydrate, QueryClient, QueryClientProvider, } from '@tanstack/react-query'

nProgress.configure(
  { showSpinner: false },
  {
    template: "<div role='bar' className='bg-info'>...</div>",
  }
);

export const config = {
  unstable_runtimeJS: false
};

export const UserContext = createContext();
export default function App({ Component, pageProps }) {
  // return <Component {...pageProps} />
  const router = useRouter();
  const [queryClient] = React.useState(() => new QueryClient())

  const handelClickTop = () => {
    window.scroll(0, 0);
  };

  const [signedUser, setSignedUser] = useState({});

  //showing n-progress
  Router.events.on("routeChangeStart", (url) => {
    nProgress.start();
  });
  Router.events.on("routeChangeComplete", (url) => {
    nProgress.done();
  });
  Router.events.on("routeChangeError", () => nProgress.done());

  useEffect(() => {
    const info = JSON.parse(window.localStorage.getItem("info"));
    try {
      const decoded = jwt_decode(info);
      setSignedUser(decoded);
    } catch (err) { }
  }, []);

  if (Component.getLayout) {
    return Component.getLayout(
      <>
        <Head>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous" />
          <script async src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>

          {/* Google Analytics Script Add */}
          {/* <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-M0L3PN9HQL"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
              function gtag() {
                dataLayer.push(arguments);
              }
              gtag("js", new Date());
              gtag("config", "G-M0L3PN9HQL");`,
            }}
          /> */}
          {/* facebook Analytics Script Add */}
          {/* <script
            dangerouslySetInnerHTML={{
              __html: `!function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '878234442794429');
              fbq('track', 'PageView');`,
            }}
          /> */}
          {/* <noscript>
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src="https://www.facebook.com/tr?id=878234442794429&ev=PageView&noscript=1"
            />
          </noscript> */}
        </Head>
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <UserContext.Provider value={[signedUser, setSignedUser]}>
              <Component {...pageProps} />
            </UserContext.Provider>
          </Hydrate>
        </QueryClientProvider>
      </>
    );
  }
  return (
    <>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossOrigin="anonymous"
        ></link>
        <script
          async
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj"
          crossOrigin="anonymous"
        ></script>

        {/* Google Analytics Script Add */}
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `[window.dataLayer = window.dataLayer || [];
              function gtag() {
                dataLayer.push(arguments);
              }
              gtag("js", new Date());
              gtag("config", "G-M0L3PN9HQL");]`,
          }}
        /> */}
        {/* facebook Analytics Script Add */}
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '878234442794429');
              fbq('track', 'PageView');`,
          }}
        /> */}
        {/* <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=878234442794429&ev=PageView&noscript=1"
          />
        </noscript> */}
      </Head>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-M0L3PN9HQL"
      />
      <Navbar />
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <UserContext.Provider value={[signedUser, setSignedUser]}>
            <Component {...pageProps} />
          </UserContext.Provider>
        </Hydrate>
      </QueryClientProvider>
      <div
        className={
          router.pathname === "/richard" ||
            router.pathname === "/richard/service" ||
            router.pathname === "/richard/about" ||
            router.pathname === "/richard/orders" ||
            router.pathname === "/richard/invoice" ||
            router.pathname === "/richard/meta"
            ? "d-none"
            : ""
        }
      >
        {/* <div
          onClick={handelClickTop}
          className="scrol-icon me-5 position-fixed end-0 top-80 cursor-pointer"
        >
          <FaArrowAltCircleUp size={40} />
        </div> */}
      </div>
      <Script
        strategy="lazyOnload"
        src='https://embed.tawk.to/5dc483b81936a27a715fd119/default'
      />
      <Footer />

    </>
  );
}
