import Popover from "../Popover";
import LocationForm from "../LocationForm";
import styled from "styled-components";

export default function NavBar({ handleAddLocation, formData, setFormData }) {
  return (
    <StyledNavBar>
      <Popover>
        <LocationForm
          onSubmit={handleAddLocation}
          formData={formData}
          setFormData={setFormData}
        />
      </Popover>
    </StyledNavBar>
  );
}

const StyledNavBar = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 4rem;
  background-color: var(--color-primary-200);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
`;
