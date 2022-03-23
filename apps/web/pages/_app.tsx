import React from "react";
import { useRouter } from "next/router";
import { globalCss, darkTheme, Box } from "ui";
import { ThemeProvider } from "next-themes";
// import { useAnalytics } from '@lib/analytics';
import Head from "next/head";
import type { AppProps } from "next/app";

const globalStyles = globalCss({
  "*, *::before, *::after": {
    margin: "0",
    padding: "0",
    font: "inherit",
    boxSizing: "border-box",
  },

  body: {
    margin: 0,
    color: "$hiContrast",
    backgroundColor: "$loContrast",
    fontFamily: "$untitled",
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    WebkitTextSizeAdjust: "100%",

    ".dark-theme &": {
      backgroundColor: "$mauve1",
    },
  },

  svg: {
    display: "block",
    verticalAlign: "middle",
  },

  "pre, code": { margin: 0, fontFamily: "$mono" },

  "::selection": {
    backgroundColor: "$violetA5",
    color: "$violet12",
  },

  "#__next": {
    position: "relative",
    zIndex: 0,
  },

  "h1, h2, h3, h4, h5": { fontWeight: 500 },

  "article, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section":
    {
      display: "block",
    },
  "*[hidden]": {
    display: "none",
  },
  "ol, ul": {
    listStyle: "none",
  },
  "blockquote, q": {
    quotes: "none",
  },
  "blockquote:before, blockquote:after, q:before, q:after": {
    content: "",
    // @ts-ignore
    content: "none",
  },
  table: {
    borderSpacing: "0",
  },
  img: {
    verticalAlign: "middle",
    maxWidth: "100%",
  },
});

function App({ Component, pageProps }: AppProps) {
  globalStyles();
  const router = useRouter();
  return (
    <ThemeProvider
      // disableTransitionOnChange
      attribute="class"
      value={{ light: "light-theme", dark: darkTheme.className }}
      defaultTheme="system"
    >
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
