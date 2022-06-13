import "../styles/globals.css";
import Window from "../app/templates/Window";
import Admin from "../app/templates/Admin";
import Head from "next/head";

function MyApp({ Component, pageProps, router }) {
  if (router.pathname.startsWith("/admin")) {
    return (
      <>
        <Head>
          <title>Dev Admin</title>
        </Head>
        <Admin>
          <Component {...pageProps} />
        </Admin>
      </>
    );
  }

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
