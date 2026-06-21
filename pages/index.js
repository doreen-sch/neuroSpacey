import useSWR from "swr";
import { useState } from "react";
import LocationList from "@/components/LocationList";
import Header from "@/components/Header";
import FadeOverlay from "@/components/FadeOverlay";
import toast from "react-hot-toast";
import styled from "styled-components";
import dynamic from "next/dynamic";
import ListIcon from "@/assets/icons/list-icon.svg";
import MapIcon from "@/assets/icons/map-icon.svg";

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
    <div>
      <Header
        handleAddLocation={handleAddLocation}
        formData={formData}
        setFormData={setFormData}
      />
      <FadeOverlay />
      <StyledListAndMapButton
        type="button"
        onClick={() => setView(view === "list" ? "map" : "list")}
        aria-label={
          view === "list"
            ? "Wechsel zur Kartenansicht"
            : "Wechsel zur Listenansicht"
        }
      >
        {view === "list" ? (
          <MapIcon width={24} height={24} />
        ) : (
          <ListIcon width={24} height={24} />
        )}
      </StyledListAndMapButton>
      {view === "list" ? (
        <LocationList locations={locations} />
      ) : (
        <MapView locations={locations} />
      )}
    </div>
  );
}

const StyledListAndMapButton = styled.button`
  margin: 6rem 0 0 2.5rem;
  position: fixed;
  right: 2.5rem;
  z-index: 999;
  background: white;
  border-radius: 5px;
  padding-top: 4px;
  border: none;
  cursor: pointer;
`;
