import { useRouter } from "next/router";
import LocationDetails from "@/components/LocationDetails";
import useSWR from "swr";

export default function LocationDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  const { data: location, isLoading, error } = useSWR(`/api/locations/${id}`);

  if (isLoading) {
    return <h1>Is Loading…</h1>;
  }

  if (!location || error) {
    return <h1>Something went wrong.</h1>;
  }

  return <LocationDetails location={location} />;
}
