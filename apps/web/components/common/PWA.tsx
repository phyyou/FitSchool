import Head from "next/head";
import React from "react";

const PWA = () => {
  return (
    <Head>
      <meta name="application-name" content="FitSchool" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />
      <meta name="apple-mobile-web-app-title" content="FitSchool" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="msapplication-tap-highlight" content="no" />
      {/* <meta name="theme-color" content="#cc00ff" /> */}

      <link rel="manifest" href="/manifest.json" />
      <link rel="shortcut icon" href="/favicon.ico" />
    </Head>
  );
};

export default PWA;
