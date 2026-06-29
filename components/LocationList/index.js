import LocationCard from "@/components/LocationCard";
import styled from "styled-components";

export default function LocationList({ locations, isDark }) {
  if (locations.length === 0)
    return <p>There is no location in your database.</p>;

  return (
    <StyledList>
      {locations.map((location) => (
        <StyledListItem key={location._id}>
          <LocationCard location={location} isDark={isDark} />
        </StyledListItem>
      ))}
    </StyledList>
  );
}

const StyledList = styled.ul`
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  list-style: none;
  width: 100%;
  padding: 2rem 2rem 2rem 2rem;
  flex-wrap: wrap;
  gap: 2rem;
`;

const StyledListItem = styled.li`
  flex: 1 1 300px;
  max-width: 100%;
  padding: 0 0 0.5rem 0;
`;
