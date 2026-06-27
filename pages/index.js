import useSWR from "swr";
import { useState } from "react";
import LocationList from "@/components/LocationList";
import Header from "@/components/Header";
import toast from "react-hot-toast";
import dynamic from "next/dynamic";
import ViewSlider from "@/components/ViewSlider";
import styled from "styled-components";

const MapView = dynamic(() => import("@/components/MapView"), { ssr: false });

export default function HomePage() {
  const {
    data: locations,
    error,
    isLoading,
    mutate,
  } = useSWR("/api/locations");

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

  const [view, setView] = useState("list");

  if (error) {
    return <h1>Oops… something went wrong.</h1>;
  }

  if (isLoading) return <p>Loading...</p>;

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
        toast.success("Deine Location wurde zur Prüfung eingereicht", {
          id: "uploading",
        });
      }
    } catch {
      toast.error(
        "Ups, da ist was schiefgelaufen. Bitte versuche es noch einmal.",
        { id: "uploading" }
      );
    }
  }

  return (
    <StyledPageWrapper>
      <Header
        handleAddLocation={handleAddLocation}
        formData={formData}
        setFormData={setFormData}
      />
      <ViewSlider view={view} setView={setView} />
      {view === "list" ? (
        <LocationList locations={locations} />
      ) : (
        <MapView locations={locations} />
      )}
    </StyledPageWrapper>
  );
}

const StyledPageWrapper = styled.div`
  padding-top: 2rem;
`;
