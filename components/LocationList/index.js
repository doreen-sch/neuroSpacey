import LocationCard from "@/components/LocationCard";
import styled from "styled-components";

export default function LocationList({ locations }) {
  if (locations.length === 0)
    return <p>There is no location in your database.</p>;

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
  justify-content: center;
  list-style: none;
  width: 100%;
  padding: 7rem 2rem 2rem 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;

const StyledListItem = styled.li`
  flex: 1 1 300px;
  padding: 0 0 2rem 0;
`;
