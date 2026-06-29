import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";
import AddIcon from "@/assets/icons/square-plus.svg";
import XIcon from "@/assets/icons/square-x.svg";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Popover({
  children,
  onClose,
  trigger,
  isEditMode,
  isOpen,
  onOpenChange,
}) {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onOpenChange} modal={false}>
      <Dialog.Trigger asChild>
        {trigger || (
          <StyledAddButton>
            <AnimatePresence mode="wait">
              <StyledIconWrapper
                key={isOpen ? "x" : "plus"}
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                {isOpen ? (
                  <XIcon aria-label="Formular schließen" />
                ) : (
                  <AddIcon aria-label="Neue Location hinzufügen" />
                )}
              </StyledIconWrapper>
            </AnimatePresence>
          </StyledAddButton>
        )}
      </Dialog.Trigger>
      <Dialog.Portal>
        {isOpen && (
          <StyledOverlay onClick={(event) => event.stopPropagation()} />
        )}
        <StyledContent onPointerDownOutside={(event) => event.preventDefault()}>
          {" "}
          {React.cloneElement(children, {
            onClose: () => {
              onOpenChange(false);
              onClose?.();
            },
          })}
        </StyledContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

const StyledOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  inset: 0;
  z-index: 1000;
`;

const StyledAddButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-700);

  svg {
    width: 2.5rem;
    height: 2.5rem;
  }
`;

const StyledIconWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledContent = styled(Dialog.Content)`
  background-color: white;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: min(80vw, 500px);
  max-height: 85vh;
  overflow-y: auto;
  border-radius: 10px;
  padding: 2rem;
  z-index: 1000;
  body.dark & {
    background-color: var(--color-surfaceDark-800);
  }
`;

const StyledClose = styled(Dialog.Close)`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;
