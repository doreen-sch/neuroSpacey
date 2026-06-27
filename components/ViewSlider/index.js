import styled from "styled-components";
import MapIcon from "@/assets/icons/map-icon.svg";
import ListIcon from "@/assets/icons/list-icon.svg";

export default function ViewSlider({ view, setView }) {
  const isMap = view === "map";

  return (
    <>
      <StyledBar $isMap={isMap} />
      <StyledTab
        onClick={() => setView(isMap ? "list" : "map")}
        aria-label={
          view === "list"
            ? "Wechsel zur Kartenansicht"
            : "Wechsel zur Listenansicht"
        }
        $isMap={isMap}
      >
        {isMap ? <ListIcon /> : <MapIcon />}
      </StyledTab>
    </>
  );
}

const StyledTab = styled.button`
  position: fixed;
  left: ${({ $isMap }) => ($isMap ? "0" : "calc(100vw - 3rem)")};
  bottom: 15%;
  transition:
    left 0.4s ease-in-out,
    right 0.4s ease-in-out;

  z-index: 999;
  background-color: var(--color-primary-200);
  border: none;
  border-radius: ${({ $isMap }) =>
    $isMap
      ? "0 var(--radius-sm) var(--radius-sm) 0"
      : "var(--radius-sm) 0 0 var(--radius-sm)"};
  padding: 1rem 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 1.5rem;
    height: 1.5rem;
    fill: var(--color-primary-800);
  }
`;

const StyledBar = styled.div`
  position: fixed;
  top: 0;
  left: ${({ $isMap }) => ($isMap ? "0" : "calc(100vw - 1rem)")};
  width: 1rem;
  height: 100vh;
  background-color: var(--color-primary-200);
  z-index: 998;
  transition: left 0.4s ease-in-out;
`;
