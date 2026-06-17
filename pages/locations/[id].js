import { useRouter } from "next/router";
import LocationDetails from "@/components/LocationDetail";
import useSWR from "swr";
import { useState } from "react";
import toast from "react-hot-toast";
import Link from "next/link";
import Header from "@/components/Header";
import styled from "styled-components";

export default function LocationDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  const { data: location, isLoading, error } = useSWR(`/api/locations/${id}`);
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

  async function onAddLocation(event) {
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

  if (isLoading) {
    return <h1>Is Loading…</h1>;
  }

  if (!location || error) {
    return <h1>Something went wrong.</h1>;
  }

  return (
    <StyledPageWrapper>
      <Header
        onAddLocation={onAddLocation}
        formData={formData}
        setFormData={setFormData}
      />
      <StyledLinkContainer>
        <StyledLink href={`../`}>⬅️ Zurück zur Listenansicht</StyledLink>
      </StyledLinkContainer>
      <LocationDetails location={location} />
    </StyledPageWrapper>
  );
}

const StyledPageWrapper = styled.div`
  padding-top: 2rem;
`;

const StyledLinkContainer = styled.div`
  margin: 2rem 0 0 2rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: darkslateblue;
`;
