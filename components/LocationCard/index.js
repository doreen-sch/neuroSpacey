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
          <StyledDescription>{description}</StyledDescription>
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
  overflow: visible;

  background: linear-gradient(
    to right,
    var(--color-background-50),
    transparent
  );
  box-shadow:
    0 1px 1px hsl(308deg 20% 28% / 0.05),
    0 2px 2px hsl(308deg 20% 28% / 0.05),
    0 4px 4px hsl(308deg 20% 28% / 0.05),
    0 8px 8px hsl(308deg 20% 28% / 0.05),
    0 16px 16px hsl(308deg 20% 28% / 0.03);
`;

const StyledImageContainer = styled.div`
  overflow: hidden;
  position: relative;
  width: 33%;
  min-height: 150px;
  flex-shrink: 0;
  border-bottom: 2px solid var(--color-surface-400);
  border-top: 2px solid var(--color-surface-400);
  border-top-left-radius: var(--radius-sm);
  border-bottom-left-radius: var(--radius-sm);
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  pointer-events: none;
  object-position: center 60%;
`;

const StyledTextContainer = styled.div`
  position: relative;
  flex: 1;
  padding: 0rem;
  z-index: 2;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(
      to right,
      var(--color-surface-400),
      transparent
    );
  }
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(
      to right,
      var(--color-surface-400),
      transparent
    );
  }
`;

const StyledLocationName = styled.h2`
  margin: 1rem;
`;

const StyledCategory = styled.p`
  margin: 1rem;
`;

const StyledDescription = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin: 1rem 3rem 1rem 1rem;
`;
