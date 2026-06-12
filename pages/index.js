import useSWR from "swr";
import LocationList from "@/components/LocationList";

export default function HomePage() {
  const { data: locations, error, isLoading } = useSWR("/api/locations");

  if (error) {
    return <h1>Oops… something went wrong.</h1>;
  }

  if (!locations) return <p>Loading...</p>;

  return <LocationList locations={locations} />;
}
