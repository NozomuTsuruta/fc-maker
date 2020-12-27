import React, { useEffect } from "react";
import { AppProps } from "next/app";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider as StyledComponentsThemeProvider } from "styled-components";
import {
  ThemeProvider as MaterialUIThemeProvider,
  StylesProvider,
} from "@material-ui/core/styles";
import { theme } from "../utils/index";
import { Layout } from "../components/Layout";

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
      <MaterialUIThemeProvider theme={theme}>
        <StyledComponentsThemeProvider theme={theme}>
          <CssBaseline />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </StyledComponentsThemeProvider>
      </MaterialUIThemeProvider>
    </StylesProvider>
  );
}
