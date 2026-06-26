import Image from "next/image";
import Popover from "../Popover";
import LocationForm from "../LocationForm";
import styled from "styled-components";
import StilleStundeIcon from "/public/icons/hourglass.png";
import AddressIcon from "/public/icons/Pin_entsättigt.png";
import Link from "next/link";
import BackArrow from "/assets/icons/arrow-left.svg";

export default function LocationDetails({
  location,
  handleEditLocation,
  handleDeleteLocation,
  formData,
  setFormData,
}) {
  const { name, address, description, category } = location;

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
    <DetailsPage>
      <StyledHeroContainer>
        <StyledBackLink href="/">
          <BackArrow width={0} height={0} />
        </StyledBackLink>
        <StyledHeroImage src={imageSrc} alt={`Illustration ${category}`} fill />
        <StyledHeroText>
          <h1>{name}</h1>
        </StyledHeroText>
      </StyledHeroContainer>
      <ContentContainer>
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
        </StyledTagContainer>{" "}
        <StyledAddressLine>
          <StyledAddressIcon
            src={AddressIcon}
            alt="Adresse"
            width={0}
            height={0}
          />{" "}
          {address.street} {address.houseNumber}, {address.zipCode}{" "}
          {address.city}
        </StyledAddressLine>
        <StyledDetailsBlock>
          <h2>Beschreibung</h2>
          <p>{description}</p>
        </StyledDetailsBlock>
        <StyledButtonContainer>
          <Popover
            trigger={
              <StyledEditButton type="button">
                Details bearbeiten
              </StyledEditButton>
            }
            isEditMode={true}
          >
            <LocationForm
              onSubmit={handleEditLocation}
              formData={formData}
              setFormData={setFormData}
              location={location}
              isEditMode={true}
            />
          </Popover>
          <StyledDeleteButton
            type="button"
            aria-label="Eintrag löschen"
            onClick={handleDeleteLocation}
          >
            Eintrag löschen
          </StyledDeleteButton>
        </StyledButtonContainer>
      </ContentContainer>
    </DetailsPage>
  );
}

const StyledBackLink = styled(Link)`
  position: absolute;
  top: var(--spacing-xl);
  left: var(--spacing-xl);
  z-index: 3;
  svg {
    width: 2.5rem;
    height: 2.5rem;
    stroke: var(--color-text-900);
    stroke-width: 2;
    fill: none;
  }
`;

const StyledHeroContainer = styled.div`
  position: relative;
  overflow: visible;
  width: 100%;
  height: 35rem;
  padding-bottom: 8rem;
`;

const StyledHeroImage = styled(Image)`
  object-fit: cover;
  object-position: center 65%;
`;

const StyledHeroText = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  border-radius: 0 100px 0 0;
  background-color: var(--color-surface-200);
  margin-bottom: -1px;
  h1 {
    padding: 0 4rem 1rem var(--spacing-xl);
    max-width: 80%;
  }
`;

const StyledAddressIcon = styled(Image)`
  width: 1.2rem;
  height: 1.4rem;
`;

const ContentContainer = styled.div`
  background-color: var(--color-surface-50);
  border-radius: 0 100px 0 0;
  position: relative;
  margin-top: -1rem;
  padding: 1rem 0;
  z-index: 2;
  min-height: auto;
`;

const DetailsPage = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0rem auto;
  @media (min-width: 768px) {
    width: 60%;
    height: 0 auto;
  }
  background-color: var(--color-surface-200);
`;

const StyledAddressLine = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0 var(--spacing-xl);
`;

const StyledDetailsBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0;
  padding: 1rem var(--spacing-xl);
  h2,
  p {
    margin: var(--spacing-h3-p);
  }
`;

const StyledTagContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin: 0 1rem 1rem var(--spacing-xl);
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
`;

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 0.5rem;
  padding: 1.5rem 2rem;
`;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.9rem;
  font-weight: 700;
  padding: 0.5rem 1.25rem;
  border-radius: var(--radius-full);
  border: none;
  cursor: pointer;
`;

const StyledEditButton = styled(StyledButton)`
  background-color: var(--color-primary-200);
  color: var(--color-primary-800);
`;

const StyledDeleteButton = styled(StyledButton)`
  background-color: var(--color-accent-200);
  color: var(--color-accent-800);
`;
