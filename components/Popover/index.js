import React, { useState } from "react";
import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";

export default function Popover({ children, onClose, trigger, isEditMode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        {trigger || <button aria-label="Neue Location hinzufügen">+</button>}
      </Dialog.Trigger>
      <Dialog.Portal>
        <StyledOverlay></StyledOverlay>
        <StyledContent onInteractOutside={(event) => event.preventDefault()}>
          {React.cloneElement(children, {
            onClose: () => {
              setIsOpen(false);
              onClose?.();
            },
          })}
          {!isEditMode && <StyledClose aria-label="Close">x</StyledClose>}
        </StyledContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

const StyledOverlay = styled(Dialog.Overlay)`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  inset: 0;
  @keyframes overlayShow {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  z-index: 1000;
  animation: overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
`;

const StyledContent = styled(Dialog.Content)`
  background-color: white;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: min(90vw, 500px);
  max-height: 85vh;
  overflow-y: auto;
  border-radius: 10px;
  padding: 2rem;
  z-index: 1000;
`;

const StyledClose = styled(Dialog.Close)`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;
