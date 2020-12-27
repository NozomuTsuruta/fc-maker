import Document, { DocumentContext } from "next/document";
import { ServerStyleSheets } from "@material-ui/styles";

/**
 * サーバー側のレンダリングカスタマイズ
 */
export default class MyDocument extends Document {
  /**
   * レンダリング前に実行される
   */
  static async getInitialProps(ctx: DocumentContext) {
    // それぞれサーバ側のレンダリングに処理を追加していると思われる
    const materialSheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            materialSheets.collect(<App {...props} />),
        });
      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {materialSheets.getStyleElement()}
          </>
        ),
      };
    } finally {
    }
  }
}
