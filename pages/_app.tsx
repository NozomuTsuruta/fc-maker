import React, { useEffect } from "react";
import { AppProps } from "next/app";
import { StylesProvider } from "@material-ui/core";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

export default function App({ Component, pageProps }: AppProps) {
  /**
   * サーバー側に挿入されたCSSを削除
   */
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }, []);

  return (
    <StylesProvider injectFirst>
      <Header>
        <Sidebar />
        <Component {...pageProps} />
      </Header>
    </StylesProvider>
  );
}
