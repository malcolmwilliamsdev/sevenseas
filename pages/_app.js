import React, { useEffect } from "react";
import "@/styles/global.scss";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "@/components/theme.js";
import emailjs from "emailjs-com";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  const title = pageProps.title || "Seven Seas";
  const backgroundColor = theme.palette.background.paper;

  useEffect(() => {
    emailjs.init("9pV9WdgGQMs9EDN2p");

    document.body.style.backgroundColor = backgroundColor;
    // Clean up the style when the component unmounts
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [backgroundColor]);

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
