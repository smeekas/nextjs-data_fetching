import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render(): JSX.Element {
    // default
    //     return (
    //       <Html>
    //         <Head />
    //         {/* this HEad is different from next/Head */}
    //         <body>
    //           <Main />
    //           <NextScript />
    //         </body>
    //       </Html>
    //     );

    return (
      <Html lang="en">
        <Head />
        <body>
          <div id="overlays" ></div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument