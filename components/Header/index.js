import Popover from "../Popover";
import styled from "styled-components";

export default function Header() {
  return (
    <StyledHeader>
      <Popover></Popover>
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
