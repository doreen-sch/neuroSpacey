import Popover from "../Popover";
import styled from "styled-components";
import LocationForm from "../LocationForm";
import Image from "next/image";
import logo from "/public/neurospacey_logo.png";

export default function Header({ handleAddLocation, formData, setFormData }) {
  return (
    <StyledHeader>
      <StyledLogo src={logo} alt="neuroSpacey Logo" height={0} width={0} />

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
  justify-content: space-between;
  box-sizing: border-box;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 2000;
  padding: 1.2rem 1.5rem 1rem 1.5rem;
  background-color: var(--color-primaryDark-200);
`;

const StyledLogo = styled(Image)`
  height: 3rem;
  width: auto;
`;
