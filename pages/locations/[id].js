import { useRouter } from "next/router";
import LocationDetails from "@/components/LocationDetail";
import useSWR from "swr";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

export default function LocationDetailPage({ isDark }) {
  const router = useRouter();
  const { id } = router.query;

  const {
    data: location,
    isLoading,
    error,
    mutate: mutateLocation,
  } = useSWR(`/api/locations/${id}`);

  const { mutate } = useSWR("/api/locations");

  const [formData, setFormData] = useState({
    name: location?.name || "",
    street: location?.street || "",
    houseNumber: location?.houseNumber || "",
    zipCode: location?.zipCode || "",
    city: location?.city || "",
    category: location?.category || "",
    isQuietHour: location?.isQuietHour || false,
    description: location?.description || "",
  });

  useEffect(() => {
    if (location) {
      setFormData({
        name: location.name,
        street: location.address.street,
        houseNumber: location.address.houseNumber,
        zipCode: location.address.zipCode,
        city: location.address.city,
        category: location.category,
        isQuietHour: location.isQuietHour,
        description: location.description,
      });
    }
  }, [location]);

  async function handleEditLocation(event) {
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
      const uploadResponse = await fetch(`/api/locations/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(locationData),
      });

      if (uploadResponse.ok) {
        mutateLocation();
        toast.success(
          "Das Update deiner Location wurde zur Prüfung eingereicht.",
          {
            id: "uploading",
          }
        );
      } else {
        toast.error(
          "Ups, da ist etwas schiefgelaufen. Bitte versuche es noch einmal.",
          { id: "uploading" }
        );
      }
    } catch {
      toast.error(
        "Ups, da ist etwas schiefgelaufen. Bitte versuche es noch einmal.",
        { id: "uploading" }
      );
    }
  }

  async function handleDeleteLocation() {
    try {
      const response = await fetch(`/api/locations/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        mutate();
        router.push("/");
        toast.success(
          "Dein Löschantrag wurde eingereicht und wird redaktionell geprüft."
        );
      } else {
        toast.error(
          "Ups, da ist etwas schiefgelaufen. Bitte versuche es noch einmal."
        );
      }
    } catch {
      toast.error(
        "Ups, da ist etwas schiefgelaufen. Bitte versuche es noch einmal."
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
    <LocationDetails
      location={location}
      handleEditLocation={handleEditLocation}
      handleDeleteLocation={handleDeleteLocation}
      formData={formData}
      setFormData={setFormData}
      isDark={isDark}
    />
  );
}
