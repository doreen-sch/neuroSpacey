import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import { Toaster } from "react-hot-toast";
import "leaflet/dist/leaflet.css";
import { DM_Serif_Display, Poppins } from "next/font/google";
import styled from "styled-components";
import NavBar from "@/components/BottomNavigation";
import { useState } from "react";
import useSWR from "swr";
import toast from "react-hot-toast";
import BurgerMenu from "@/components/BurgerMenu";

const dmSerifDisplay = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});
const poppins = Poppins({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
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
  const { mutate } = useSWR("/api/locations");

  const [formData, setFormData] = useState({
    name: "",
    street: "",
    houseNumber: "",
    zipCode: "",
    city: "",
    category: "",
    isQuietHour: false,
    description: "",
  });

  const [isDark, setIsDark] = useState(false);

  function toggleDarkMode() {
    setIsDark(!isDark);
    document.body.classList.toggle("dark");
  }

  async function handleAddLocation(event) {
    event.preventDefault();
    const locationFormData = new FormData(event.target);
    const locationData = Object.fromEntries(locationFormData);
    locationData.isQuietHour = locationData.isQuietHour === "on";
    locationData.address = {
      street: locationData.street,
      houseNumber: locationData.houseNumber,
      zipCode: locationData.zipCode,
      city: locationData.city,
    };
    try {
      const uploadResponse = await fetch("/api/locations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(locationData),
      });
      if (uploadResponse.ok) {
        mutate();
        toast.success("Deine Location wurde zur Prüfung eingereicht.");
      } else {
        toast.error("Ups, da ist etwas schiefgelaufen.");
      }
    } catch {
      toast.error("Ups, da ist etwas schiefgelaufen.");
    }
  }

  return (
    <StyledWrapper className={`${dmSerifDisplay.variable} ${poppins.variable}`}>
      <SWRConfig value={{ fetcher }}>
        <GlobalStyle />
        <Toaster />
        <BurgerMenu isDark={isDark} onToggleDarkMode={toggleDarkMode} />
        <main>
          <Component {...pageProps} isDark={isDark} />
        </main>
        <NavBar
          handleAddLocation={handleAddLocation}
          formData={formData}
          setFormData={setFormData}
        />
      </SWRConfig>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
`;
