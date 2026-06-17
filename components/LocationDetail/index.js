import Image from "next/image";
import Popover from "../Popover";
import LocationForm from "../LocationForm";
import styled from "styled-components";

export default function LocationDetails({
  location,
  onEditLocation,
  formData,
  setFormData,
}) {
  const { name, address, description, category, image } = location;

  return (
    <DetailsPage>
      <InfoCard>
        <DetailsCardText>
          <strong>Ort:</strong> {name}
        </DetailsCardText>
        <DetailsCardText>
          <strong>Adresse:</strong> {address.street} {address.houseNumber},{" "}
          {address.zipCode} {address.city}
        </DetailsCardText>
        <DetailsCardText>
          <strong>Beschreibung:</strong> {description}
        </DetailsCardText>
        <DetailsCardText>
          <strong>Kategorie:</strong> {category}
        </DetailsCardText>
        <Popover trigger={<button type="button">Details bearbeiten</button>}>
          <LocationForm
            onAddLocation={onEditLocation}
            formData={formData}
            setFormData={setFormData}
            location={location}
            isEditMode={true}
          />
        </Popover>
      </InfoCard>
      <ImageGallery>
        {image?.url && (
          <StyledImage src={image.url} alt={`Image of ${location.name}`} fill />
        )}
      </ImageGallery>
    </DetailsPage>
  );
}

const DetailsPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 2rem auto;
  padding: 0 2rem;
  @media (min-width: 768px) {
    width: 60%;
  }
  align-items: center;
  margin-top: 2rem;
`;

const InfoCard = styled.div`
  width: 100%;
  border: 1px solid darkgray;
  border-radius: 10px;
  background-color: white;
  box-shadow:
    0 1px 1px hsl(0deg 0% 0% / 0.075),
    0 2px 2px hsl(0deg 0% 0% / 0.075),
    0 4px 4px hsl(0deg 0% 0% / 0.075),
    0 8px 8px hsl(0deg 0% 0% / 0.075),
    0 16px 16px hsl(0deg 0% 0% / 0.075);
`;

const DetailsCardText = styled.p`
  margin: 2rem;
`;

const ImageGallery = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  margin: 2rem;
  border: 1px solid darkgray;
  border-radius: 10px;
  flex: 1 1 300px;
  box-shadow:
    0 1px 1px hsl(0deg 0% 0% / 0.075),
    0 2px 2px hsl(0deg 0% 0% / 0.075),
    0 4px 4px hsl(0deg 0% 0% / 0.075),
    0 8px 8px hsl(0deg 0% 0% / 0.075),
    0 16px 16px hsl(0deg 0% 0% / 0.075);
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  object-position: center;
`;
