import "../styles/globals.css";
import Window from "../app/templates/window";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>The Dev Log</title>
      </Head>
      <Window>
        <Component {...pageProps} />
      </Window>
    </>
  );
}

export default MyApp;
