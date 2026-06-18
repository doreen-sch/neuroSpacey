import Popover from "../Popover";
import styled from "styled-components";
import LocationForm from "../LocationForm";

export default function Header({ handleAddLocation, formData, setFormData }) {
  return (
    <StyledHeader>
      <Popover>
        <LocationForm
          onSubmit={handleAddLocation}
          formData={formData}
          setFormData={setFormData}
        />
      </Popover>
    </StyledHeader>
  );
}

const StyledHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 0 2.5rem;
  position: fixed;
  z-index: 10;
`;
