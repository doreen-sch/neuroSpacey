import useSWR from "swr";
import LocationList from "@/components/LocationList";

export default function HomePage() {
  const { data: locations } = useSWR("/api/locations");

  if (!locations) return <p>Loading...</p>;

  return <LocationList locations={locations} />;
}
