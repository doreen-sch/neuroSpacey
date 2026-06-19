import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import { Toaster } from "react-hot-toast";
import "leaflet/dist/leaflet.css";

const fetcher = async (url) => {
  const result = await fetch(url);
  // If the status code is not in the range 200-299,
  // we still try to parse and throw it.
  if (!result.ok) {
    const error = new Error("An error occurred while fetching the data.");
    // Attach extra info to the error object.
    error.info = await result.json();
    error.status = result.status;
    throw error;
  }
  return result.json();
};

export default function App({ Component, pageProps }) {
  return (
    <SWRConfig value={{ fetcher }}>
      <GlobalStyle />
      <Toaster />
      <main>
        <Component {...pageProps} />
      </main>
    </SWRConfig>
  );
}
