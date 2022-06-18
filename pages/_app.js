import "../styles/globals.css";
import Window from "../app/templates/Window";
import Admin from "../app/templates/Admin";
import Head from "next/head";

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Head>
        <title>The Dev Log</title>
      </Head>
      {router.pathname.startsWith("/admin") ? (
        <Admin>
          <Component {...pageProps} />
        </Admin>
      ) : (
        <Window>
          <Component {...pageProps} />
        </Window>
      )}
    </>
  );
}

export default MyApp;
