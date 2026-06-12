import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export default function LocationCard({ location }) {
  const { image, name, category } = location;

  return (
    <StyledLink href={`/locations/${location._id}`}>
      <Card>
        <LocationName>{name}</LocationName>
        <Category>Kategorie: {category}</Category>
        {image?.url && (
          <ImageContainer>
            <StyledImage src={image.url} alt={name} fill />
          </ImageContainer>
        )}
      </Card>
    </StyledLink>
  );
}

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const LocationName = styled.h2`
  margin: 1rem;
`;

const Category = styled.p`
  margin: 1rem;
`;

const Card = styled.div`
  border: 1px solid lightgray;
  border-radius: 10px;
  overflow: hidden;
  flex: 1 1 300px;
  background-color: white;
  box-shadow:
    0 1px 1px hsl(0deg 0% 0% / 0.075),
    0 2px 2px hsl(0deg 0% 0% / 0.075),
    0 4px 4px hsl(0deg 0% 0% / 0.075),
    0 8px 8px hsl(0deg 0% 0% / 0.075),
    0 16px 16px hsl(0deg 0% 0% / 0.075);
`;

const ImageContainer = styled.div`
  position: relative;
  height: 400px;
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  pointer-events: none;
`;
