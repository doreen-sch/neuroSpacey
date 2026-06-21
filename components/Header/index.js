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
  box-sizing: border-box;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 2000;
  background-color: white;
  padding: 1rem 2.5rem;
`;
