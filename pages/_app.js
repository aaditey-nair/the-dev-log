import "../styles/globals.css";
import Window from "../app/templates/Window";
import Admin from "../app/templates/Admin";

function MyApp({ Component, pageProps, router }) {
  if (router.pathname.startsWith("/admin")) {
    return (
      <>
        <Admin>
          <Component {...pageProps} />
        </Admin>
      </>
    );
  }

  return (
    <>
      <Window>
        <Component {...pageProps} />
      </Window>
    </>
  );
}

export default MyApp;
