import { useRouter } from "next/router";
import LocationDetails from "@/components/LocationDetail";
import useSWR from "swr";
import Link from "next/link";
import Header from "@/components/Header";
import styled from "styled-components";

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

  return (
    <StyledPageWrapper>
      <Header />
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
