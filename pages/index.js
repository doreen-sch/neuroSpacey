import useSWR from "swr";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import logo from "/public/neurospacey_logo.png";
import { categoryImages } from "@/utils/categoryImages";
import PinIcon from "/public/icons/Pin_entsättigt.png";
import { useRef, useState } from "react";
import ChevronLeft from "@/assets/icons/circle-chevron-left.svg";
import ChevronRight from "@/assets/icons/circle-chevron-right.svg";

const categories = [
  { name: "Einkaufen", icon: "/images/einkaufen_hell.png" },
  { name: "Dienstleistung", icon: "/images/dienstleistung_hell.png" },
  { name: "Natur", icon: "/images/natur_hell.png" },
  { name: "Café & Restaurant", icon: "/images/cafeRestaurant_hell.png" },
  { name: "Kultur", icon: "/images/kultur_hell.png" },
  { name: "Veranstaltung", icon: "/images/veranstaltung_hell.png" },
];

export default function HomePage() {
  const { data: locations, isLoading, error } = useSWR("/api/locations");

  const sliderRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const categoryRef = useRef(null);
  const [canCatScrollLeft, setCanCatScrollLeft] = useState(false);
  const [canCatScrollRight, setCanCatScrollRight] = useState(true);

  const [isScrolling, setIsScrolling] = useState(false);

  const [isCatScrolling, setIsCatScrolling] = useState(false);
  const catScrollTimeout = useRef(null);

  function handleScroll() {
    const el = sliderRef.current;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth);
    setIsScrolling(true);
    clearTimeout(scrollTimeout.current);
    scrollTimeout.current = setTimeout(() => setIsScrolling(false), 500);
  }

  const scrollTimeout = useRef(null);

  function handleCategoryScroll() {
    const el = categoryRef.current;
    setCanCatScrollLeft(el.scrollLeft > 0);
    setCanCatScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth);
    setIsCatScrolling(true);
    clearTimeout(catScrollTimeout.current);
    catScrollTimeout.current = setTimeout(() => setIsCatScrolling(false), 500);
  }

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Oops… something went wrong.</p>;

  const newestLocations = locations?.slice(0, 5) || [];

  return (
    <StyledPage>
      <StyledPageHeader>
        <StyledLogo src={logo} alt="neuroSpacey Logo" width={180} height={48} />
      </StyledPageHeader>
      <StyledSection>
        <StyledSectionTitle>Neues entdecken</StyledSectionTitle>
        <StyledSliderWrapper>
          <StyledSliderContainer>
            {canScrollLeft && !isScrolling && (
              <StyledScrollIndicator $side="left">
                <ChevronLeft />
              </StyledScrollIndicator>
            )}
            <StyledDiscoverSlider ref={sliderRef} onScroll={handleScroll}>
              {newestLocations.map((location) => (
                <StyledDiscoverCard
                  key={location._id}
                  href={`/locations/${location._id}`}
                >
                  <StyledCardImage
                    src={categoryImages[location.category]}
                    alt={location.category}
                    fill
                  />
                  <StyledCardOverlay>
                    <StyledCardName>{location.name}</StyledCardName>
                    <StyledCardCity>
                      <Image
                        src={PinIcon}
                        alt="Standort"
                        width={16}
                        height={20}
                      />
                      {location.address.city}
                    </StyledCardCity>
                  </StyledCardOverlay>
                </StyledDiscoverCard>
              ))}
            </StyledDiscoverSlider>
            {canScrollRight && !isScrolling && (
              <StyledScrollIndicator $side="right">
                <ChevronRight />
              </StyledScrollIndicator>
            )}
          </StyledSliderContainer>
        </StyledSliderWrapper>
      </StyledSection>
      <StyledSection>
        <StyledSectionTitle>Orte nach Kategorien</StyledSectionTitle>
        <StyledCategoryWrapper>
          {canCatScrollLeft && !isCatScrolling && (
            <StyledScrollIndicator $side="left">
              <ChevronLeft />
            </StyledScrollIndicator>
          )}
          <StyledCategorySlider
            ref={categoryRef}
            onScroll={handleCategoryScroll}
          >
            {categories.map((category) => (
              <StyledCategoryItem key={category.name}>
                <StyledCategoryImageWrapper>
                  <Image src={category.icon} alt={category.name} fill />
                </StyledCategoryImageWrapper>
                <StyledCategoryName>{category.name}</StyledCategoryName>
              </StyledCategoryItem>
            ))}
          </StyledCategorySlider>
          {canCatScrollRight && !isCatScrolling && (
            <StyledScrollIndicator $side="right">
              <ChevronRight />
            </StyledScrollIndicator>
          )}
        </StyledCategoryWrapper>
      </StyledSection>
    </StyledPage>
  );
}

const StyledPage = styled.div`
  padding: 2rem 1.5rem 6rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const StyledPageHeader = styled.div`
  display: flex;
  align-items: center;
`;

const StyledLogo = styled(Image)`
  width: 15rem;
  height: auto;
  margin-top: -0.75rem;
`;

const StyledSliderContainer = styled.div`
  position: relative;
`;

const StyledScrollIndicator = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ $side }) => ($side === "left" ? "left: 2.7rem;" : "right: 1rem;")}
  z-index: 10;
  pointer-events: none;

  svg {
    width: 2rem;
    height: 2rem;
    stroke: var(--color-text-700);
    fill: none;
    opacity: 70%;
  }
`;

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const StyledSectionTitle = styled.h2`
  font-size: 1.5rem;
`;

const StyledSliderWrapper = styled.div`
  margin: 0 -3rem;
`;

const StyledDiscoverSlider = styled.div`
  display: flex;
  gap: 2rem;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-padding-left: 4rem;
  scroll-padding-right: 4rem;
  padding-left: 2rem;
  padding-right: 1rem;

  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const StyledDiscoverCard = styled(Link)`
  position: relative;
  flex-shrink: 0;
  width: 15rem;
  height: 20rem;
  margin: 0 0 0 1rem;
  border-radius: var(--radius-lg);
  overflow: hidden;
  scroll-snap-align: start;
  text-decoration: none;
  box-shadow:
    0 6px 9px rgba(0, 0, 0, 0.12),
    0 3px 6px rgba(0, 0, 0, 0.12);
`;

const StyledCardImage = styled(Image)`
  object-fit: cover;
`;

const StyledCardOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent);
  color: white;
`;

const StyledCardName = styled.h3`
  margin: 0;
  font-size: 1rem;
  color: white;
`;

const StyledCardCity = styled.p`
  margin: 0;
  font-size: 0.8rem;
  color: white;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  margin: 0.5rem 0 0 0;
`;

const StyledCategorySlider = styled.div`
  display: flex;
  gap: 1rem;
  padding-left: 2.5rem;
  padding-right: 1rem;

  overflow-x: auto;
  padding-bottom: 1rem;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const StyledCategoryItem = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
  background: none;
  border: none;
  cursor: pointer;
`;

const StyledCategoryImageWrapper = styled.div`
  position: relative;
  width: 4rem;
  height: 4rem;
  border-radius: var(--radius-full);
  overflow: hidden;
  background-color: var(--color-surface-200);
  box-shadow:
    0 2px 6px rgba(0, 0, 0, 0.12),
    0 3px 6px rgba(0, 0, 0, 0.12);
`;

const StyledCategoryName = styled.span`
  font-size: 0.75rem;
  color: var(--color-text-900);
  text-align: center;
  max-width: 5rem;
`;

const StyledCategoryWrapper = styled.div`
  position: relative;
  margin: 0 -3rem;
`;
