import Popover from "../Popover";
import styled from "styled-components";
import LocationForm from "../LocationForm";

export default function Header({ onAddLocation }) {
  return (
    <StyledHeader>
      <Popover>
        <LocationForm onAddLocation={onAddLocation} />
      </Popover>
    </StyledHeader>
  );
}

const StyledHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 2rem 2.5rem;
  position: fixed;
  z-index: 10;
`;
