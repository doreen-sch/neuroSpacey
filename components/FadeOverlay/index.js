import styled from "styled-components";

export default function FadeOverlay() {
  return <StyledFade />;
}
const StyledFade = styled.div`
  position: fixed;
  top: 3rem;
  left: 0;
  right: 0;
  height: 4rem;
  background: linear-gradient(
    to bottom,
    var(--color-primaryDark-200) 60%,
    transparent
  );
  pointer-events: none;
  z-index: 1999;
`;
