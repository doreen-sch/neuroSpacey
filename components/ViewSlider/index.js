import styled from "styled-components";
import MapIcon from "@/assets/icons/map-icon.svg";
import ListIcon from "@/assets/icons/list-icon.svg";

export default function ViewSlider({ view, setView }) {
  return (
    <StyledTab
      onClick={() => setView(view === "list" ? "map" : "list")}
      aria-label={
        view === "list"
          ? "Wechsel zur Kartenansicht"
          : "Wechsel zur Listenansicht"
      }
    >
      {view === "list" ? <MapIcon /> : <ListIcon />}
    </StyledTab>
  );
}

const StyledTab = styled.button`
  position: fixed;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 999;
  background-color: var(--color-primary-200);
  border: none;
  border-radius: var(--radius-sm) 0 0 var(--radius-sm);
  padding: 1rem 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 1.5rem;
    height: 1.5rem;
    stroke: var(--color-primary-800);
    stroke: none;
  }
`;
