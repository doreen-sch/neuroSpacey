import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import { Toaster } from "react-hot-toast";
import "leaflet/dist/leaflet.css";
import { DM_Serif_Display, Poppins } from "next/font/google";
import styled from "styled-components";

const dmSerifDisplay = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});
const poppins = Poppins({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-body",
});

const fetcher = async (url) => {
  const result = await fetch(url);
  if (!result.ok) {
    const error = new Error("An error occurred while fetching the data.");
    error.info = await result.json();
    error.status = result.status;
    throw error;
  }
  return result.json();
};

export default function App({ Component, pageProps }) {
  return (
    <StyledWrapper className={`${dmSerifDisplay.variable} ${poppins.variable}`}>
      <SWRConfig value={{ fetcher }}>
        <GlobalStyle />
        <Toaster />
        <main>
          <Component {...pageProps} />
        </main>
      </SWRConfig>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
`;
