import "../styles/globals.css";
import Window from "../app/templates/window";

function MyApp({ Component, pageProps }) {
  return (
    <Window>
      <Component {...pageProps} />
    </Window>
  );
}

export default MyApp;
