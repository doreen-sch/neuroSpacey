import Popover from "../Popover";
import styled from "styled-components";
import LocationForm from "../LocationForm";

export default function Header({ onAddLocation, formData, setFormData }) {
  return (
    <StyledHeader>
      <Popover trigger={"+"}>
        <LocationForm
          onAddLocation={onAddLocation}
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
