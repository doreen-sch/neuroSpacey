import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import styled from "styled-components";
import { Toaster } from "react-hot-toast";

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
      <StyledMain>
        <Component {...pageProps} />
      </StyledMain>
    </SWRConfig>
  );
}

const StyledMain = styled.main`
  padding-top: 3rem;
`;
