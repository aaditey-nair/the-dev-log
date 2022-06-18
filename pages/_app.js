import "../styles/globals.css";
import Window from "../app/templates/Window";
import Head from "next/head";

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Head>
        <title>The Dev Log</title>
      </Head>
      {router.pathname.startsWith("/admin") ? (
        <main className="bg-dark p-4 max-h-full flex-grow text-light flex flex-col">
          <Component {...pageProps} />
        </main>
      ) : (
        <Window>
          <Component {...pageProps} />
        </Window>
      )}
    </>
  );
}

export default MyApp;
