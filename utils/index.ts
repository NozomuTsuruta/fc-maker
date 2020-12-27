import { createMuiTheme, styled as Styled } from "@material-ui/core";

/** styledでそのままインポートするとエラーが出るため */
export const styled = Styled;

/**
 * テーマが必要なのでとりあえず作る
 */
export const theme = createMuiTheme();

let is_sp_cache: boolean | null = null;

/** 画面サイズがSPサイズかどうか判定 */
export const is_sp = () => {
  if (is_sp_cache === null) {
    if (process.browser) {
      is_sp_cache = window.innerWidth <= 560;
    }
  }
  return is_sp_cache;
};
