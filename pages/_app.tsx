import React, { useEffect } from "react";
import { AppProps } from "next/app";
import { Grid, StylesProvider } from "@material-ui/core";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { is_sp } from "../utils/index";

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
        <Grid container>
          {!is_sp() && (
            <Grid item sm={3}>
              <Sidebar />
            </Grid>
          )}
          <Grid item sm={9} xs={12}>
            <Component {...pageProps} />
          </Grid>
        </Grid>
      </Header>
    </StylesProvider>
  );
}
