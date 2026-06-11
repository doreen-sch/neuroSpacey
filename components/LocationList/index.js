import LocationCard from "@/components/LocationCard";
import styled from "styled-components";

export default function LocationList({ locations }) {
  return (
    <StyledList>
      {locations.map((location) => (
        <StyledListItem key={location._id}>
          <LocationCard location={location} />
        </StyledListItem>
      ))}
    </StyledList>
  );
}

const StyledList = styled.ul`
  list-style: none;
  width: 100%;
  padding: 0 2rem 2rem 2rem;
  gap: 2rem;
`;

const StyledListItem = styled.li`
  flex: 1 1 300px;
  padding: 1rem 0.5rem 1rem 0.5rem;
`;
