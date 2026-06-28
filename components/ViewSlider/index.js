import styled from "styled-components";
import MapIcon from "@/assets/icons/map-icon.svg";
import ListIcon from "@/assets/icons/list-icon.svg";
import { motion, AnimatePresence } from "framer-motion";

export default function ViewSlider({ view, setView }) {
  const isMap = view === "map";

  return (
    <>
      <StyledBar $isMap={isMap} />
      <StyledTab
        onClick={() => setView(isMap ? "list" : "map")}
        $isMap={isMap}
        aria-label={
          view === "list"
            ? "Wechsel zur Kartenansicht"
            : "Wechsel zur Listenansicht"
        }
      >
        <AnimatePresence mode="wait">
          <StyledIconWrapper
            key={view}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
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
  left: ${({ $isMap }) => ($isMap ? "-0.5rem" : "calc(100vw - 3.9rem)")};
  bottom: 10%;
  transition:
    left 0.4s ease-in-out,
    right 0.4s ease-in-out;

  z-index: 999;
  background-color: var(--color-text-700);
  border: none;
  border-radius: ${({ $isMap }) =>
    $isMap ? "var(--radius-full)" : "var(--radius-full)"};

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
  left: ${({ $isMap }) => ($isMap ? "0" : "calc(100vw - 1rem)")};
  width: 1rem;
  height: 100vh;
  background-color: var(--color-text-700);
  z-index: 998;
  transition: left 0.4s ease-in-out;
`;
