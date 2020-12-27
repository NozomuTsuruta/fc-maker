import React, { useEffect } from "react";
import { AppProps } from "next/app";
import { StylesProvider } from "@material-ui/core";

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
      <Component {...pageProps} />
    </StylesProvider>
  );
}
