import styled from "styled-components";
import Image from "next/image";
import logo from "/public/neurospacey_logo.png";

export default function Header() {
  return (
    <StyledHeader>
      <Image src={logo} alt="neuroSpacey Logo" height={48} width={210} />
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
