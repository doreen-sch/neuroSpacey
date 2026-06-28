import styled from "styled-components";
import MapIcon from "@/assets/icons/map-icon.svg";
import ListIcon from "@/assets/icons/list-icon.svg";
import { motion, AnimatePresence } from "framer-motion";

export default function ViewSlider({ view, setView }) {
  const isMap = view === "map";

  const toggleView = () => {
    setView(isMap ? "list" : "map");
  };

  return (
    <>
      <StyledBar $isMap={isMap} />
      <StyledTab
        type="button"
        onClick={toggleView}
        $isMap={isMap}
        aria-label={
          isMap ? "Wechsel zur Kartenansicht" : "Wechsel zur Listenansicht"
        }
      >
        <AnimatePresence mode="wait">
          <StyledIconWrapper
            key={view}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.2 }}
          >
            {isMap ? <ListIcon /> : <MapIcon />}
          </StyledIconWrapper>
        </AnimatePresence>
      </StyledTab>
    </>
  );
}

const StyledTab = styled.button`
  position: fixed;
  bottom: 10%;
  transform: ${({ $isMap }) =>
    $isMap ? "translateX(-0.5rem)" : "translateX(calc(100vw - 3.9rem))"};
  transition: transform 0.4s ease-in-out;
  z-index: 999;
  background-color: var(--color-text-700);
  border: none;
  border-radius: var(--radius-full);
  padding: 1rem;
  width: 4rem;
  height: 4rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 2rem;
    height: 2rem;
    fill: var(--color-text-100);
  }
`;
const StyledIconWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 1rem;
  height: 100vh;
  background-color: var(--color-text-700);
  z-index: 998;
  transform: ${({ $isMap }) =>
    $isMap ? "translateX(0)" : "translateX(calc(100vw - 1rem))"};

  transition: transform 0.4s ease-in-out;
`;
