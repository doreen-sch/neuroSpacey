import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import StilleStundeIcon from "/public/icons/hourglass.png";
import { categoryImages, categoryImagesDark } from "@/utils/categoryImages";

export default function LocationCard({ location, isDark }) {
  const { name, category, description } = location;

  const images = isDark ? categoryImagesDark : categoryImages;
  const imageSrc = images[location.category];

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
          <StyledTagContainer>
            <StyledTag>{category}</StyledTag>
            {location.isQuietHour && (
              <StyledTag>
                <Image
                  src={StilleStundeIcon}
                  alt="Stille Stunde"
                  width={16}
                  height={16}
                />
                Stille Stunde
              </StyledTag>
            )}
          </StyledTagContainer>
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
  overflow: hidden;
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
  body.dark & {
    background: linear-gradient(
      to right,
      var(--color-surfaceDark-800),
      transparent
    );
  }
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
  body.dark & {
    border-bottom: 2px solid var(--color-surfaceDark-600);
    border-top: 2px solid var(--color-surfaceDark-600);
  }
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  pointer-events: none;
  object-position: center 60%;
`;

const StyledTextContainer = styled.div`
  position: relative;
  flex: 1;
  padding: 0;
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
  body.dark &::before {
    background: linear-gradient(
      to right,
      var(--color-surfaceDark-600),
      transparent
    );
  }
  body.dark &::after {
    background: linear-gradient(
      to right,
      var(--color-surfaceDark-600),
      transparent
    );
  }
`;

const StyledLocationName = styled.h2`
  margin: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const StyledTagContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin: 0 2rem 2rem 1rem;
`;

const StyledTag = styled.span`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.75rem;
  padding: 0.25rem 0.75rem;
  border-radius: var(--radius-full);
  background-color: var(--color-surface-200);
  color: var(--color-text-900);
  body.dark & {
    background-color: var(--color-surfaceDark-700);
    color: var(--color-textDark-200);
  }
`;

const StyledDescription = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin: 1rem 4rem 1rem 1rem;
`;
