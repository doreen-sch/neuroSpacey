import useSWR from "swr";
import LocationList from "@/components/LocationList";
import Header from "@/components/Header";
import toast from "react-hot-toast";

export default function HomePage() {
  const {
    data: locations,
    error,
    isLoading,
    mutate,
  } = useSWR("/api/locations");

  if (error) {
    return <h1>Oops… something went wrong.</h1>;
  }

  if (isLoading) return <p>Loading...</p>;

  async function onAddLocation(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const locationData = Object.fromEntries(formData);
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
    <>
      <Header onAddLocation={onAddLocation} />
      <LocationList locations={locations} />
    </>
  );
}
