import { Description } from "@radix-ui/react-dialog";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export default function LocationCard({ location }) {
  const { image, name, category, description } = location;

  const categoryImages = {
    Einkaufen: "/images/einkaufen_hell",
    Dienstleistung: "/images/dienstleistung_hell",
    Natur: "/images/natur_hell",
    "Café & Restaurant": "/images/cafe&restaurant_hell",
    Kultur: "/images/kultur_hell",
    Veranstaltung: "/images/veranstaltung_hell",
  };

  const imageSrc = categoryImages[category];

  return (
    <StyledLink href={`/locations/${location._id}`}>
      <StyledCard>
        {imageSrc && (
          <StyledImageContainer>
            <StyledImage src={imageSrc} alt={`Illustration ${category}`} fill />
          </StyledImageContainer>
        )}
        <StyledTextContainer>
          <StyledLocationName>{name}</StyledLocationName>
          <StyledCategory>Kategorie: {category}</StyledCategory>
          <StyledCategory>{description}</StyledCategory>
        </StyledTextContainer>
      </StyledCard>
    </StyledLink>
  );
}

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const StyledCard = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: var(--radius-sm);
  overflow: hidden;
  background-color: white;
  /* box-shadow:
    0 1px 1px hsl(0deg 0% 0% / 0.075),
    0 2px 2px hsl(0deg 0% 0% / 0.075),
    0 4px 4px hsl(0deg 0% 0% / 0.075),
    0 8px 8px hsl(0deg 0% 0% / 0.075),
    0 16px 16px hsl(0deg 0% 0% / 0.075); */
`;

const StyledImageContainer = styled.div`
  position: relative;
  width: 33%;
  min-height: 150px;
  flex-shrink: 0;
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  pointer-events: none;
  object-position: center 60%;
`;

const StyledTextContainer = styled.div`
  flex: 1;
  padding: 0rem;
`;

const StyledLocationName = styled.h2`
  margin: 1rem;
`;

const StyledCategory = styled.p`
  margin: 1rem;
`;
